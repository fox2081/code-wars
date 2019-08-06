const { Test } = require('kata-test-framework-js')

const { zeros, test } = require("./5 kyu - Number of trailing zeros of N!")

test(30)

Test.describe("Sample Tests", function() {
  Test.it("Should pass sample tests", function() {
    Test.assertEquals(zeros(0), 0, "Testing with n = 0")
    Test.assertEquals(zeros(5), 1, "Testing with n = 5")
    Test.assertEquals(zeros(6), 1, "Testing with n = 6")
    Test.assertEquals(zeros(30), 7, "Testing with n = 30")
  });
});
