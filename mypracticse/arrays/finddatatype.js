const inp2 = [1, 2, "null", []]
const inp1 = ["214", true, false, 2, 2.15, [], null]
const inp3 = [21.1, "float", "array", ["I am array"], null, true, 214]

function finddatatype(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let datatype = typeof (arr[i])
        result.push(datatype)
    }
    return result
}
console.log(finddatatype(inp3))