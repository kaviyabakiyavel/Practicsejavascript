//closure basically able to access the variable outside the function.

function outerfuntion(){
    var number = 1
    function innerfunction(){
     console.log(number)
    }
    innerfunction()
}
console.log(outerfuntion())