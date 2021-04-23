// function additionofarray(arr) {
//     let result = 1
//     for (let i = 0; i < arr.length; i++) {
//         result = result  * arr[i]
//     }
//     console.log(result)
// }
// console.log(additionofarray([1, 2, 3, 4, 5]))

function recursionadditionofarray(arr){
  if(arr.length ==1){
      return arr[0]
  }
  else{
      return arr[0] + recursionadditionofarray(arr.splice(1))
  }
}
console.log(recursionadditionofarray([1,2,3,4,5]))