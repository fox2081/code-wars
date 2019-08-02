const { Test } = require('kata-test-framework-js')

const { isValidIP } = require('./6 kyu - IP Validation')

Test.describe("Sample tests", () => {

  Test.assertEquals(isValidIP("0.0.0.0"), true);
  Test.assertEquals(isValidIP("12.255.56.1"), true);
  Test.assertEquals(isValidIP("137.255.156.100"), true);

  Test.assertEquals(isValidIP(''), false);
  Test.assertEquals(isValidIP('abc.def.ghi.jkl'), false);
  Test.assertEquals(isValidIP('123.456.789.0'), false);
  Test.assertEquals(isValidIP('12.34.56'), false);
  Test.assertEquals(isValidIP('01.02.03.04'), false);
  Test.assertEquals(isValidIP('256.1.2.3'), false);
  Test.assertEquals(isValidIP('1.2.3.4.5'), false);
  Test.assertEquals(isValidIP('123,45,67,89'), false);
  Test.assertEquals(isValidIP('1e0.1e1.1e2.2e2'), false);
  Test.assertEquals(isValidIP(' 1.2.3.4'), false);
  Test.assertEquals(isValidIP('1.2.3.4 '), false);
  Test.assertEquals(isValidIP('12.34.56.-7'), false);
  Test.assertEquals(isValidIP('1.2.3.4\n'), false);
  Test.assertEquals(isValidIP('\n1.2.3.4'), false);
});
