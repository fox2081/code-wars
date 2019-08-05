/*
* https://www.codewars.com/kata/string-incrementer/javascript
* */

function incrementString (str) {
  let sel = str.match(/\d+$/g)
  let rs = str.replace(sel, '')
  if (sel && sel.length) {
    const length = sel[0].length
    let num = (Number(sel[0]) + 1).toString()
    rs += [...(new Array(length - num.length > 0 ? length - num.length : 0)).fill('0'), ...num.split('')].join('')
  } else {
    rs += '1'
  }
  return rs;
}

exports.incrementString = incrementString
