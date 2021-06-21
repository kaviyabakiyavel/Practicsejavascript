//How to remove all duplicates from a given string?
//input : java
//output : java 

// function findduplicatesinstring(str) {
//   let hash = {}
//   let result = ''
//   for (let i = 0; i < str.length; i++) {
//     hash[str[i]] = false
//   }
//    console.log("hash", hash)
//   for (let i = 0; i < str.length; i++) {
//     if (hash[str[i]] == false) {
//       hash[str[i]] = true
//       result = result + str[i]
//     }
//   }
//   return result
// }
// let testcase1 = findduplicatesinstring("java")
// console.log("testcase1", testcase1)
// let testcase2 = findduplicatesinstring("abacb")
// console.log("testcase2", testcase2)

let arr = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]]]

let result = []
function finalarr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'object') {
      finalarr(arr[i])
    }else{
       result.push(arr[i])
    }
  }
  return result
}
const output = finalarr(arr)
console.log(output)

