const { describe, it } = require("node:test");
const { strict: assert } = require("node:assert");

const answer = require("../answer_console_log_order");

describe("answer_console_log_order", () => {
  it("has correct consoleLogOrderPromise", () => {
    assert.deepEqual(answer.default.consoleLogOrderPromise, [1, 3, 6, 2, 4, 5]);
  });

  it("has correct consoleLogOrderAsync", () => {
    assert.deepEqual(answer.default.consoleLogOrderAsync, [1, 3, 6, 2, 4, 5]);
  });
});
