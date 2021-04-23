//     //Enter your code here
//     var inp = input.split('\n');
//     var n = parseInt(inp[0])
//     var phonebook = {}
//     for(let i = 0 ; i < n ; i++){
//        var newinp = inp[i+1]
//        var split = newinp.split(' ')
//        phonebook[split[0]] = split[1]
//     }
//     let arr = []
//     for(let k = n+1 ; k<inp.length ; k++){
//         arr.push( inp[k])
//     }
// //arr list of users ["ashok","pakki","kaviya","gokul"]
// //keys inside phonebook list of users  {"ashok":'123',"kaviya" :'789',"pakki" : '456'}
//     for(let i = 0 ; i<n ; i++){
//         let key = Object.keys(phonebook)
//         let values = Object.values(phonebook)
//         if(key.includes(arr[i])){
//             console.log(key[i] + "=" + values[i] ) 
//         }else{
//             console.log( "Not found ")
//         }
//     }

//see in hacker rank //