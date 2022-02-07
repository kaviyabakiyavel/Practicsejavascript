// rev(5121) ➞ "1215"
// rev(69) ➞ "96"
// rev(-122157) ➞ "751221"

function rev(num){
    let str = num.toString()
    console.log("str",str)
    let arr = []
    let result = ''
    for(let i = 0 ; i < str.length ; i++){
        arr.push(str[i])
    }
    let reverse = arr.reverse()
    result = reverse.join('')
    return result 
}
console.log(rev(5121))

