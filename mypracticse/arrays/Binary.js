//10
var arr = []
function convertdecimaltobinary(num) {
  if (num == 0) {
    return 1
  } else {
    var quo = parseInt(num / 2)
    var rem = parseInt(num % 2)
    arr.push(rem)
    convertdecimaltobinary(quo)
  }
  return arr
}
arr = convertdecimaltobinary(10)
console.log(arr.reverse().join(''))


//conver binary to decimal 
// binary is 1010
//ans 10

function convertbinarytodecimal(str) {
  let arr = str.split('').reverse()
  console.log("arr",arr)
  let result = 0
  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    result = arr[i] * Math.pow(2, i)
    console.log("result",result)
    ans = ans + result
    //console.log("ans",ans)
  }
  console.log(ans)
}
convertbinarytodecimal("1010")