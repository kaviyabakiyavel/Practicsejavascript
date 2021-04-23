

// input - aaabccddd
// output - abd
// aaabccddd → abccddd → abddd → abd

// input - aa
// output - Empty String

// input - baab
// output - Empty String
// baab → bb → Empty String


var _ = require('lodash');


function superReducedString(str) {
  console.log("str", str)
  for (let i = 0; i < str.length; i++) {
    if (_.isEmpty(str)) {
      str = str.slice(0, i) + str.slice(i + 2)
      str = "Empty String"
    }
    else {
      if (str[i] == str[i + 1]) {
        str = str.slice(0, i) + str.slice(i + 2)
        superReducedString(str)
      }
    }
  }
  console.log(str)
}

superReducedString('baab')


