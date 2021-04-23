// Display the temperature closest to 0.

//solution 1
var counts = [ 1, -2, -8, 4, 5]
goal = 0;
let champ
var n = counts.length
for (let i = 0; i < n; i++) {
    let curr = counts[i]
    if(i == 0){
        champ = counts[i] 
        //console.log("champ",champ)
    }
    if (Math.abs(curr - goal) < Math.abs(champ - goal)) {
        champ = curr
        //console.log(curr)
    }
    else {
        //console.log(champ)
    }
}
console.log("champ",champ)

//solution 2

// var counts = [1, -2, -8, 4, 5],
//     goal = 0;

// var closest = counts.reduce(function (champ, curr) {
//     console.log("champ", champ)
//     console.log("curr", curr)
//     return (Math.abs(curr - goal) < Math.abs(champ - goal) ? curr : champ);
// });

// console.log(closest);
