const express = require("express");
const router = express.Router();
const path = require("path");
const uap = require('ua-parser-js');
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const loginHash = require("./loginHash");

const getIP = require("./security").getIP;

const winston = require("winston");
const logger = winston.loggers.get("accessLogger");

router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

router.use(cors({
    credentials: true,
    origin: "http://localhost:9000",
    exposedHeaders: ["set-cookie"],
}));

router.use("/getlink", getIP, async (req, res) => {
    try {
        let hashData = await loginHash.generateChallengeLink();
        let authBody = {
            'state': "",
            'redirect_uri': 'npf5c38e31cd085304b://auth',
            'client_id': '5c38e31cd085304b',
            'scope': 'openid user user.mii user.email user.links[].id',
            'response_type': 'session_token_code',
            'session_token_code_challenge': hashData.auth_code_challenge,
            'session_token_code_challenge_method': 'S256',
        }
        let parsedURL = new URLSearchParams(authBody).toString();
        logger.info(`User from ${res.locals.ip} requested /api/getlink got 200.`);
        res.status(200).json({
            status: "success",
            reason: "",
            link: `https://accounts.nintendo.com/connect/1.0.0/authorize?${parsedURL}`,
            verifier: hashData.auth_code_verifier
        });
    } catch (error) {
        logger.error(error.stack);
        logger.info(`User from ${res.locals.ip} requested /api/getlink got 500.`);
        res.status(500).json({
            status: "failed",
            reason: "Internal server error"
        });
        return;
    }
});

router.get("/getsessiontoken", getIP, async (req, res) => {
    try {
        if (!(req.query.session_token_code !== undefined && req.query.session_token_code !== "" && req.query.session_token_code_verifier !== undefined && req.query.session_token_code_verifier !== "")) {
            logger.info(`User from ${res.locals.ip} requested /api/getsessiontoken got 403. (Too few arguments)`);
            res.status(403).json({
                status: "failed",
                reason: "Too few arguments"
            });
            return;
        }

        try {
            let axiosResult = await axios.post("https://accounts.nintendo.com/connect/1.0.0/api/session_token", {
                session_token_code: req.query.session_token_code,
                session_token_code_verifier: req.query.session_token_code_verifier,
                client_id: '5c38e31cd085304b'
            }, {
                headers: {
                    'User-Agent': "Coral/2.10.1 (com.nintendo.znca; build:5690; iOS 17.5.1) NASDK/2.10.1",
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cache-Control': 'no-cache'
                }
            });

            if (axiosResult.status && axiosResult.status == 200) {
                logger.info(`User from ${res.locals.ip} requested /api/getsessiontoken got 200.`);
                res.status(200).json({
                    status: "success",
                    reason: "",
                    session_token: axiosResult.data["session_token"]
                });
                return;
            }
        } catch (error) {
            logger.error(error.stack);
            if (error.response) {
                logger.info(`User from ${res.locals.ip} requested /api/getsessiontoken got 400. (${error.response.data["error_description"]})`);
                res.status(error.response.status !== undefined ? error.response.status : 400).json({
                    status: "failed",
                    reason: error.response.data["error_description"]
                });
                return;
            };
        }
    } catch (error) {
        logger.error(error.stack);
        logger.info(`User from ${res.locals.ip} requested /api/getsessiontoken got 500.`);
        res.status(500).json({
            status: "failed",
            reason: "Internal server error"
        });
        return;
    }
});

router.get("/getaccesstoken", getIP, async (req, res) => {
    try {
        if (!(req.query.session_token !== undefined && req.query.session_token !== "")) {
            logger.info(`User from ${res.locals.ip} requested /api/getaccesstoken got 403. (Too few arguments)`);
            res.status(403).json({
                status: "failed",
                reason: "Too few arguments"
            });
            return;
        }

        let requestBody = {
            client_id: '5c38e31cd085304b',
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer-session-token',
            session_token: req.query.session_token
        }

        try {
            let axiosResult = await axios.post('https://accounts.nintendo.com/connect/1.0.0/api/token', requestBody, {
                headers: {
                    'User-Agent': "Coral/2.10.1 (com.nintendo.znca; build:5690; iOS 17.5.1) NASDK/2.10.1",
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cache-Control': 'no-cache',
                    'Accept-Encoding': 'gzip, deflate, br'
                }
            });
            if (axiosResult.status && axiosResult.status == 200) {
                logger.info(`User from ${res.locals.ip} requested /api/getaccesstoken got 200.`);
                res.status(200).json({
                    status: "success",
                    reason: "",
                    access_token: axiosResult.data["access_token"]
                });
                return;
            }
        } catch (error) {
            logger.error(error.stack);
            if (error.response) {
                logger.info(`User from ${res.locals.ip} requested /api/getaccesstoken got 400. (${error.response.data["error_description"]})`);
                res.status(error.response.status !== undefined ? error.response.status : 400).json({
                    status: "failed",
                    reason: error.response.data["error_description"]
                });
                return;
            };
        }
    } catch (error) {
        logger.error(error.stack);
        logger.info(`User from ${res.locals.ip} requested /api/getaccesstoken got 500.`);
        res.status(500).json({
            status: "failed",
            reason: "Internal server error"
        });
        return;
    }
});

router.get("/getme", getIP, async (req, res) => {
    try {
        if (!(req.query.access_token !== undefined && req.query.access_token !== "")) {
            logger.info(`User from ${res.locals.ip} requested /api/getme got 403. (Too few arguments)`);
            res.status(403).json({
                status: "failed",
                reason: "Too few arguments"
            });
            return;
        }
        try {
            let axiosResult = await axios.get('https://api.accounts.nintendo.com/2.0.0/users/me', {
                headers: {
                    'User-Agent': "com.nintendo.znej/1.13.0 (Android/7.1.2)",
                    'Cache-Control': 'no-cache',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Authorization': `Bearer ${req.query.access_token}`
                }
            });
            if (axiosResult.status && axiosResult.status == 200) {
                logger.info(`User from ${res.locals.ip} requested /api/getme got 200.`);
                res.status(200).json({
                    status: "success",
                    reason: "",
                    userdata: {
                        nickname: axiosResult.data["nickname"],
                        country: axiosResult.data["country"],
                    }
                });
                return;
            }
        } catch (error) {
            logger.error(error.stack);
            if (error.response) {
                logger.info(`User from ${res.locals.ip} requested /api/getme got ${error.response.status !== undefined ? error.response.status : 400}. (${error.response.data["error_description"]})`);
                res.status(error.response.status !== undefined ? error.response.status : 400).json({
                    status: "failed",
                    reason: error.response.data["error_description"]
                });
                return;
            };
        }
    } catch (error) {
        logger.error(error.stack);
        logger.info(`User from ${res.locals.ip} requested /api/getme got 500.`);
        res.status(500).json({
            status: "failed",
            reason: "Internal server error"
        });
        return;
    }
});

router.get("/gethistory", getIP, async (req, res) => {
    try {
        if (!(req.query.access_token !== undefined && req.query.access_token !== "")) {
            logger.info(`User from ${res.locals.ip} requested /api/gethistory got 403. (Too few arguments)`);
            res.status(403).json({
                status: "failed",
                reason: "Too few arguments"
            });
            return;
        }

        try {
            let axiosResult = await axios.get('https://news-api.entry.nintendo.co.jp/api/v1.1/users/me/play_histories', {
                headers: {
                    'User-Agent': "com.nintendo.znej/1.13.0 (Android/7.1.2)",
                    'Cache-Control': 'no-cache',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Authorization': `Bearer ${req.query.access_token}`
                }
            });
            if (axiosResult.status && axiosResult.status == 200) {
                logger.info(`User from ${res.locals.ip} requested /api/gethistory got 200.`);
                res.status(200).json({
                    status: "success",
                    reason: "",
                    playHistories: axiosResult.data["playHistories"]
                });
                return;
            }
        } catch (error) {
            logger.error(error.stack);
            if (error.response) {
                logger.info(`User from ${res.locals.ip} requested /api/gethistory got ${error.response.status !== undefined ? error.response.status : 401}. (${error.response.data["error_description"]})`);
                res.status(error.response.status !== undefined ? error.response.status : 401).json({
                    status: "failed",
                    reason: error.response.data["detail"] !== undefined ? error.response.data["detail"] : "Unknown error"
                });
                return;
            };
        }
    } catch (error) {
        logger.error(error.stack);
        logger.info(`User from ${res.locals.ip} requested /api/gethistory got 500.`);
        res.status(500).json({
            status: "failed",
            reason: "Internal server error"
        });
        return;
    }
})

module.exports.router = router;

