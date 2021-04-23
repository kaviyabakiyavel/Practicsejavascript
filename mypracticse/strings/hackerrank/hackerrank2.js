//Input - 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB

//output
// 3
// 4
// 0
// 0
// 4


function eachstring(str) {
    let count = 0
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == str[i+1]){
            count = count + 1
        }
    }
    console.log(count) 
}

let input = 'AAAA, BBBBB, ABABABAB, BABABA, AAABBB'
function adjacentchar(input) {
    let arr = input.split(',')
    for (let i = 0; i < arr.length; i++) {
        eachstring(arr[i])
    }
}
adjacentchar(input)