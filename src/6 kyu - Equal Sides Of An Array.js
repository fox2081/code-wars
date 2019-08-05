/*
* 只用习惯了splice, 用slice能写更少
* https://www.codewars.com/kata/equal-sides-of-an-array/javascript
* */

function sum(arr, start, end) {
  arr = Array.from(arr).splice(start, end)
  return arr.length ? arr.reduce((prev, next) => prev + next) : 0
}

function findEvenIndex(arr) {
  let rs = -1;
  arr.forEach((item, index) => {
    if (sum(arr, 0, index) === sum(arr, index + 1, arr.length - 1)) {
      rs = index
    }
  })
  return rs
}

exports.findEvenIndex = findEvenIndex
