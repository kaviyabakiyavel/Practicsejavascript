
//The shift() 
//1)method removes the first element from an array and returns that removed element. This method changes the length of the array
//No parameters 

//The unshift() 
//1)method adds one or more elements to the beginning of an array and returns the new length of the array.
//2)Pass parameter array = [1,2,3] eg: array.unshift(4,5,6,7) output:[4,5,6,7,1,2,3]

//The pop() 
//1)method removes the last element from an array and returns that element. This method changes the length of the array.
//No parameters 

//The push() 
//1)method adds one or more elements to the end of an array and returns the new length of the array.
//Pass parameter array = [1,2,3] eg: array.unshift(4,5,6,7) output:[1,2,3,4,5,6,7]

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const array3 = [6, 7, 8];
const array4 = [8, 10, 11];

const shiftelement = array1.shift(); //remove beginning of the array returns removed element
const unshiftelement = array2.unshift(3); // add beginning  of the array returns length of the array
const popelement = array3.pop();//remove end of the array returns 
const pushelement = array4.push(12); //add end of the array return length of the array 
console.log("shiftelement", shiftelement);
console.log("unshiftelement", unshiftelement);
console.log("popelement", popelement)
console.log("pushelement", pushelement);
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);



//The indexOf() 
//1) method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// pass parameter from where the search as to start 

//1)eg:
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison','bison'];
console.log(beasts.indexOf('bison'));
//output : 1

//2)eg:
// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

//3)eg:
// start from index 1
console.log(beasts.indexOf('bison', 1));
// expected output: 1

//4eg:
console.log(beasts.indexOf('giraffe'));
// expected output: -1

