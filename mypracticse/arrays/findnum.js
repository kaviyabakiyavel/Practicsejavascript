// let input = [4,1,2,1]
// console.log("input",input)
// let output = 1

// for(let i= 0 ;i<input.length;i++){
//     if(input[i] == output){
//         var ans = input[i]
//     }
// }
// console.log("ans",ans)

//While loop
var arr = [7, -1, 2, 5, 3, 6]
var number = 5
let pairthenumber = (arr, number) => {
    let result = []
    while (arr.length > 1) {
        var j = 1
        while (j < arr.length) {
            if (arr[0] + arr[j] == number) {
                result.push(arr[0])
                result.push(arr[j])
                arr.splice(0, 1)
                arr.splice(j - 1, 1)
                break
            }
            else {
                if (j == arr.length - 1) { arr.splice(0, 1) }
                j++
            }
        }
    }
    return result
}
console.log(pairthenumber(arr, number))