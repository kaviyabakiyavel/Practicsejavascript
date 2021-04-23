let price = [2, 4, 5, 6, 7, 8, 5, 4, 44, 4, 4, 4, 3, 22, 2, 4, 5, 6, 6, 6, 7, 78, 6, 7]
let plantlength = price.length
console.log(plantlength)
let removedplant = price.slice(3)
removedplant.splice(5, 3, 55, 5, 23)
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let total = removedplant.reduce(reducer);
console.log(total)
var newarray = [...removedplant]

// function sameprice(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         count = count + 1
//       }
//     }
//     console.log("count of " + arr[i] + " is", count)
//     arr = arr.filter(x => x != arr[i])
//   }
// }
// console.log(sameprice(removedplant))

function evenserialnumber(arr1){
  for (let i = 0; i < arr1.length; i++) {
     if(i % 2 == 0){
       console.log("even serial number plants price",i)
     }
  }
}
evenserialnumber(newarray)

let cp = total
let profit = 23 / 100
let sp = cp * profit
let totalsp = cp + sp
console.log(totalsp)
let totallength = plantlength
let avg = totalsp/totallength
console.log(avg)

