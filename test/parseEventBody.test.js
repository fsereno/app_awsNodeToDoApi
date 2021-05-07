"use strict";

const assert = require("assert");
const parseEventBody = require("../project/serverlessFramework/todo/parseEventBody");

describe("parseEventBody", () => {
    it("Should return an error if not parsed", () => {

        const [ parseError ] = parseEventBody("");

        assert.strictEqual(true, parseError);
    });
    it("Should not return an error if parsed and return the expected object", () => {

        const [ parseError, requestBody ] = parseEventBody('{ "token": "TEST" }');

        assert.strictEqual(false, parseError);
        assert.strictEqual("TEST", requestBody.token);
    });
});