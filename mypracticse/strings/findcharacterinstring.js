
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