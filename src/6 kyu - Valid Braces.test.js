const { Test } = require('kata-test-framework-js')

const { validBraces } = require('./6 kyu - Valid Braces')

Test.assertEquals(validBraces( "()" ), true);
Test.assertEquals(validBraces( "[(])" ), false);

Test.assertEquals(validBraces("(){}[]"), true);
Test.assertEquals(validBraces("(){}[](){}[](){}[](){}[]"), true);
Test.assertEquals(validBraces("([{}])"), true);
Test.assertEquals(validBraces("(}"), false);
Test.assertEquals(validBraces("[(])"), false);
Test.assertEquals(validBraces("[({})](]"), false);
Test.assertEquals(validBraces("(({{[[]]}})"), false);
Test.assertEquals(validBraces("(({{[[)]]}})"), false);

