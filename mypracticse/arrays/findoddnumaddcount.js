function findoddnumber(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            count = count + 1
        }
    }
    return count
}
console.log(findoddnumber([1, 2, 3, 4, 5]))

