/*
* 咋就没想到用shift方式呢。。
* https://www.codewars.com/kata/sort-the-odd/javascript
* */

function sortArray(array) {
  const evenArr = [];
  array.forEach((item, index) => {
    if (!(item % 2)) {
      evenArr.push({ v: item, k: index })
    }
  })
  const oddArr = array.filter(item => item % 2).sort((prev, next) => prev - next)
  evenArr.forEach(item => oddArr.splice(item.k, 0, item.v))
  return oddArr
}

exports.sortArray = sortArray
