// //Challenge # 2— Finding the first non-repeated character
// let input = 'cbcbddef'
// //output = e
// //find the first non repeating character
// //step 1 : find all non repeating characters
// //step 2 : find first value in tat
// function findcount(input) {
//     let arr = input.split('')
//     console.log(arr)
//     let output = {}
//     for (var i = 0; i < input.length; i++) {
//         var x = Object.keys(output)
//         if (x.includes(input[i])) {
//             output[input[i]] = output[input[i]] + 1
//         } else {
//             output[input[i]] = 1
//         }
//     }
//     console.log("output", output)
//     findobjectvalue(output)
// }
// findcount(input)
// function findobjectvalue(output) {
//     let key = Object.keys(output)
//     for (let i = 0; i < key.length; i++) {
//         //  console.log("key" ,key[i])
//         //  console.log(output[key[i]])
//         if (output[key[i]] == 1) {
//             console.log(key[i])
//             break 
//         }
//     }
// }

// //output = {}
// //object.keys  it  will gives keys and return array
// // x.inclues(c) not present it will give  false
// //output = {c : 1}

// //x.include(b) not present it will give  false
// //output = {c : 1 , b : 1}

// //x.include(c) it will give  true
// //output = {c : 2 , b : 1}

// //x.include(b) it will give  true
// //output = {c : 2 , b : 2}

// //x.include(d) not present it will give  false
// //output = {c : 2 , b : 2 , d : 1}

// //x.include(d) it will give  true
// //output = {c : 2 , b : 2 , d : 2}

// //x.include(e) not present it will give  false
// //output = {c : 2 , b : 2 , d : 2 , e : 1}

// //x.include(f) not present it will give  false
// //output = {c : 2 , b : 2 , d : 2 , e : 1 , f : 1}



// function args(...args) {
//     console.log(args)
//     return args
// } 
// args(1,2,3)


// function obj(){
//     let obj = {}
//     obj["name"] = 'kaviya'
//     obj['age'] = '23'
//     let key = Object.keys(obj)
//     console.log(key.length)
//     if(key.length <= 2){
//         console.log("not able to add key and value pair inside object")
//     }
// }
// obj()


// arrowfunction = () => {
//   console.log("button is clicked")
// }
// <button onClick = {this.arrowfunction}>OnClickbutton</button>

let data1 = [
    {"name":'kaviya'},
    {"age":23}
]
let data2 = [
    {"name":'bakiyavel'},
    {"age":50}
]

let filter1 = data1.filter(data => data.age)
console.log('fliter1',filter1)
let filter2 = data2.filter(data => data.age)
console.log('fliter2',filter2)
