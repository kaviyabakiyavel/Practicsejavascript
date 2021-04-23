// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

//[3,6,5,9]
let result = []
function multiple5and3(num) {
    for (let i = 1; i < num; i++) {
        let result1 = i * 3
        let result2 = i * 5
        finalresult(result1, num)
        finalresult(result2, num)
    }
}
multiple5and3(1000)
function finalresult(res, num) {
    if (res < num) {
        result.push(res)
    }
    addarray(result)
}

function addarray(arr) {
    let output = 0
    for (let i = 0; i < arr.length; i++) {
        output = output + arr[i]
    }
    console.log("output", output)
}
