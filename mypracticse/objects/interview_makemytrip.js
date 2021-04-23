// function queryme(objval,str){
//    var result = ""
//    // split the string and returns new array 
//    let splitstring = str.split('.')
//    //console.log("splitstring",splitstring)
//    result = objval
//    for(let i = 0 ; i < splitstring.length ; i++){
//       result = result[splitstring[i]]
//       //console.log("result",result)
//    }
//    return result
// }
function queryme(objval,str){
   var key 
   for(key in objval){
      console.log("objval[key]",objval[key])
      console.log("str",str.split('.'))
      if(typeof objval[key] === "object"){
         return queryme(objval,str)
      }
      // if(objval[key] === str){
      //    return true
      // }
   }
return false
}
console.log(queryme({a: '123', b: {c: {d: '456'}} , e:{f:"678"}}, 'e.f'))