"use strict;"

module.exports = (body = "", isBase64Encoded = false) => {

    let result = body;

    if (body && isBase64Encoded) {
        const buff = Buffer.from(body, 'base64');
        result = buff.toString('utf-8');
    }

    return result;
};