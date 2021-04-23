let arr = [-1, 0, 0, 5, -5, 6, -3, 2, 10, 13, 8, 70, -36, 36]
let closestnum = 23

function closestzero(arr) {
    var distance //prce
    var champ //shop address
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            //activity in first chicken shop
            distance = Math.abs(arr[0] - closestnum)
            champ = arr[0]
        }
        else {
            // acitivity on second chicken shop 
            // 50 < 24
            // of price is less set distance and new champ
            if( Math.abs(arr[i] - closestnum) < distance ){
              // do something
                 distance = Math.abs(arr[i] - closestnum)
                 champ = arr[i]
            }
        }
    }
    console.log(distance)
    console.log(champ)
}
closestzero(arr)

// const arr1 = [1, 10, 7, 2, 4,9]
// const needle = 8 ;
// const closest = arr1.reduce((a,b)=>{
//     return Math.abs(b-needle) < Math.abs(a-needle) ? b : a ;
// })
// console.log(closest)


//output : 7
//0,1
//1-8 = 7 < 0-8 = -8
// 7 < 8  correct
//return 1 it will store a

//1,10
//10-8 = 2 < 1-8 = -7
//2 < 7 correct
//return 10 it will store a

//10,7 
//7-8 = -1 < 10-8 = 2
//1 < 2 correct
//return 7

//7,2
//2-8 = -6 < 7-8 = -1
//6 < 1 wrong
//return 7

//7,4
//4-8 = -4 < 7-8 = -1
// 4 < 1 wrong
//return 7

//7,9
//9-8 = 1 < 7-8 = -1
//1<1 wrong
//return 7

