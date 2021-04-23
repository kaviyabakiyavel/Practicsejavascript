// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var i = 0; i < str.length; i++) {
//         console.log("str.charAt(i)", str.charAt(i))
//         if (str.charAt(i) == letter) {
//             letter_Count = letter_Count + 1;
//         }
//     }
//     return letter_Count;
// }

// console.log(char_count('kaviya', 'a'));

function charcount(str, charfind) {
    let lettercount = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == charfind) {
            lettercount = lettercount + 1
        }
    }
    return lettercount
}
console.log(charcount('bakiyavel', 'a'))