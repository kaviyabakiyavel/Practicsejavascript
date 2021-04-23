let a = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

var result = []
let array = (value) => {
    for (let i = 0; i < value.length; i++) {
        if (typeof (value[i]) == "number") {
            result.push(value[i])
        }
        else if (typeof (value[i] == "object")) {
            array(value[i])
        }
    }
    console.log("result", result)
}


console.log(array([1, 2, 3, [4, 5, [6, 7, [8, 9]]]]))