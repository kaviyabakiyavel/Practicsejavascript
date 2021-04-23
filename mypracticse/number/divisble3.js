function divisbleby3(num1, num2) {
    var output = []
    for (let i = num1; i <= num2; i++) {
        output.push(i)
        if(i % 3 == 0){
            output.push("div3")
        }
    }
    console.log(output)
}
console.log(divisbleby3(2, 10))