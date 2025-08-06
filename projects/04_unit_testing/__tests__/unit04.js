const { add } = require("../math");

describe("Test math sum", () => {
  describe("Positive test suit", () => {
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

    //  some more positive tests
  });

  describe("Negative test suit", () => {
    test("negative_sum_text_two_and_number_two", () => {
      expect(add("2", 2)).toBe(4);
    });

    //  some more negative tests
  });
});
