const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const id = event.pathParameters.id;

    var params = {
        TableName : 'todo',
        Key: { id }
    };

    const result = await dynamo.get(params).promise();

    const statusCode = 200;

    const body = JSON.stringify(result.Item);

    const response = {
        statusCode,
        body,
    };
    return response;
};
