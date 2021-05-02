// function combinationofstring(str) {
//     var listofstring = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length + 1; j++) {
//             listofstring.push(str.slice(i, j))
//         }
//     }
//     return listofstring
// }
// function substring(str1, str2) {
//     let resultst1 = combinationofstring(str1)
//     let resultstr2 = combinationofstring(str2)
//     var check = 'NO'
//     for (let i = 0; i < resultst1.length; i++) {
//         for (let j = 0; j < resultstr2.length; j++) {
//             if (resultst1[i] == resultstr2[j]) {
//                 console.log(true)
//                 check = 'YES'
//                 break;
//             } 
//         }
//     }
//     console.log('check', check)
// }
// substring('aardvark', 'apple')



//creat alp
//then check whether the string in both array 
function checkingarray(alp, s1, s2) {
    var check = 'NO'
    // for (let i = 0; i < s1.length; i++) {
    //     for (let j = 0; j < s2.length; j++) {
    if (s1.includes(alp) && s2.includes(alp)) {
        check = 'YES'
    }
    //     }
    // }
    return check
}

let alpbhates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function substring(str1, str2, alpbhates) {
    let s1 = str1.split('')
    let s2 = str2.split('')
    let output = 'NO'
    for (let i = 0; i < alpbhates.length; i++) {
        output = checkingarray(alpbhates[i], s1, s2)
        if (output == 'YES') {
            break
        }
    }
    console.log('output', output)
}
substring('hello', 'world', alpbhates)

//input : dog
//output : [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

