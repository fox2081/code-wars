const { Test } = require('kata-test-framework-js')

const { createPhoneNumber } = require('./6 kyu - Create Phone Number')


Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
