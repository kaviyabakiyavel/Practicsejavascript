//3
//1(2) + 2(2) + 3(2) = 1+4+9 = 14
//sqaure of sum 

function sumofsquare(num) {
    let total = num * (num + 1) * (2 * num + 1) / 6
    console.log(total)
}
sumofsquare(3)

//javascript methods pow()

function pow(num, pow) {
    let total = 0
    for (let i = 1; i <= num; i++) {
        total = total + Math.pow(i, pow);
    }
    console.log(total)
}
pow(3, 2)

//sumofcube
function sumofcube(num) {
    let total = num * num * (num + 1) * (num + 1) / 4
    console.log(total)
}
sumofcube(3)

//1^3 + 2^3 + 3^3




//square 2^2 = 4  root = 4 = 2
let root = Math.sqrt(4)
console.log(root)
