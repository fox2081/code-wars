/*
* 看了第一名的解答，感觉智商被爆
* https://www.codewars.com/kata/541c8630095125aba6000c00/javascript
* */

function digital_root(n) {
  let rs = `${`${n}`.split('').reduce((prev, next) => +prev + +next)}`.split('');
  return rs.length === 1 ? +rs[0] : digital_root(+rs.join(''));
}

exports.digital_root = digital_root
