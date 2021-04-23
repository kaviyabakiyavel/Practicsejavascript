//Input is array
//for clockwise shift lastvalue to first
//then for anticlockwise shift firstvalue to last 


//clockwise
function clockwise(arr) {
    let popvalue = arr.pop()
    console.log("popvalue",popvalue)
    arr.unshift(popvalue)
    return arr
}
console.log(clockwise([1, 2, 3, 4, 5]))


//each loop ill get each values
//input [1,2,3,4,5]
//result []
//step1 : remove last element & push into result , result :[5]
//step2 : [5,1]
//step3 : [5,1,2]
//step4 : [5,1,2,3]
//step5 : [5,1,2,3,4]
//output [5,1,2,3,4]

function manualclockwise(arr) {
    let result = []
    let lastindex = arr[arr.length-1]
    result.push(lastindex)
    for (let i = 0; i < arr.length-1; i++) {
        result.push(arr[i])
    }
    return result
}
console.log(manualclockwise([1, 2, 3, 4, 5]))

//output
//  [1,2,3,4]
//5 has to be added in the first position in an array
//[5,1,2,3,4]

