const axios = require("axios");
const path = require("path");

let devFile = path.join(path.dirname(path.dirname(__dirname)), '.env.dev');
require('dotenv').config({ path: devFile });

const winston = require("winston");
const logger = winston.loggers.get("securityLogger");

async function getIP(req, res, next) {
    try {
        let xffList = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].toString().split(", ")[0] : undefined;
        let ip = xffList || req.socket.remoteAddress;
        res.locals.ip = ip;
        next();
        return;
    } catch (error) {
        logger.error(error.stack);
        res.status(500).json({
            status: "failed",
            reason: "Internal Server Error"
        });
        return;
    }
}

async function turnstileCheck(req, res, next) {
    try {
        if (req.session.verified === true &&
            req.session.expireat !== undefined &&
            (typeof req.session.expireat === 'number') &&
            Date.now() < req.session.expireat
        ) {
            // Check pass
            next();
            return;
        }

        // Invalid verify session
        req.session.verified = undefined;
        req.session.expireat = undefined;

        logger.info(`User from ${res.locals.ip} passing turnstileCheck got 403. (Verification needed)`);
        res.status(403).json({
            status: "failed",
            reason: "Verification needed"
        });
        return;

    } catch (error) {
        logger.error(error.stack);
        res.status(500).json({
            status: "failed",
            reason: "Internal Server Error"
        });
        return;
    }
}

module.exports.getIP = getIP;
module.exports.turnstileCheck = turnstileCheck;