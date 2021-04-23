function sumofnum() {
    let val = arguments
    console.log(arguments)
    let result = 0
    for (let i = 0; i < val.length; i++) {
        result = result + val[i]
    }
    return result
}
console.log(sumofnum(1, 2, 3, 4))
console.log(sumofnum(1, 2, 3, 4, 5, 6, 7, 8))