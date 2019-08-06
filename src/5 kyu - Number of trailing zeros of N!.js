/*
* 找规律，题干都明说了。
* 用test打印测试了一下，每5进制，多一个尾0，每次的结果大于0继续循环
* 看了解答发现一开始的想法是对的，可以用递归的。。递归累加就行了
* https://www.codewars.com/kata/number-of-trailing-zeros-of-n/javascript
* */

function test(n) {
  (new Array(n)).fill(1).map((i, index) => ++index).forEach(i => {
    let a = (new Array(i)).fill(1).map((i, index) => ++index).reduce((a, b) => a * b)
    console.log(`${i} ${a.toString()}`)
  })
}

function zeros (n) {
  let rs = Math.floor(n / 5)
  let count = rs
  while (rs >= 5) {
    rs = Math.floor(rs / 5)
    count += rs
  }
  return count
}

exports.test = test
exports.zeros = zeros
