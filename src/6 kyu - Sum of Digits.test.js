const { Test } = require('kata-test-framework-js')

const { digital_root } = require('./6 kyu - Sum of Digits')

Test.assertEquals( digital_root(16), 7 )
Test.assertEquals( digital_root(456), 6 )
Test.assertEquals( digital_root(942), 6 )
Test.assertEquals( digital_root(132189), 6 )
Test.assertEquals( digital_root(493193), 2 )
