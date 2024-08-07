const fs = require("fs");
const path = require("path");

const hkPath = path.join(path.dirname(__dirname), 'res', 'titledb', 'HK.zh.json');
const enPath = path.join(path.dirname(__dirname), 'res', 'titledb', 'US.en.json');
const jpPath = path.join(path.dirname(__dirname), 'res', 'titledb', 'JP.ja.json');
const winston = require("winston");
const logger = winston.loggers.get("databaseLogger");

let hkList = {};
let jpList = {};
let enList = {};

async function readList() {
    try {
        let hkFile = await fs.promises.readFile(hkPath, {encoding: 'utf-8'});
        hkList = JSON.parse(hkFile);
        logger.info(`Chinese game database loaded, ${Object.keys(hkList).length} records loaded.`);
    } catch (error) {
        logger.error(error.stack);
    }

    try {
        let jpFile = await fs.promises.readFile(jpPath, {encoding: 'utf-8'});
        jpList = JSON.parse(jpFile);
        logger.info(`Japanese game database loaded, ${Object.keys(jpList).length} records loaded.`);
    } catch (error) {
        logger.error(error.stack);
    }

    try {
        let enFile = await fs.promises.readFile(enPath, {encoding: 'utf-8'});
        enList = JSON.parse(enFile);
        logger.info(`English game database loaded, ${Object.keys(enList).length} records loaded.`);
    } catch (error) {
        logger.error(error.stack);
    }
    
}

async function checkGameDetail(titleID, lang = 'en') {
    if (!['en', 'zh', 'ja'].includes(lang)) {
        throw EvalError("Invalid language");
    }

    let queryResult = {
        status: "failed",
        reason: ""
    }

    let querySequence = []
    let queryLang = []


    if (lang == 'zh') {
        querySequence = [hkList, enList, jpList];
        queryLang = ['zh-Hant', 'en', 'ja'];
    }

    if (lang == 'en') {
        querySequence = [enList, jpList];
        queryLang = ['en', 'ja'];
    }

    if (lang == 'ja') {
        querySequence = [jpList];
        queryLang = ['ja'];
    }

    for (const [index, item] of querySequence.entries()) {
        for (const subitem of Object.keys(item)) {
            if (item[subitem]["id"] == titleID) {
                queryResult['status'] = 'success';
                queryResult['result'] = item[subitem];
                queryResult['lang'] = queryLang[index];
                return queryResult;
            }
        }
    }

    return queryResult;
}

module.exports.readList = readList;
module.exports.checkGameDetail = checkGameDetail;