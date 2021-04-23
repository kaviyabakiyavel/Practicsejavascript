let str1 = 'kaviyakrishna'
let str2 = 'kaviya'

function hashing(str) {
    let h = {}
    for (let i = 0; i < str.length; i++) {
        let x = Object.keys(h)
        if (x.includes(str[i])) {
            h[str[i]] = h[str[i]] + 1
        } else {
            h[str[i]] = 1
        }
    }
    return h
}

function removeduplicatearray(arr1, arr2) {
    let result = []
    let arr = [...arr1, ...arr2]
    for (let i = 0; i < arr.length; i++) {
        //includes return true or false if element present 
        if (result.includes(arr[i]) != true) {
            result.push(arr[i])
        }
    }
    return result
}

function uncommoncharacter(result , h1 ,h2) {
    let count = 0
    let h1count = 0
    let h2count = 0
    for (let i = 0; i < result.length; i++) {
        if (h1[result[i]] == undefined) {
            h1count = 0
        }
        else {
            h1count = h1[result[i]]
        }
        if (h2[result[i]] == undefined) {
            h2count = 0
        }
        else {
            h2count = h2[result[i]]
        }
        count = count + (h1count - h2count)
    }
    return count
}

function main() {
    var h1 = hashing(str1)
    var h2 = hashing(str2)
    let key1 = Object.keys(h1)
    let key2 = Object.keys(h2)
    let removeduplicatesinarray = removeduplicatearray(key1, key2)
    let uncommoncharacterinthetwostring = uncommoncharacter(removeduplicatesinarray ,h1 ,h2)
    console.log("uncommoncharacterinthetwostring", uncommoncharacterinthetwostring)
}
main()

