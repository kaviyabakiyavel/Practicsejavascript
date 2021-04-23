// function incrementItems(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let increment = arr[i] + 1
//         result.push(increment)
//     }
//     return result
// }
// console.log(incrementItems([0, 1, 2, 3]))
// console.log(incrementItems([2, 4, 6, 8]))
// console.log(incrementItems([-1, -2, -3, -4]))

function reverseString(str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ',' || arr[i] == '$' || arr[i] == '@') {
            //console.log("i",arr[i])
        } else {
            console.log(arr[arr.length - 1])
            let temp = arr[i]
            arr[i] = arr[arr.length - 1]
            arr[arr.length - 1] = temp
            break
        }
    }
    console.log("arr",arr.join(''))
}
reverseString('a,b$c')

// Input : a,b$c
// Output : c,b$a


// Input : s@@,m
// Output : m@@,s


// function modifiedString(string){
//   let arr = string.split('')
//   let result = []
//   for(let i = 0 ; i < arr.length ; i++){
//      if(arr[i] == ',' || arr[i] == '$' , arr[i] == '@'){

//      }
//      else{ 

//      } 
//   }
// }
// modifiedString(a,b$c)



//  input:   abcde
//  output :  edcba

//  You have 25 horses, and you want to pick the fastest 3 horses out of those 25. In each race,
//   only 5 horses can run at the same time because there are only 5 tracks. 
//   What is the minimum number of races required to find the 3 fastest horses without using a stopwatch?