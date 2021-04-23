// let input =[0,1,0,3,12]
// console.log("input",input)
// let sortinput = input.sort()
// console.log("sortinput", sortinput)
// let count = 0
// let ans = []
// for(let i=0;i<sortinput.length;i++){
//     if(sortinput[i] == 0){
//         count++
//     }
//     else{
//         ans.push(sortinput.reverse())
//     }
// }

// console.log("count of 0 is",count)
// console.log("ans",ans)



// let stringreverse = (str) => {
//     console.log("str", str)
//     var newstring = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newstring = newstring + str[i];
//     }
//     return newstring;
// }
// console.log(stringreverse("kaviya"))
// console.log("newstring", newstring)



let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    console.log("len",len)
    for (let i = 0; i < len; i++) {
        // console.log("i",i)
        for (let j = 0; j < len; j++) {
            //  console.log("comparing +",inputArr[j] ,inputArr[j+1])
            if (inputArr[j] < inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
            // console.log("inputArr",inputArr)
        }
        // console.log("i",i)
        // console.log("***")
    }
    return inputArr;
};
console.log(bubbleSort([1,4,5,3,2,7,9,0,6]))

//step1 : i will take the first element in the array and comapre with rest
//step2 : if i find match i will skip the current loop
//for loop
// var arr = [7, -1, 2, 5, 3, 6]
// var number = 5
// let pairthenumber = (arr, number) => {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i]+arr[j] == number){
//                 result.push(arr[i])
//                 result.push(arr[j])
//                 arr.splice(0, 1)
//                 arr.splice(j - 1, 1)
//             }
//         }
//     }
//     return result
// }
// console.log(pairthenumber(arr, number))




// //While loop
// const { performance } = require('perf_hooks')
// var arr = [7, -1, 2, 5, 3, 6]
// var number = 5
// let pairthenumber = (arr, number) => {
//     let result = []
//     let t0 = performance.now();
//     while (arr.length > 1) {
//         var j = 1
//         while (j < arr.length) {
//             if (arr[0] + arr[j] == number) {
//                 result.push(arr[0])
//                 result.push(arr[j])
//                 arr.splice(0, 1)
//                 arr.splice(j - 1, 1)
//                 break
//             }
//             else {
//                 if (j == arr.length - 1) {
//                     arr.splice(0, 1)
//                 }
//                 j++
//             }
//         }
//     }
//     let t1 = performance.now();
//     console.log("excution time " + (t1 - t0) + "milliseconds")
//     return result
// }

// console.log(pairthenumber(arr, number))

