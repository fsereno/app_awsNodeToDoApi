"use strict";

const assert = require("assert");
const getToken = require("../project/serverlessFramework/todo/getToken");

describe("getToken", () => {
    it("Should return the token if there is no parse error", () => {

        const result = getToken(false, "TEST");

        assert.strictEqual("TEST", result);
    });
    it("Should not return the token if there is a parse error", () => {

        const result = getToken(true, "TEST");

        assert.strictEqual(undefined, result);
    });
    it("Should not return the token if there is not token", () => {

        const result = getToken(false);

        assert.strictEqual(undefined, result);
    });
});