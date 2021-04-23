// function expotent(num,exp){
//     var result = exp
//     var i = 1;
//     while (i < num) {
//         console.log("i", i)
//         var multi = result * num
//         result = multi
//         console.log("result",result)
//         i++;
//     }
//     return result
// }
// console.log(expotent(5,5))

function expotent(num,exp){
  let result = exp
  let i = 1
  while(i < num){
    let muli = result * num
    result = muli
    i++
  }
  return result
}
console.log(expotent(4,4))