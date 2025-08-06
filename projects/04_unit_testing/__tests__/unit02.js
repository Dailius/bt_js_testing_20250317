const { add } = require("../math");

beforeEach(() => {
  console.log("BEFORE EACH: Setting up the test environment...");
});

afterEach(() => {
  console.log("AFTER EACH:up the test environment...");
});

test("positive_sum_two_and_two_expected_four", () => {
  console.log("test [1]");
  expect(add(2, 2)).toBe(4);
});

test("positive_sum_minus_two_and_two_expected_zero", () => {
  console.log("test [2]");
  expect(add(-2, 2)).toBe(0);
});

test("positive_sum_two_and_minus_two_expected_zero", () => {
  console.log("test [3]");
  expect(add(2, -2)).toBe(0);
});

test("positive_sum_minus_two_and_minus_two_expected_minus_four", () => {
  console.log("test [4]");
  expect(add(-2, -2)).toBe(-4);
});
