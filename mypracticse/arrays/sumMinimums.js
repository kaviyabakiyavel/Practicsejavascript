//input is array of array
//output each array
function sumMinimums(arr) {
    let output = 0
    for (let i = 0; i < arr.length; i++) {
     var result = finmin(arr[i])
     output = output + result
    }
    return output
}

//in each array i have to get min val 
//sum of the those values = output
function finmin(arr1) {
    let min = arr1[0]
    for (let i = 1; i < arr1.length; i++) {
        if (min > arr1[i]) {
            min = arr1[i]
        }
    }
    return min
}

console.log(sumMinimums(
    [
        [1, 2, 3, 4, 5], 
        [5, 6, 7, 8, 9], 
        [20, 21, 34, 56, 100]
    ]
))