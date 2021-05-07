'use strict';

const axios = require('axios');
const getEventBody = require("./getEventBody");
const parseEventBody = require("./parseEventBody");
const getToken = require("./getToken");

exports.handler = async (event) => {

    let body = {};
    let statusCode = 200;

    const eventBody = getEventBody(event.body, event.isBase64Encoded);

    const [
        parseError,
        requestBody
    ] = parseEventBody(eventBody);

    const token = getToken(parseError, requestBody.token);

    if (token) {

        const secret = process.env.G_RECAPTCHA_SECRET_V2;
        const url = `${process.env.G_RECAPTCHA_ENDPOINT}?secret=${secret}&response=${token}`;

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