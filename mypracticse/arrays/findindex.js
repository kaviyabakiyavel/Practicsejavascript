// function findIndex() {
//     let arr = arguments[0]
//     let str = arguments[1]
//     let index = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == str) {
//             index = i
//         }
//     }
//     return index
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))
// //output 2

// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"))
// //output 1

// console.log(findIndex(["a", "g", "y", "d"], "d"))
// //output 3

// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))
// //output  0

//inbuilt method for finding index 
function findIndex() {
    console.log(arguments)
    let arr = arguments[0]
    let str = arguments[1]
    const result = (element) => element == str
    console.log(arr.findIndex(result))
}
console.log(findIndex(["a", "g", "y", "d"], "d"))