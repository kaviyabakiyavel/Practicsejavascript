// // ES6 Implementation
// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// Array.from(new Set(array)); 
// // [1, 2, 3, 5, 9, 8]

// // ES5 Implementation
// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// uniqueArray(array); 
// // [1, 2, 3, 5, 9, 8]

// function uniqueArray(arr) {
//     let output = [] //[1,2,3,5,9,8]
//     for (let i = 0; i < arr.length; i++) {
//         if (output.includes(arr[i]) !== true) {
//             output.push(arr[i])
//         }
//     }
//     return output
// }
// console.log(uniqueArray([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]))

function uniqueArray(arr) {
    let output = [] //[1,2,3,5,9,8]
    for (let i = 0; i < arr.length; i++) {
        if (i = 0) {
            output.push(arr[i])
        } 
        else {
            for (let j = 0; j < output.length; j++) {
                if (arr[i] !== output[j]) {
                    output.push(arr[i])
                } 
            }
        }
    }
    return output
}
console.log(uniqueArray([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]))


// var data = [
//     {
//         name : 'Bob' ,
//         Age : '20',
//         Desgination : 'Student',
//         Phonenumber : '36438-33443'
//     },
//     {
//         name : 'Bob' ,
//         Age : '20',
//         Desgination : 'Student',
//         Phonenumber : '36438-33443'
//     },
//     {
//         name : 'Bob' ,
//         Age : '20',
//         Desgination : 'Student',
//         Phonenumber : '36438-33443'
//     },
//     {
//         name : 'Bob' ,
//         Age : '20',
//         Desgination : 'Student',
//         Phonenumber : '36438-33443'
//     },
//     {
//         name : 'Bob' ,
//         Age : '20',
//         Desgination : 'Student',
//         Phonenumber : '36438-33443'
//     },
//     {
//         name : 'Bob' ,
//         Age : '20',
//         Desgination : 'Student',
//         Phonenumber : '36438-33443'
//     },
//     {
//         name : 'Bob' ,
//         Age : '20',
//         Desgination : 'Student',
//         Phonenumber : '36438-33443'
//     },
//     {
//         name : 'Bob' ,
//         Age : '20',
//         Desgination : 'Student',
//         Phonenumber : '36438-33443'
//     },
//     {
//         name : 'Bob' ,
//         Age : '20',
//         Desgination : 'Student',
//         Phonenumber : '36438-33443'
//     }
// ]