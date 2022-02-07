function countstring(input){
  let output = {}
  for(let i = 0 ; i < input.length ; i++){
    let x = Object.keys(output)
    console.log("x",x)
    if(x.includes(input[i])){
      output[input[i]] = output[input[i]] + 1
    }else{
      output[input[i]] = 1
    }
  }
  return output
}
console.log(countstring(["tiger","lion","dog","elephant","lion","tiger"]))

 
var countstring = function(s) {
  let output = {};
  for(let i = 0 ; i < s.length ; i++){
      if(s[i] in output){
          output[s[i]] = output[s[i]] + 1 ;
      }else{
         output[s[i]] = 1
      }
  }
  console.log("output",output)
};
console.log(countstring(["tiger","lion","dog","elephant","lion","tiger"]))
