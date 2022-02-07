
// function reverseString(inp){
//   var x = inp.split('').reverse().join('')
//   return x
// }
// console.log(reverseString('kaviya'))

function reverseStringinloop(inp){
  for(let i = inp.length ; i >= 0  ; i++){
    console.log("inp",inp)
  }
}

// function reverseStringinloop(str) {
//    let reversedstring = ''
//    for (let char of str) {
//       console.log("char",char)
//       reversedstring = char + reversedstring
//    }
//    console.log("reversedstring", reversedstring)
// }
// reverseStringinloop('kaviya')



// function reverseword(str) {
//    //output fox brown quick the 
//    let arr = str.split(' ')
//    var output =  arr.reverse().join(' ')
//    console.log("output",output)
// }
// console.log(reverseword('The quick brown fox'))


// function reversesentence(str) {
//    let arr = str.split('')
//    let reversesentence = arr.reverse().join('')
//    console.log(reversesentence)
// }
// console.log(reversesentence("Welcome to this Javascript Guide!"))

// function reverseeachword(str){
//    let arr = str.split(' ')
//    let result = []
//    for(let i = 0 ; i < arr.length ; i++){
//       //console.log("arr[i]",arr[i])
//       let word = arr[i].split('').reverse().join('')
//       result.push(word)
//       //console.log("result",result)
//    }
//    return result.join(' ')
//   }
//   console.log(reverseeachword('hi i am kaviya'))

// //Given a string, reverse each word in the sentence
// //Welcome to this Javascript Guide!
// //finding words in the sentence [ input = string] [output = list of 5 words] >>>> bas 
// //reverse the character in each word. >>>> kukoo [ input = words] [output = reversed word]
// // combain each word into string >>>> amma [input = reversed word] [output = string]

// function reversewordinsentence(str) {
//    let arr = str.split(' ')
//    let result = []
//    for (let i = 0; i < arr.length; i++) {
//       let word = arr[i].split('').reverse().join('')
//       result.push(word)
//    }
//    console.log(result.join(' '))
// }
// console.log(reversewordinsentence("Welcome to this Javascript Guide!"))



// // //even index as to reverse

// function reverseevenindex(str) {
//    let arr = str.split(' ')
//    console.log("arr.length",arr.length)
//    let result = []
//    for (let i = 0; i < arr.length; i++) {
//       if (i % 2 !== 0) {
//          console.log(arr[i])
//          let word = arr[i].split('').reverse().join('')
//          result.push(word)
//       } 
//       else {
//          console.log(arr[i])
//          let word = arr[i]
//          result.push(word)
//          console.log(result)
//       }
//    }
//    return result.reverse()
// }
// console.log(reverseevenindex('i am kaviya'))


//move last element into first index 




