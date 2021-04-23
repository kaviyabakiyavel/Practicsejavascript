
//factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

// function fact(x){
//   let result = x
//   for(let i = 1 ;i < x ; i++){
//       result = result * (x-i)
//   }
//   return  result
// }
// console.log(fact(5))

function factorial(x){
  if( x == 1){
      return x
  }else{
      console.log("x * factorial", x-1)
      return x * factorial(x-1)  
  }
}
console.log(factorial(5))