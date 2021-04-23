function squaredigits(num){
  let arr = num.toString().split('')
  let result = []
  for(let i = 0 ; i < arr.length ; i++){
    result.push(arr[i] * arr[i])
  }
  return result.toString().replace(/,/g, "");
  
}
console.log(squaredigits(9119))
// o/p 811181