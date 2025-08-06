const { add } = require("../math");

test("Some test name", () => {
  // here should be some test code
  // test should contain 3 parts:
  // 1. Arrange
  // 2. Act
  // 3. Assert [IMPORTANT]
});

test("positive_sum_two_and_three_expected_five", () => {
  // here should be some test code

  // test should contain 3 parts:
  // 1. Arrange
  const inputA = 2;
  const inputB = 3;
  const expectedResult = 5;

  // 2. Act
  const actualResult = add(inputA, inputB);

  // 3. Assert [IMPORTANT]
  expect(actualResult).toBe(expectedResult);
});

test("positive_sum_two_and_two_expected_four", () => {
  expect(add(2, 2)).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data.one).toBe(1);
  expect(data.two).toEqual(2);
  expect(data).toEqual({ two: 2, one: 1 });
  expect(data.some_property_name).toBeUndefined();
});

test(".toBe() with objects (should fail)", () => {
  const obj1 = { name: "Alice" };
  const obj2 = { name: "Alice" };
  const obj3 = obj1;

  console.log(obj1);
  console.log(obj2);
  console.log(obj3);

  expect(obj1).toEqual(obj2); // ✅ Passes: compares values recursively
  expect(obj1).toBe(obj3); //  ✅
  // expect(obj1).toBe(obj2); // ❌ Fails: different references
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);

  expect(value > 3).toEqual(true);
  expect(value > 3).toBeTruthy();
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch("stop");
  //   expect('ChriSTOPh').toMatch("stop");
  expect("Christoph").toMatch(/stop/i); // case insensitive
  expect("ChriSTOPh").toMatch(/stop/i); // case insensitive
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

//Exceptions
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});


