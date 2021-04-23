//Additive persistence
//input - 8326962 8+3+2+6+9+6+2 = 36 = 3+6 = 
//output - 9
//Multiplication persistence
//input - 8326962 8*3*2*6*9*6*2 = 31104 = 3*1*1*0*4 =0


let input = [8,3,2,6,9,6,2]

function sumuntilsigledigit(input){
        let total = input
        // console.log("total",total)
        while(total.length > 1){
            t = 0;
            // console.log("input",input.length)
            for (let i=0 ; i<total.length ; i++){
                // console.log("i",input[i] )
                total = t + total[i]
            }
        }
        return total ;
}
console.log(sumuntilsigledigit("8326962"))

