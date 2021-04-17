'use strict';

const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const id = event.pathParameters.id;

    let params = {
        TableName : process.env.TODO_TABLE,
        Key: { id }
    };

    const result = await dynamo.get(params).promise();

    const statusCode = 200;

    const body = JSON.stringify(result.Item);

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
