// function createIncrement() {
//     let count = 0;
//     function increment() {
//       count++;
//     }
//     function log() {
//       let message = `Count is ${count}`;
//       console.log(message);
//     }
//     return [increment, log];
//   }
//   const [increment, log] = createIncrement();
//   increment();
//   increment();
//   increment();
//   log();

//https://www.codegrepper.com/code-examples/javascript/javascript+get+unique+elements+in+array

var arr = [1, 2, 3, 4, 3, 2];
//[1,2,3,4]

function uniqueArray(arr) {
   for (let i = 0; i < arr.length; i++) {
    for(let j = i+1 ; j <arr.length ; j++){
      if(arr[i] == arr[j]){
        arr.splice(j,1)
      }
    }
  }
 console.log("arr",arr)
}
console.log(uniqueArray(arr));
