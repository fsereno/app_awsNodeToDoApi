const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const id = event.pathParameters.id;

    var params = {
        TableName : 'todo',
        Key: { id }
    };

    const result = await dynamo.get(params).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(result.Item),
    };
    return response;
};
