//Challenge # 4 — Generating all permutations
//Input: ABC
//Output: ABC, ACB, BCA, BAC, CAB, CBA

// recursive problem 
// when your using recursion make sure when your program going to be terminated.
//output 
// let
// lte
// elt
// etl
// tle
// tel

// loop1  let
// rest = str.substring(0,0) + str.substring(0+1)
// rest = str.substring(0,0) + str.substring(1) //start from 1 to end 
// rest =  et 
// permutations(et,result+str[i])
// permutations(et,l)

// loop2 et
// rest = str.substring(0,1) + str.substring(1+1)
// rest = str.substring(0,1) + str.substring(2)
// rest = t + le

//loop3 t (1 == 0) 
//rest = str.substring(0,3) + str.substring(3+1)
//rest = '' + let


// let str = "let"
// let permutation = (str, result) => {
//   if (str.length == 0) {
//     console.log("result", result);
//   }
//   for (let i = 0; i < str.length; i++) {
//     let rest = str.substring(0, i) + str.substring(i + 1)
//     permutation(rest, result + str[i])
//   }
// }
// permutation(str, '')


//Heap Alogrithm

const getPermutations = arr => {
  console.log(arr)
  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output;
};
getPermutations([1,2])