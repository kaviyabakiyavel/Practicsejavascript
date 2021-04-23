function maxvalueinarray(arr) {
    let max = arr[1]
    for (let i = 0; i < arr.length ; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    countofthemaxvalue(max,arr)
}
function countofthemaxvalue(max,arr){
  let count = 0
  for(let i = 0 ; i < arr.length ; i++){
      if(arr[i] == max){
          count = count + 1
      }
  }
  return count
}
console.log(maxvalueinarray([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]))