'use strict';

const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const hasNoId = require("./hasNoId");

exports.handler = async (event) => {

    const item = JSON.parse(event.body);

    if (hasNoId(item)) {

        const id =  Math.random() * Math.pow(10,16);

        item.id = id.toString();
    }

    let params = {
        TableName : process.env.TODO_TABLE,
        Item: item
    };

    await dynamo.put(params).promise();

    const statusCode = 200;

    const headers = {
        "Access-Control-Allow-Origin": "*"
    }

    const response = {
        statusCode,
        body:"",
        headers
    };
    return response;
};
