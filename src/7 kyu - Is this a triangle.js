/*
* https://www.codewars.com/kata/is-this-a-triangle/javascript
* */

const isTriangle = (a, b, c) => a + b > c && b + c > a && a + c > b;

exports.isTriangle = isTriangle;
