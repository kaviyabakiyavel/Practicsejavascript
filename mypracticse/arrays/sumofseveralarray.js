//[[3, 2], [1], [4, 12]]
//[3,2,1,4,12]
//22

var result = 0
function sumofseveralarray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "object") {
          sumofseveralarray(arr[i])
        }else{
            result = result + arr[i]
        }
    }
    return result
}
console.log(sumofseveralarray([[3, 2], [1], [4, 12]]))

//reduce

