/*
* https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript
* */

function XO(str) {
  //code here
  let arr = str.split('')
  let oLength = 0, xLength = 0
  arr.forEach(i => {
    if (i.toLowerCase() === 'x') xLength++;
    if (i.toLowerCase() === 'o') oLength++;
  })
  return oLength === xLength
}

exports.XO = XO;
