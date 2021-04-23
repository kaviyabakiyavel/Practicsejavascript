// function arrayToString(arr) {
//     let str1 = arr.toString()
//     console.log("str1" , str1)
// 	let str2 = arr.join('')
//     console.log("str2",str2)
//     let str3 = arr.join('-')
// 	console.log("str2",str3)
// }
// console.log(arrayToString(['a','b','c','d']))

function arrayToString(arr) {
    let str1 = arr.toString()
    console.log(str1)
    let str2 = arr.join('');
    console.log(str2)
    let str3 = arr.join('-');
    console.log(str3)
}
console.log(arrayToString(['a', 'b', 'c', 'd']))