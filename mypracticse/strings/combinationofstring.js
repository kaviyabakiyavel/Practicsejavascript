// function combinationofstring(str) {
//     var listofstring = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length + 1; j++) {
//             listofstring.push(str.slice(i, j))
//         }
//     }
//     return listofstring
// }
// function substring(str1, str2) {
//     let resultst1 = combinationofstring(str1)
//     console.log("result1",resultst1)
//     let resultstr2 = combinationofstring(str2)
//     console.log("result2",resultstr2)
//     var check = 'NO'
//     for (let i = 0; i < resultst1.length; i++) {
//         for (let j = 0; j < resultstr2.length; j++) {
//             if (resultst1[i] == resultstr2[j]) {
//                 console.log(true)
//                 check = 'YES'
//                 break;
//             } 
//         }
//     }
//     console.log('check', check)
// }
// substring('abc', 'ade')



//creat alp
//then check whether the string in both array 
// function checkingarray(alp, s1, s2) {
//     var check = 'NO'
//     // for (let i = 0; i < s1.length; i++) {
//     //     for (let j = 0; j < s2.length; j++) {
//     if (s1.includes(alp) && s2.includes(alp)) {
//         check = 'YES'
//     }
//     //     }
//     // }
//     return check
// }

// let alpbhates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// function substring(str1, str2, alpbhates) {
//     let s1 = str1.split('')
//     console.log("s1",s1)
//     let s2 = str2.split('')
//     console.log("s1",s2)
//     let output = 'NO'
//     for (let i = 0; i < alpbhates.length; i++) {
//         output = checkingarray(alpbhates[i], s1, s2)
//         if (output == 'YES') {
//             break
//         }
//     }
//     console.log('output', output)
// }
// substring('hello', 'world', alpbhates)

//input : dog
//output : [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

function palindrome(str){
    var check = 'NO'
    let result =  str.split('')
    console.log('result',result)
    let reversed = []
    for(let i = result.length ; i >= 0 ; i--)   {
       reversed.push(str[i])
    }
    console.log("reversed",reversed.join(''))
    if(reversed == str ){
        check = 'YES'
    }
    console.log('check',check)
  }
  palindrome('mom')