const { Test } = require('kata-test-framework-js')

const { XO } = require('./7 kyu - Exes and Ohs')

Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
