function secondLargest(arr) {
    let len = arr.length
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0 ; j <= arr.length-1 ; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr[len-2]
}
console.log(secondLargest([10, 40, 30, 20, 50]))