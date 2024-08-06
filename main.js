const express = require("express");
const args = require("yargs").argv;
const cors = require("cors");
const tpu = require("tcp-port-used");
const logger = require("./src/logger");
const session = require("express-session");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const winston = require("winston");
const mainLogger = winston.loggers.get("mainLogger");

const loginHash = require("./src/loginHash");

const accessRouter = require("./src/access").router;

const app = express();
let port = args['port'] ? parseInt(args['port']) : 3000;
let host = args['host'] ? parseInt(args['host']) : "localhost";


async function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

(async () => {
    while (await tpu.check(port, "localhost")) {
        await sleep(200);
        console.log(`Port ${port} used, now trying ${port + 1}...`);
        port = port + 1;
    }

    await logger.checkLog();

    app.set('trust proxy', 1); // trust first proxy
    app.use(session({
        secret: crypto.randomUUID(),
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 900000 // 15 Minutes,
        },
    }));

    app.use("/api", accessRouter);
    app.set('view engine', 'ejs'); // Use ejs to render statis pages
    app.use(bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));

    await app.listen(port, () => {
        mainLogger.info(`Listening on port ${port}.`);
    });
})();