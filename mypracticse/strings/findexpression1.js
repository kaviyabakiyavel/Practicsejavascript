var str = '4/3'
function execute(str) {
    var arr = str.split("")
    var output = ""
    console.log(arr)
    if (arr[1] == "+") {
        output = parseInt(arr[0]) + parseInt(arr[2])
    }
    else if (arr[1] == "-") {
        output = parseInt(arr[0]) - parseInt(arr[2])
    }
    else if (arr[1] == "*") {
        output = parseInt(arr[0]) * parseInt(arr[2])
    }
    else if (arr[1] == "/") {
        output = parseInt(arr[0]) / parseInt(arr[2])
    }
    return output
}

function calculator(str) {
    var calc = ""
    if (str.length == 3) {
        calc = execute(str)
    }
    else {
       //we will do later  
    }
    return calc 
}

console.log(calculator(str))
