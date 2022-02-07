// Question 1:
// Given an (m X n) 2d array which contains positive integers ranging from 0 to x,
// for any cell that contains a zero makes the whole row and column as zero.

// Input:
// [ 1, 7, 8, 0, 9 ]
// [ 3, 0, 9, 2, 6 ]
// [ 9, 4, 8, 1, 4 ]
// [ 7, 6, 0, 5, 3 ]
// [ 2, 5, 8, 9, 7 ]

// Output:
// [ 0, 0, 0, 0, 0 ]
// [ 0, 0, 0, 0, 0 ]
// [ 9, 0, 0, 0, 4 ]
// [ 0, 0, 0, 0, 0 ]
// [ 2, 0, 0, 0, 7 ]

let data = [
  [1, 7, 8, 0, 9],
  [3, 0, 9, 2, 6],
  [9, 4, 8, 1, 4],
  [7, 6, 0, 5, 3],
  [2, 5, 8, 9, 7],
];
function twodimen(data) {
  let rowarr = [];
  let colarr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        if(data[i][j] === 0){
            rowarr.push(i)
            colarr.push(j)
        }
    }
  }

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        if(rowarr.includes(i) || colarr.includes(j)){
            data[i][j] = 0
        }
    }
  }

  console.log("data",data)
}
console.log(twodimen(data));


// Question 2:
// Given an unsorted array of  numbers of size N. Find the pivot index for which the sum of the left side is equal to the sum of the right side of the array. If no such pivot exists, return -1.

// Input: 
// [1,1,1,6,2,9]
// Output: 
// 4

// Input:
// [3,1,1,6,2,3]
// Output:
// 3
