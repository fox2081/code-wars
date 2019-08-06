const { Test } = require('kata-test-framework-js')

const { validParentheses } = require('./5 kyu - Valid Parentheses')

Test.assertEquals(validParentheses( "()" ), true);
Test.assertEquals(validParentheses( "())" ), false);
