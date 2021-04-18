"use strict;"

const assert = require("assert");
const hasNoId = require("../project/serverlessFramework/todo/hasNoId");

describe("hasNoId", () => {
    it("Should return true if there is no Id passed", () => {
        let result = hasNoId({});
        assert.strictEqual(result, true);
    });
    it("Should return true if nothing is passed", () => {
        let result = hasNoId();
        assert.strictEqual(result, true);
    });
    it("Should return true if an Id is passed equal to -1", () => {
        let result = hasNoId({ id: "-1" });
        assert.strictEqual(result, true);
    });
    it("Should return false if an Id is passed not equal to -1", () => {
        let result = hasNoId({ id: "1" });
        assert.strictEqual(result, false);
    });
});