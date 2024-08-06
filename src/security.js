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

module.exports.getIP = getIP;