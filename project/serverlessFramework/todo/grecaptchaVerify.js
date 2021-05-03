'use strict';

const axios = require('axios');

exports.handler = async (event) => {

    let eventBody;
    let requestBody;
    let parseError = false;
    let body = {};
    let statusCode = 200;

    if (event.body) {

        if (event.isBase64Encoded) {
            const buff = Buffer.from(event.body, 'base64');
            eventBody = buff.toString('utf-8');
        } else {
            eventBody = event.body;
        }

    }

    if (eventBody) {
        try {

            requestBody = JSON.parse(eventBody);

        } catch (error) {
            parseError = true;
            console.error(error.message);
        }
    }

    const token = requestBody && requestBody.token ? requestBody.token : undefined;

    if (!parseError && token) {

        const secret = process.env.G_RECAPTCHA_SECRET_V2;
        const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

        const result = await axios.post(url);

        if (result.status !== statusCode) {
            statusCode = result.status;
        }

        body = { result: result.data };

    }

    const headers = {
        "Access-Control-Allow-Origin": "*"
    }

    body = JSON.stringify(body);

    const response = {
        statusCode,
        body,
        headers
    };

    return response;
};