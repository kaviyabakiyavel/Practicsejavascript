
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10

function FindIntersection(strArr) {
    let result = []
    let arr1 = strArr[0].split(',')
    let arr2 = strArr[1].split(',')
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                result.push(arr1[i])
            }
        }
    }
    let output = result.toString()
    return output
}
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))


function FindIntersection(strArr) {
    let result = []
    let arr1 = strArr[0].split(',')
    let arr2 = strArr[1].split(',')
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) == true) {
            result.push(arr1[i])
        }
    }
    let output = result.toString()
    return output
}
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])) 