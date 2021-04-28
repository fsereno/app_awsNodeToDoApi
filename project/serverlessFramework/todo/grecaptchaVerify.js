'use strict';

exports.handler = async (event) => {

    //https://www.google.com/recaptcha/api/siteverify?secret=6LcP6b0aAAAAACUDJYgZEbD6CYUzmoG1GvJIBz8y&response=03AGdBq25lqtD7NvnN--YP9GdkU-Y00xUwXVPt4XYlBt91JLS6gVtaPCkq5ZmOVlStp6in2_y5Ca-vwkt-EfjdAHa8GmQhA-Fa2rl4AvIKj2yHAMwzWxjg65CDvdjbLLrlYQyexQ9_B0jG8c07Fl3SsGnAOCwSMYxKzjBt_syfAjnXUjWlIpoTCexJZfoskxXE89fJntS4DLyVztxp36Kqk6sC7j8jO2wpN8UAWpqUoHLlvpJfLe1wp7A3pnQMD3f7C7Fm1AWdrJOmLbXdOOkBSAaz-kMXSaf6rXHzLBMHa9JlMUZKu0J_bNVAOwx6CXqi9wRVzpe_heDR0MrFPd10tjqq-FA7oZ0eTlIH7sTdrOZFld1nr5gPzr8lFJpGkvqS0zncXb-Ye9hpQhd3Ede9m6hFClOCW5zoL_Leo224uhxlgvB_2jXanyeRSypMNawt8aasVGySoVnc

    const token = event.body.token;
    const secret = process.env.G_RECAPTCHA_SECRET;

    const statusCode = 200;

    const body = JSON.stringify({ token, secret });

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
