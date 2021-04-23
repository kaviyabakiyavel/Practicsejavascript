// sortIt([4, 1, 3]) ➞ [1, 3, 4]
// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]
// sortIt([4, [1], 3]) ➞ [[1], 3, 4]
// sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]
// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]

function sortIt(arr) {
    console.log("arr",arr)
    console.log(typeof(arr))
    console.log(arr.length)
    if (typeof(arr) == "object") {
       for(let i = 0 ; i<arr.length ; i++){
           for(let j = i+1; j < arr.length ; j++){
               if(arr[i] > arr[j]){
                   let temp = arr[i]
                   arr[i] = arr[j]
                   arr[j] = temp
               }
           }
       }
       return arr
    }
    return temp
}
//console.log(sortIt([4, 1, 3]))
//console.log(sortIt([[4], [1], [3]]))
//console.log(sortIt([4, [1], 3]))
//console.log(sortIt([[4], 1, [3]]))
console.log(sortIt([[3], 4, [2], [5], 1, 6]))
