"use strict";

const assert = require("assert");
const getEventBody = require("../project/serverlessFramework/todo/getEventBody");

describe("getEventBody", () => {
    it("Should return TEST when passing VEVTVA== and isBase64Encoded is true", () => {

        const result = getEventBody("VEVTVA==", true);

        assert.strictEqual("TEST", result);
    });
    it("Should return TEST when isBase64Encoded is false", () => {

        const result = getEventBody("TEST", false);

        assert.strictEqual("TEST", result);
    });
    it("Should return empty string when there is no body", () => {

        const result = getEventBody();

        assert.strictEqual("", result);
    });
    it("Should return the same as passed by default", () => {

        const result = getEventBody("TEST");

        assert.strictEqual("TEST", result);
    });
});