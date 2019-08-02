/*
* 提交了才想起来可以用正则的。。
* https://www.codewars.com/kata/ip-validation/javascript
* */

const isValidIP = (str) => str.split('.').length === 4 && str.split('.').filter(item => `${+item}` === item && +item >= 0 && +item <= 255).length === str.split('.').length

exports.isValidIP = isValidIP;
