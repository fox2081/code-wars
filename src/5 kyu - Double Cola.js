/*
* 又是数列问题，挺蛋疼的
* https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/javascript
* */

function whoIsNext(names, r){
  let index = 0
  let sp = names.length * Math.pow(2, index)
  while (r > sp) {
    r -= names.length * Math.pow(2, index)
    ++index
    if (r <= names.length * Math.pow(2, index)) break
  }
  return names[Math.ceil(r / Math.pow(2, index)) - 1]
}

exports.whoIsNext = whoIsNext
