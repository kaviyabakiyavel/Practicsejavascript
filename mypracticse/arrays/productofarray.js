//var six = productOfArray([1,2,3]) // 6
//var sixty = productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
  let result = 1
  for(let i = 0 ; i<arr.length ; i++){
      result  = result * arr[i]
  }
  return result
}

console.log(productOfArray([1,2,3,10]))