// let input1=["A","bat"]
// let input2=["Word","one"]
// console.log("input1",input1)
// console.log("input2",input2)

// input1.forEach((item,i)=>{
//     let eachstring = item.split('')
//     console.log("eachstring",eachstring)
//     let count=0;
//     let total =0;
//     for(let i = 0 ; i < eachstring.length ; i++){
//         let char = eachstring[i];
//         console.log("char",char)
//         count++;
//         // total = total+count;
//         // console.log("total",total)
//     }
//     console.log("count",count)
// })

let input2=["Word","one"]
console.log("input2",input2)
let total =0;
let factor = 0;
let primenumber=[];
input2.forEach((item,i)=>{
    let eachstring = item.split('')
    console.log("eachstring",eachstring)
    let count=0;
    for(let i = 0 ; i < eachstring.length ; i++){
        let char = eachstring[i];
        console.log("char",char)
        count++;
    }
    console.log("count",count)
    total = total+count;
    console.log("total",total)
    const findNextPrime = (total) =>{
    
        let nextPrime = total;
        let found = false;
    
        while(!found)
        {
            nextPrime++;
            if(isPrime(nextPrime))
                found = true;
        }
        return nextPrime;
    }
    
    const isPrime = (total) =>
    {
        for(let i = 2; i <= total/2; i++)
        {
            if (total % i == 0)
                return false;
        }
        return true;
    }
    console.log("nextprime",findNextPrime(total))
})

