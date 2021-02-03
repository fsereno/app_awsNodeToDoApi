const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {

    const accessToken = event.headers.access;

    let username = "";

    if (accessToken) {

        const identity = {
            AccessToken: accessToken
        };

        let user = await cognitoidentityserviceprovider.getUser(identity).promise();

        if (user) {
            username = user.Username;
        }

    }

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
