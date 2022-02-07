
var result = []
function concattwoarray(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(typeof(arr[i]) == 'object'){
            concattwoarray(arr[i])
        }else{
            result.push(arr[i])
        }
        console.log('result',result)
    }
}

console.log(concattwoarray([1, 2, 3], [4, 5, 6]))