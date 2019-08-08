const { Test } = require('kata-test-framework-js')

const { whoIsNext } = require('./5 kyu - Double Cola')

let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
Test.assertEquals(whoIsNext(names, 1), "Sheldon");
Test.assertEquals(whoIsNext(names, 6), "Sheldon");
Test.assertEquals(whoIsNext(names, 1802), "Penny");
