const sum = require("./index.js");

describe("Sum to numbers", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test.only("adds 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
  test("adds 10 + 2 to equal 4", () => {
    expect(sum(10, 2)).toBe(12);
  });
});
