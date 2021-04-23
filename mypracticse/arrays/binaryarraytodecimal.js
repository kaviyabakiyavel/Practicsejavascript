function binaryarraytodecimal(arr) {
    let arr1 = arr.reverse()
    let result = 0
    let ans  = 0
    for (let i = 0; i < arr1.length; i++) {
        result = arr1[i] * Math.pow(2, i)
        ans = ans + result
    }
    console.log(ans)
}
console.log(binaryarraytodecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]))

//inp1 [1, 1, 1, 1, 1, 0, 1, 1, 0, 1]
//inp2 [0, 0, 1, 0]
//inp3 [0, 0, 0, 1]