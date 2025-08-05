const {add} = require('../math');

test('Some test name', ()=>{
    // here should be some test code

    // test should contain 3 parts:
    // 1. Arrange
    // 2. Act
    // 3. Assert [IMPORTANT]
});

test('positive_sum_two_and_three_expected_five', ()=>{
    // here should be some test code

    // test should contain 3 parts:
    // 1. Arrange
    const inputA = 2;
    const inputB = 3;
    const expectedResult = 5;

    // 2. Act
    const actualResult = add(inputA, inputB)

    // 3. Assert [IMPORTANT]
    expect(actualResult).toBe(expectedResult);
});

test('positive_sum_two_and_two_expected_four', ()=>{
    expect(add(2,2)).toBe(4);
});

