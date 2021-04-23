// Challenge # 8 — Checking whether two strings are anagrams
//same letter should be rearranged its called anagram 
// inbuilt method in javascript complexity

// function Anagram(string1, string2) {
//     if (string1.length !== string2.length) {
//         return false;
//     }
//     var anagramcheckstr1 = string1.split('').sort().join('')
//     var anagramcheckstr2 = string2.split('').sort().join('')
//     console.log("anagramcheckstr1", anagramcheckstr1)
//     console.log("anagramcheckstr2", anagramcheckstr2)
//     return (anagramcheckstr1 === anagramcheckstr2)
// }
// console.log(Anagram('silent', 'listen'))

//without using inbuilt function in javascript 
//using sorting methods 
const { performance } = require('perf_hooks');
// var t0 = performance.now()
// anagrambyusingsort('abac', 'aabc') // <---- The function you're measuring time for 
// var t1 = performance.now()
// console.log("Call to dual sort  took " + (t1 - t0) + " milliseconds.")
// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }
// function checkindex(swap1, swap2) {
//     let output
//     for (let i = 0; i < swap1.length; i++) {
//         if (swap1[i] != swap2[i]) {
//             output = false
//             break
//         }
//         else {
//             output = true
//         }
//     }
//     return output
// }
// function anagrambyusingsort(s1, s2) {
//     let arr1 = s1.split('')
//     let arr2 = s2.split('')
//     let swap1 = sort(arr1)
//     let swap2 = sort(arr2)
//     let output = checkindex(swap1, swap2)
//     console.log("anagrambyusingsort", output)
// }


// var t0 = performance.now()
// checkanagram('abac', 'aabc') // <---- The function you're measuring time for 
// var t1 = performance.now()
// console.log("Call to dual hashmethod 1 took " + (t1 - t0) + " milliseconds.")
// function hashingfunction(s) {
//     let hash = {}
//     for (let i = 0; i < s.length; i++) {
//         var x = Object.keys(hash)
//         if (x.includes(s[i])) {
//             hash[s[i]] = hash[s[i]] + 1
//         } else {
//             hash[s[i]] = 1
//         }
//     }
//     console.log(hash)
//     return hash
// }
// function checkanagram(s1, s2) {
//     let output = []
//     h1 = hashingfunction(s1)
//     h2 = hashingfunction(s2)
//     for (var key in h1) {
//         // console.log(h1[key])
//         if (h1[key] !== h2[key]) {
//             output = false
//             break
//         } else {
//             output = true
//         }
//     }
//     console.log("checkanagramoutput", output)
// }

var t0 = performance.now()
checkanagram2('abac', 'aabc') // <---- The function you're measuring time for 
var t1 = performance.now()
console.log("Call to dual hashmethod2 took " + (t1 - t0) + " milliseconds.")
function hashingfunction2(s) {
    let hash = {}
    for (let i = 0; i < s.length; i++) {
        var x = Object.keys(hash)
        if (x.includes(s[i])) {
            hash[s[i]] = hash[s[i]] + 1
        } else {
            hash[s[i]] = 1
        }
    }
    return hash
}
function decreasethecount(s2,h1){
    for (let i = 0; i < s2.length; i++) {
        let key = s2[i]
        h1[key] = h1[s2[i]]-1
     }
     return h1
}
function checkanagram2(s1, s2) {
    let output = []
    h1 = hashingfunction2(s1)
    h1 = decreasethecount(s2,h1)
    for( var key in h1){
       if(h1[key] != 0){
            output = false 
            break
        }else{
            output = true
        }
    }
    console.log("output1",output)
}
checkanagram2('abac','aabc')
checkanagram2('abbc','aabc')