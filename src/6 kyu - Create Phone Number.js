/*
* https://www.codewars.com/kata/create-phone-number/javascript
* */

const createPhoneNumber = (numbers) => ['(', ...numbers.splice(0, 3), ') ', ...numbers.splice(0, 3), '-', ...numbers.splice(0, 4)].join('')

exports.createPhoneNumber = createPhoneNumber
