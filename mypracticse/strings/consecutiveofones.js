// 1110011001010
// h/w many consecutives 1's are there in this binary 
// max ones we have to find
// answer 3

function consecutiveones(str) {
    let arr = str.split('')
    let count = 0
    let globalcount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count = count + 1
        }
        else {
            globalcount = count
            count = 0
        }
    }
    if (count > globalcount) {
        return count
    } else {
        return globalcount
    }
}
console.log(consecutiveones('11100110010111110111111'))
//global = 5
//count = 6