// ES6 Implementation
// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// var unique = [...new Set(array)]
// console.log("unique",unique)


// // ES5 Implementation
// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// uniqueArray(array); 


function uniqueArray(arr) {
    let output = [] //[1,2,3,5,9,8]
    for (let i = 0; i < arr.length; i++) {
        if (output.includes(arr[i]) !== true) {
            output.push(arr[i])
        }
    }
    console.log("unique",output) 
}
uniqueArray([1, 2, 3, 5, 1, 5, 9, 1, 2, 8])



// var arr = [1, 2, 3, 4, 3, 2];

// function uniqueArray(arr) {
//    for (let i = 0; i < arr.length; i++) {
//     for(let j = i+1 ; j <arr.length ; j++){
//       if(arr[i] == arr[j]){
//         arr.splice(j,1)
//       }
//     }
//   }
//  console.log("arr",arr)
// }
// console.log(uniqueArray(arr));

// function toUniqueArray(a){
//     var newArr = [];
//     for (var i = 0; i < a.length; i++) {
//         if (newArr.indexOf(a[i]) === -1) {
//             newArr.push(a[i]);
//         }
//     }
//   return newArr;
// }
// var colors = ["red","red","green","green","green"];
// var colorsUnique=toUniqueArray(colors)

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