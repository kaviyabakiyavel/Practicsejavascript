// Challenge # 3 — Reversing letters and words
// Input: "I evol uoy os !hcum"
// Output: I love you so much!

let input = "I evol uoy os !hcum"
function Reversingletterwords(input){
  let arr = input.split(' ')
  let output = []
  for(let i = 0 ; i < arr.length ; i++){
      str = arr[i].split('').reverse().join('')
      output.push(str)
  }
  return output.join(' ')
}
Reversingletterwords(input)

// Input: "I love you so much!" 
// Output: I evol uoy os !hcum
function reverse(inp) {
  let arr = inp.split(' ')
  let result = []
  for (let i = 0; i < arr.length; i++) {
    str = arr[i].split('').reverse().join('')
    result.push(str)
  }
  return result.join(' ')
}
console.log(reverse('I love you so much!'))
//output : I evol uoy os !hcum