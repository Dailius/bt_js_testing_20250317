
describe('Unit Testing Example 03', () => {
  beforeAll(() => {
    console.log('BEFORE ALL: Setting up the test environment...');
  });
  
  afterAll(() => {
    console.log('AFTER ALL: Cleaning up the test environment...');
  });

  describe('Test Suite 01', () => {
    beforeEach(() => {
      console.log('1 BEFORE EACH: Setting up the test environment...');
    });

    afterEach(() => {
      console.log('1 AFTER EACH:up the test environment...');
    });

    test('01 Test 01', () => {
      console.log('Test 01: Running the test...');
    });

    test('01 Test 02', () => {
      console.log('Test 02: Running the test...');
    });
  });

  describe('Test Suite 02', () => {
    beforeEach(() => {
      console.log('02 BEFORE EACH: Setting up the test environment...');
    });

    afterEach(() => {
      console.log('02 AFTER EACH:up the test environment...');
    });

    test('02 Test 01', () => {
      console.log('Test 01: Running the test...');
    });

    test('02Test 02', () => {
      console.log('Test 02: Running the test...');
    });
  });

});