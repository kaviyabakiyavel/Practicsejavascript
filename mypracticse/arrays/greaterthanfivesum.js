function greaterthanfivesum(arr) {
   // console.log(arr)
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            //console.log(arr[i])
            result = result + arr[i]
        }
    }
    console.log(result)
}
console.log(greaterthanfivesum([10, 12, 28, 47, 55, 100]))

// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77
// sumFive([1, 2, 3, 4]) ➞ 0
// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252