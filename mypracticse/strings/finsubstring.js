// let input1 = ["redlid", "bluelid", "greenlid", "greencontainer", "redcontainer", "redcontainer"]
let input1 = ["redlid", "bluelid", "bluecontainer", "redcontainer"]
console.log("input1", input1)
let newinput = []
let count = 0
input1.forEach((eachitem, i) => {
    let remove
    if (eachitem.includes('lid')) {
        remove = eachitem.replace('lid', '')
    }
    else if (eachitem.includes('container')) {
        remove = eachitem.replace('container', '')
    }
    newinput.push(remove)
    console.log('newinput', newinput)
    if (newinput.length == input1.length) {
        console.log("newinput.length", newinput.length)
        console.log("input1.length", input1.length)
        for (let i = 0; i < newinput.length / 2; i++) {
            // console.log("newinputi",newinput[i])
            let m = newinput.length - i - 1
            if (newinput[i] == newinput[m]) {
                   count++
                   if(count==newinput.length / 2){
                    console.log("valid")
                   }
            }
            else{
                   console.log("invalid")
            }
        }
    }
})


// let input1 = ["redlid", "bluelid", "greenlid", "greencontainer", "redcontainer", "redcontainer"]
// //let input1 = ["redlid", "bluelid", "bluecontainer", "redcontainer"]
// console.log("input1", input1)
// let newinput = []
// let count = 0
// input1.forEach((eachitem, i) => {
//     let remove
//     if (eachitem.includes('lid')) {
//         remove = eachitem.replace('lid', '')
//     }
//     else if (eachitem.includes('container')) {
//         remove = eachitem.replace('container', '')
//     }
//     newinput.push(remove)
//     console.log('newinput', newinput)
//     if (newinput.length == input1.length) {
//         // console.log("newinput.length", newinput.length)
//         // console.log("input1.length", input1.length)
//         for (let i = 0; i < newinput.length / 2; i++) {
//             for(let j=newinput.length-i-1 ; j>=newinput.length/2;j--){
//                console.log("newinputi",newinput[i])
//                console.log("newinputj",newinput[j])
//                if(newinput[i]==newinput[j]){
//                 count++
//                 if(count==newinput.length / 2){
//                     console.log("valid")
//                 }
//                 break
//                }
//                else{
//                 console.log("invalid")
//                 break
//             }
//             }
//         }
//     }
// })
