const array = [10,20,20,10,10,30,50,10,20];
// var count = 0
// var result = []
// for(let i=0 ; i<array.length ; i++){
//  // console.log("i",array[i])
//   for(let j=i+1 ; j<array.length ; j++){
//     //console.log("j",array[j])
//     let socks = []
//     if(array[i] == array[j]){
//         socks.push(array[i])
//         socks.push(array[j])
//         console.log("socks",socks)
//         array.splice(i , 1)
//         array.splice(j-1 , 1)
//         count ++ 
//         //console.log("array",array)
//         //console.log("count",count)
//          result.push(socks)
//          console.log("results",result)
//       }
//   }
// }

function sockMerchant(n, ar) {
  var count = 0
  while(ar.length > 1){
     console.log("ar1",ar)
     console.log("count",count)
     var j = 1
     while(j<ar.length){
     if(ar[0] == ar[j]){
         console.log("ar[i]",ar[0])
         console.log("ar[j]",ar[j])
         ar.splice(0 , 1)
         ar.splice(j-1 , 1)
         count ++ 
         break
       }
     else{
         if(j == ar.length-1){
                ar.splice(0 , 1)
         }
         j++
       }
      }
   }
     return count
  }