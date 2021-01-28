const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    const username = "in28minutes"; //event.pathParameters.id;

    let params = {
        TableName : 'todo',
        FilterExpression : 'username = :username',
        ExpressionAttributeValues : {':username' : username}
    };

    const result = await dynamo.scan(params).promise();

    const statusCode = 200;

    const body = JSON.stringify(result.Items);
    
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
