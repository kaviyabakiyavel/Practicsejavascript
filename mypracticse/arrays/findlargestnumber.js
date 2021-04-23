//polyfill
var array = [3, 6, 2, 56, 32, 5, 89, 32];
function findlargestnumber(arr) {
    var largest = 0
    for (let i = 0; i <= largest; i++) {
        // console.log(arr[i])
        // console.log(largest)
        if (arr[i] > largest) {
            var largest = arr[i]
        }
    }
    console.log(largest)
}
console.log(findlargestnumber(array))


//inbuilt method
console.log(Math.max(1, 3, 2));
// expected output: 3
console.log(Math.max(-1, -3, -2));
// expected output: -1
const array1 = [1, 3, 2];
console.log(Math.max(...array1));

