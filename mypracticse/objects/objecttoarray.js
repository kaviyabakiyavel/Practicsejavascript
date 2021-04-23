//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
//toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
//toArray({}) ➞ []

function objecttoarray(obj) {
    let objlength = Object.keys(obj).length
    let key = Object.keys(obj)
    let value = Object.values(obj)
    let result = []
    for (let i = 0; i < objlength; i++) {
        let arr = []
        arr.push(key[i])
        arr.push(value[i])
        result.push(arr)
    }
    return result
}
console.log(objecttoarray({ a: 1, b: 2 }))