//find max element 

// arr = 8,9,12,6,5
// arr[0] = 8 assign to max 
// so max = 8
// itration1 : arr[1] = 9   9>8 true -> max = 9
// itration2 : arr[2] = 12  12>9 true -> max = 12
// itration3 : arr[3] = 6   6>12 false -> max = 12
// itration4 : arr[4] = 5   5>12 false -> max = 12

//let result = []
function maxvalue(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}
maxvalue([8, 9, 12, 6, 5])


//i = 0 -> 8  | [9,12,6,5]  -> 12
//i = 1 -> 9  | [12,6,5]    -> 12
//i = 2 -> 12 | [6,5]       -> 6
//i = 3 -> 6  | [5]         -> 5
//i = 4 -> 5  | []

//ouput [12,12,6,5]

function replaceindex(arr) {
    let result = []
    for (let i = 1; i < arr.length; i++) {
        let val = maxvalue(arr.slice(i,arr.length))
        result.push(val)
    }
    return result
}
let replace = replaceindex([8, 9, 12, 6, 5])
console.log(replace)