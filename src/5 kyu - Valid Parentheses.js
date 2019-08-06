/*
* 上次吃了6 kyu - Valid Braces的亏，这次不会再犯傻了
* https://www.codewars.com/kata/52774a314c2333f0a7000688/javascript
* */

function validParentheses (parens) {
  let str = parens.replace(/\(\)/g, '')
  return str && str === parens ? false : (str ? validParentheses(str) : true)
}

exports.validParentheses = validParentheses
