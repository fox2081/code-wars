/*
* 题目没怎么看懂，找规则瞎做一通。。。
* https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/javascript
* */

const encrypt = (text, n) => {
  if (!text) {
    return text;
  }
  const length = text.length;
  for (let i = 0; i < n; i++) {
    const a = `${text}${text}`.split('')
    text = a.map((item, index) => {
      return a[index * 2 + (index * 2 >= length && !(length % 2) ? 0 : 1)]
    }).splice(0, text.length).join('');
  }
  return text
}

function decrypt(text, n) {
  if (!text) {
    return text;
  }
  const length = text.length;
  for (let i = 0; i < n; i++) {
    const a = text.split('')
    text = a.map((item, index) => `${a[Math.floor(length / 2) + index]}${item}`).join('').slice(0, length)
  }
  return text
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;

