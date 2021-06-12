'use strict';

const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const username = event.requestContext.authorizer.jwt.claims['cognito:username'];

    const params = {
        TableName : process.env.TODO_TABLE,
        FilterExpression : 'username = :username',
        ExpressionAttributeValues : {':username' : username}
    };

    let statusCode = 200;
    let body = "";

    try {

        const result = await dynamo.scan(params).promise();
        body = JSON.stringify(result.Items);

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