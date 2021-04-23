//How to find the maximum occurring character in a given String?
//input - java
//output - a

//for... of work for array,string ,...arguments ,NodeList,Map,set,TypedArray 
//for..of loops through the values of an iterable Object.
// const names = ["youtube" , "facebook" , "Instagram" , "Netflix"]
// for(const n of names){
//     console.log(n);
// }
// const myname = 'kaviya'
// for(const n of myname){
//     console.log(n)
// }

//for.. in works for object returns key and values 
// const symbols = { yt : "youtube", ig : "instagram", fb : "Facebook", lco : "LearnCode"}
// for(const n in symbols){
//   console.log("key : " + n + " value : " + symbols[n])
//   console.log()
// }

//by using for of and for in loop 
function maxCharInString2(str) {
    // let obj = {}
    // for (let i = 0; i < str.length; i++) {
    //     let x = Object.keys(obj)
    //     if (x.includes(str[i])) {
    //         obj[str[i]] = obj[str[i]] + 1
    //     } else {
    //         obj[str[i]] = 1
    //     }
    // }
    //(or)
    let strObj = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        if (strObj[char]) {
            strObj[char]++;
        } else {
            strObj[char] = 1;
        }
        console.log(strObj)
    }
    for (let char in strObj) {
        if (strObj[char] > max) {
            max = strObj[char];
            maxChar = char;
        }
    }
    return maxChar
}
var testcase1 = maxCharInString2('java') //return a
console.log("testcase1", testcase1)
var testcase2 = maxCharInString2('aaabbbcccfffffdddd') //return f
console.log("testcase2", testcase2)
var testcase3 = maxCharInString2('aaabbbcccdddd') //return d
console.log("testcase3", testcase3)