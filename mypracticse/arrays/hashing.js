/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
    stdin_input += input;
});
process.stdin.on("end", function () {
   main(stdin_input);
});
function findcountofchar(input){
  let output = {}
  for(let i = 0 ; i < input.length ; i++){
      let x = Object.keys(output)
      if(x.includes(input[i])){
         output[input[i]] = output[input[i]] + 1
      }else{
           output[input[i]] =  1
      }
  }
  return output
}
function findanagram (output1,output2){
  let keys1 = Object.keys(output1);
  let keys2 = Object.keys(output2);
  let flag = 'No'
  if(keys1.length == keys2.length){
      flag = 'Yes'
  }
    for (var key in keys1) {
        var temp_keys = keys1[key]
       if(output1[temp_keys] != output2[temp_keys]){
           flag = 'No'
           break;
       }
    }
    return flag
}
function main(input) {
    input = input.split('\n');
    let input1 = input[0].split(''); 
    let input2 = input[1].split(''); 
    let output1 = findcountofchar(input1);//{A:1,B:1,C:2,D:2}
    let output2 = findcountofchar(input2);//{A:1,B:1,C:2,D:2}
    let output = findanagram(output1 ,output2);
    console.log(output)
    return output
}

// Input: 
// ABCDCD
// DACBDC