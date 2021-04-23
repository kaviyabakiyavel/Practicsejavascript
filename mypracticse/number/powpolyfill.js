
function posCom(num) {
    if (num == 1) {
        return num * 2
    }
    else {
        var result = 2
        var i = 1;
        while (i < num) {
            //console.log("i", i)
            var multi = result * 2
            result = multi
            //console.log("result",result)
            i++;
        }
        return result
    }
}
console.log(posCom(10))