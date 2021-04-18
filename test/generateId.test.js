"use strict";

const assert = require("assert");
const generateId = require("../project/serverlessFramework/todo/generateId");

describe("generateId", () => {
    it("Should return an id as string", () => {
        const id = generateId();
        const result = typeof id === "string";
        assert.strictEqual(result, true);
    });
    it("Should return an id with positive length", () => {
        const id = generateId();
        const result = id.length > 0;
        assert.strictEqual(result, true);
    });
});