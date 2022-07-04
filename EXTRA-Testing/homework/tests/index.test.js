const checkSeatStatus = require("../homework.js");

describe("checkSeatStatus", function () {
  it("Debería devolver function", function () {
    expect(typeof checkSeatStatus).toBe("function");
  });
});
describe("pimba", function () {
  it("Debería devolver pimba", function () {
    expect(typeof "pimba").toBe("string");
  });
});
