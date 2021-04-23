//anticlockwise
function removeanticlockwise(arr) {
    let shiftvalue = arr.shift()
    arr.push(shiftvalue)
    return arr
}
console.log(removeanticlockwise([1, 2, 3, 4, 5]))

//output = [2,3,4,5,1]
function manualclockwise(arr) {
    let result = []
    let firstindex = arr[0]
    console.log(firstindex)
    for (let i = 1; i < arr.length; i++) {
        result.push(arr[i])
    }
    result.push(firstindex)
    console.log(result)
}
console.log(manualclockwise([1, 2, 3, 4, 5]))