
//Challenge # 6— Sorting an array of strings by length
//Input : ["You", "are", "beautiful", "looking"]
//Output : [“You", "are", "looking", "beautiful"]

//sort by number ascending order
// function sortasc(arr) {
//     console.log(arr.sort((a, b) => a - b));
// }
// sortasc([2, 14, 1, 13])

//sor by number descending order 
// function sortdes(arr) {
//     console.log(arr.sort((a, b) => b - a));
// }
// sortdes([2, 14, 1, 13])

//sort string ascending order
// function sortbylengthasc(arr) {
//     console.log(arr.sort((a, b) => a.length - b.length));
// }
// sortbylengthasc(['aaaa', 'a', 'aa', 'aaa'])


//sort string descending order
// function sortbylengthdesc(arr) {
//     console.log(arr.sort((a, b) => b.length - a.length));
// }
// sortbylengthdesc(['a', 'aaa', 'aa', 'aaaa'])




//first principle sort string by length

// function sortstring(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         //console.log("i",arr[i])
//         for (let j = [i+1] ; j < arr.length; j++) {
//             //console.log("j",arr[j])
//             if (arr[i].length > arr[j].length) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//             //console.log("arr" , arr)
//         }
//         //console.log("*******")
//     }
//     console.log("arr",arr)
// }
// console.log(sortstring(['a', 'aaaa', 'aaa', 'aa']))


// function sortnumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log("i",i)
//         for (let j = [i+1] ; j < arr.length; j++) {
//             console.log("j",j)
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//             //console.log("arr" , arr)
//         }
//         console.log("*******")
//     }
//     console.log("arr",arr)
// }
// console.log(sortnumber([1,5,4,3,2,6,8,7]))

var _ = require('lodash');

let input = 'mam'  
let input1 = ''  //true
let input2 = 'abcdcba' 
let input3 = 'abcd'
let input4 = 'A man a plan a canal Panama'

function ispalindrome(str) {
    if (_.isEmpty(str)) {
        console.log(true)
    } else {
        let reverse = str.split('').reverse().join('')
        // console.log(reverse)
        if (reverse == str) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}
ispalindrome(input)
ispalindrome(input1)
ispalindrome(input2)
ispalindrome(input3)
ispalindrome(input4)