const { Test } = require('kata-test-framework-js')

const { isTriangle } = require('./7 kyu - Is this a triangle')

Test.describe("PublicTest", function() {
  Test.assertEquals(isTriangle(1,2,2), true);
  Test.assertEquals(isTriangle(7,2,2), false);
});
