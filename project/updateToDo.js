const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const body = JSON.parse(event.body);

    let params = {
        TableName : 'todo',
        Item: body 
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
