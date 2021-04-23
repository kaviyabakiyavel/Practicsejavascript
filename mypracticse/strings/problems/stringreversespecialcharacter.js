// let input = 'a,b$c'

// function reverseSpecialString(str) {
//     console.log('str', str)
//     var specialcharacter = []
//     var newstr = str
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == '@' || str[i] == '$' || str[i] == ',') {
//             specialcharacter.push(str[i])
//         }
//     }
//     for(let i = str.length ; i > -1 ; i--){
//       console.log('i',i)
//       newstr[str.length-1-i] = str[i]
//     }
//     console.log(newstr)
// }
// reverseSpecialString(input)

// function isletter(char) {
//     return ((char >= 'A' && char <= 'Z') ||
//         (char >= 'a' && char <= 'z'));
// }
// function reverseSpecialString(inp) {
//     let str = inp.split('');
//     let i = 0;
//     let j = str.length - 1;
//     while (i < j) {
//         if (!isletter(str[i])) {
//             ++i
//         }
//         if (!isletter(str[j])) {
//             --j
//         }
//         if (isletter(str[i]) && isletter(str[j])) {
//             var tempChar = str[i];
//             str[i] = str[j];
//             str[j] = tempChar;
//             ++i;
//             --j;
//         }
//     }
//     return str.join('')
// }
// let output = reverseSpecialString(input)
// console.log("output",output)


// let arr = [5, 8, 9, 11, 12, 6]

// function orderelement(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = [i + 1]; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }
// function findmissingnumber(arr) {
//     var arr1 = orderelement(arr)
//     for (let i = arr1[0]; i < arr1[arr1.length - 1]; i++) {
//         if (arr1.includes(i)) {
//             // console.log(true)
//         } else {
//             console.log("number " + i + " is missing in the array ")
//         }
//     }
// }
// findmissingnumber(arr)