//ascDesNone([4, 3, 2, 1], "Asc" ) o/p [1, 2, 3, 4]

//ascDesNone([7, 8, 11, 66], "Des") o/p [66, 11, 8, 7]

//ascDesNone([1, 2, 3, 4], "None") o/p [1, 2, 3, 4]

function ascending(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = [i+1]; j < arr.length ; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(ascending([4, 3, 2, 1], "Asc"))

function descending(arr,str){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = [i+1] ; j < arr.length ; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}
console.log(descending([7, 8, 11, 66], "Des"))