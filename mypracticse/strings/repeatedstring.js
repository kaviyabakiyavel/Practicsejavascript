//count of the string in the array of strings 
function findcount(input){
  let output = {}
  for(var i = 0 ; i < input.length ; i++){
      var x = Object.keys(output)
      if(x.includes(input[i])){
          output[input[i]] = output[input[i]] + 1
      } else{
         output[input[i]] = 1
      }
  }
  console.log("output",output)
}
console.log(findcount(["tiger","lion","dog","elephant","lion","tiger"]))

 