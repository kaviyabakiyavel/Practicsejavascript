var input1 = 'abc'  //ouput : yes
var input2 = 'abcc' //ouput : yes
var input3 = 'abccc' //ouput : No
var input4 = 'aabbcd' //ouput : No
var input5 = 'aabbccddeefghi' //ouput : No
var input6 = 'abcdefghhgfedecba' //output :Yes
var input7 = 'aabbc' //Yes
var input8 = 'a' //yes

function findmax(val) {
    let max = val[0]
    for (let i = 0; i < val.length; i++) {
        if (max > val[i]) {
            max = max
        } else {
            max = val[i]
        }
    }
    return max
}
function findmin(val) {
    let min = val[0]
    for (let i = 0; i < val.length; i++) {
        if (min < val[i]) {
            min = min
        } else {
            min = val[i]
        }
    }
    return min
}
function sortasc(val) {
    for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < val.length; j++) {
            if (val[i] < val[j]) {
                let temp = val[i]
                val[i] = val[j]
                val[j] = temp
            }
        }
    }
    return val
}
function objkeyandval(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let x = Object.keys(obj)
        if (x.includes(arr[i])) {
            obj[arr[i]] = obj[arr[i]] + 1
        } else {
            obj[arr[i]] = 1
        }
    }
    return obj
}
function main(str) {
    let arr = str.split('')
    let obj = objkeyandval(arr)
    let val = Object.values(obj)
    let min = findmin(val)
    let max = findmax(val)
    let flag = ''
    if (min == max || obj.length == 1) {
        flag = 'Yes'
    } else {
        let sortarray = sortasc(val)
        // removing first element 
        //caabb[1,2,2]
        if (sortarray[0] == 1) {
            let shift = sortarray.shift() - 1
            for (let i = 0; i < sortarray.length - 1; i++) {
                if (sortarray[i] != sortarray[i + 1]) {
                    flag = 'No'
                    break
                } else {
                    flag = 'Yes'
                }
            }
        } else {
            //removing last element checking val is equal or not 
            let popped = sortarray.pop() - 1
            let pushed = sortarray.push(popped)
            //if i+1 length is 7 , i+1 is 8 stop the loop before 8 
            for (let i = 0; i < sortarray.length - 1; i++) {
                if (sortarray[i] != sortarray[i + 1]) {
                    flag = 'No'
                    break
                } else {
                    flag = 'Yes'
                }
            }
        }
    }
    console.log("flag", flag)
}

// main(input1)
// main(input2)
// main(input3)
// main(input4)
// main(input5)
// main(input6)
// main(input7)
main(input8)