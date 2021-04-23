// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

//first loop [[1,2,3],[4,5],[6,7]] 
// [1,2,3] => call function once more 1,2,3 => result will be 1,2,3 
// [4,5] => call function once more 4,5 => result will be 1,2,3,4,5
// [6,7] => call function once more 6,7 => result will be 1,2,3,4,5,6,7
// o/p 1,2,3,4,5,6,7
// var result = []
// function convertarraytonumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if ((typeof (arr[i]) == "object")) {
//             convertarraytonumber(arr[i])
//         }
//         else {
//             result.push(arr[i])
//         }
//         console.log(result)
//     }
// }
// console.log(convertarraytonumber([[1, 2, 3], [4, 5], [6, 7]]))



//rest parameters takes arguments and coverting into array of arrays 
function converarray(...arr){
    convertarraytonumber(arr)
}
var result = []
function convertarraytonumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((typeof (arr[i]) == "object")) {
            convertarraytonumber(arr[i])
        }
        else {
            result.push(arr[i])
        }
     
        console.log(result)
    }
}
console.log(converarray([1, 2, 3], [4, 5], [6, 7]))
