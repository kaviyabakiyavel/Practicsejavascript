// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(obj) {
    let key = Object.keys(obj)
    let value = Object.values(obj)
    let result = []
    result.push(key)
    result.push(value)
    return result
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }))