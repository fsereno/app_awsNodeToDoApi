"use strict;"

module.exports = (eventBody = "") => {

    let requestBody = {};
    let parseError = false;

    try {
        requestBody = JSON.parse(eventBody);
    } catch (error) {
        parseError = true;
        console.error(error.message);
    }

    return [
        parseError,
        requestBody
    ];
};