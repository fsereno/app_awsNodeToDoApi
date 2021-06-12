'use strict';

const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const item = JSON.parse(event.body);

    const params = {
        TableName : process.env.TODO_TABLE,
        Item: item
    };

    let statusCode = 200;
    let body = "";

    try {

        await dynamo.put(params).promise();

    } catch (error) {

        statusCode = 500;
        body = JSON.stringify(error);

    }

    const headers = {
        "Access-Control-Allow-Origin": "*"
    }

    const response = {
        statusCode,
        body,
        headers
    };

    return response;
};
