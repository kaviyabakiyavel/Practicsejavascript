//[2, 1, 5, 1, 0]

function threeconsecutive(arr) {
    let result = 0
    if (arr.length < 3) {
        return "not possible"
    }
    else {
        for (let i = 0; i < arr.length-2; i++) {
            console.log(i)
            result = arr[i] + arr[i + 1] + arr[i + 2]
            if (result == 7) {
                return true
            }
        }
        return false
    }
}
console.log(threeconsecutive([2, 1, 5, 1, 0]))