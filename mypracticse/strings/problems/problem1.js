//Challenge # 1 — Counting duplicate characters
let input = 'adsjfdsfsfjsdjfhacabcsbajda'
//Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

//output = {a:1}
//output = {a:1,d:1}
//output = {a:1,d:1,s:1}
//output = {a:1,d:1,s:1,j:1}
//output = {a:1,d:1,s:1,j:1,f:1}
//output = {a:1,d:1,s:1,j:1,f:2}
function countingduplicatestring(input) {
    let arr = input.split('')
    let output = {}
    for (let i = 0; i < arr.length; i++) {
        var x = Object.keys(output)
        if (x.includes(arr[i])){
            output[arr[i]] = output[arr[i]] + 1
        }
        else{
            output[arr[i]] = 1
        }    
    }
    console.log(output)
}
countingduplicatestring(input)