//const array = ["bas","niranjan","ovi","kukoo","appa"]
//now amma is comes and finds her set kukkoo is sitting 
//once amma find the kukoo set 
//result = ["bas","niranjan","ovi","amma",kukoo","appa"]

//not correct way of doing this 
// function sittingarrangment(arr) {
//     console.log(arr.length)
//     let findkukooposition = arr.indexOf("kukoo")
//     arr[findkukooposition] = "amma"
//     arr[findkukooposition+1] = "kukoo"
//     arr[findkukooposition+2] = "appa"
//     console.log(arr)
// }
// console.log(sittingarrangment(["bas", "niranjan", "ovi", "kukoo", "appa"]))


//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
// What you want is the splice function on the native array object.

// arr.splice(index, 0, item); will insert item into arr at the specified index (deleting 0 items first, that is, it's just an insert).

// In this example we will create an array and add an element to it into index 2:
// var arr = [];
// arr[0] = "Jani";
// arr[1] = "Hege";
// arr[2] = "Stale";
// arr[3] = "Kai Jim";
// arr[4] = "Borge";
// console.log(arr.join());
// arr.splice(2, 0, "Lene");
// console.log(arr.join());
//output Jani,Hege,Stale,Kai Jim,Borge
//output Jani,Hege,Lene,Stale,Kai Jim,Borge

function sittingarrangment(arr) {
    arr.splice(3, 0, "amma")
    return arr

}
console.log(sittingarrangment(["bas", "niranjan", "ovi", "kukoo", "appa"]))

const input = ["bas", "niranjan", "ovi", "kukoo", "appa", "perima", "peripa", "thatha", "patti"]
//add amma middle of the array 
// so split the array into two 
//arr1 ["bas","niranjan","ovi"]
//arr2 ["kukoo","appa","perima","peripa","thatha","patti"]
//insert amma into arr1 at the end
//then concat two arrays
//output ["bas","niranjan","ovi","kukoo","amma","appa","perima","peripa","thatha","patti"]

function manuallysittingarragement(input) {
    let arr1 = input.slice(0, 3)
    let arr2 = input.slice(3, input.length)
    arr1.push("amma")
    return arr1.concat(arr2)
}
console.log(manuallysittingarragement(input))

//[1,2,3,4,5,6,7,8,9,5,2,5,3,7,8,2,5]
// where ever finding 5 replace with 10 

function findvalue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 5){
            arr[i] = 10
        }
    }
    return arr
}
console.log(findvalue([1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 2, 5, 3, 7, 8, 2, 5]))