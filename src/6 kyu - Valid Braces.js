/*
* 正则写太烂了，match的时候贪心模式两个不过，不贪又有另外一个不过。。
* https://www.codewars.com/kata/valid-braces/javascript
* */

function validBracesNormal(braces){
  let res = false;
  let resMatch = braces.match(/\[(.*?)]|\((.*?)\)|{(.*?)}/g);

  if (resMatch && resMatch.length) {
    if (resMatch.join('') !== braces) {
      return false;
    }
    res = true;
    resMatch.forEach(item => {
      let str = item.replace(/^\[(.*)]$|^\((.*)\)$|^{(.*)}$/, '$1$2$3');
      if (!str && res) {
        res = true;
      } else {
        res = validBracesNormal(str);
      }
    })
  }
  return res;
}

function validBracesGreedy(braces){
  let res = false;
  let resMatch = braces.match(/\[(.*)]|\((.*)\)|{(.*)}/g);

  if (resMatch && resMatch.length) {
    if (resMatch.join('') !== braces) {
      return false;
    }
    res = true;
    resMatch.forEach(item => {
      let str = item.replace(/^\[(.*)]$|^\((.*)\)$|^{(.*)}$/, '$1$2$3');
      if (!str && res) {
        res = true;
      } else {
        res = validBracesGreedy(str);
      }
    })
  }
  return res;
}

function validBraces(braces) {
  return validBracesNormal(braces) || validBracesGreedy(braces)
}

exports.validBraces = validBraces
