function factorial(num){
  //console.log(num)
  let result = 1 
  for(let i = 1 ; i <= num ; i++){
    result =  result * i
  }
  return result
}
console.log(factorial(5))

//5*4*3*2*1
//5*recursion factor of 4
//20*3*2*1
//recursion factor of 3
//60*2*1
//recursion factor of 2
//120*1
//recursion factor of 1
//120
function recursionfactorial(num) {
  if (num == 1) {
    return 1
  } else {
    //console.log(num)  
    var p = num * recursionfactorial(num - 1)
    //console.log(p)
    return p
  }
}
console.log(recursionfactorial(5))