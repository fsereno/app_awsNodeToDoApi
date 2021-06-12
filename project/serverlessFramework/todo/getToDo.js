'use strict';

const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const id = event.pathParameters.id;

    const params = {
        TableName : process.env.TODO_TABLE,
        Key: { id }
    };

    let statusCode = 200;
    let body = "";

    try {

        const result = await dynamo.get(params).promise();
        body = JSON.stringify(result.Item);

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
