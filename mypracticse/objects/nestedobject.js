
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo3'
                    }
                }
            }
        }
    }
}
function contains(obj,val){
    var key 
     for(key in obj){
        console.log("obj[key]",obj[key] )
        console.log("val",val)
        if(typeof obj[key] === "object"){
           return contains(obj[key],val)
        }
        if(obj[key] === val){
            return true
        }
    }
    return false
}
console.log(contains(nestedObject,"foo2"))
