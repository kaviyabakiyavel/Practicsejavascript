//call back bascially is a function , passing function as a argument to another function 
//it wil executed after some operation has been completed .

// function modifyarray(arr,callback){
//     arr.push(100);
//     callback();
// }
// var arr =[1,2,3,4]
// modifyarray(arr,function(){
//  console.log('array has been modified',arr)
// });

const object1 = [
    { "money": 1, "c": 3,"name":"kaviya" },
    { "money": 4, "b": 5, "c": 6,"name":"bas" },
    { "money": 2, "b": 7,"name":"bakiyavel","age":"50" },
]
const object2 = {
    'money': 4
}

// Step1 : check key and value is matches in each oject  
// Step2 : if it matches set flag 1
// Step3 : else repeate the process untill it find the key and value in the original array

function find(object1, object2) {
    let key = Object.keys(object2)
    let val = Object.values(object2)
    for (let i = 0; i < object1.length; i++) {
       if(object1[i][key] == val){
           return object1[i]
       }
    }
}
console.log(find(object1, object2))