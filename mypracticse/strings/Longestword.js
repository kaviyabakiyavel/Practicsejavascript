

//  function checkeachword(word){
//     let result = []
//        for(let j = 0 ; j < word.length ; j++){
//          if(word[j] != '&' && word[j] != '!'){
//              result.push(word[j])
//          }
//        }
//        return result
//  }

// function LongestWord(sen) { 
//     let arr = sen.split(' ')
//      for(let i = 0 ; i < arr.length ; i++){
//        let word = arr[i].split('')
//        let val = checkeachword(word)
//        console.log(val)
//      }
//   }


//   // keep this function call here 
//   console.log(LongestWord("fun&!! time"));


function mergetwoarray(arr1, arr2) {
    let result = [...arr1, ...arr2];
    let index = result.indexOf(7)
    if (index > -1) {
        result.splice(index, 1)
    }
    console.log(result)
}
console.log(mergetwoarray([1, 2, 3, 4], [5, 6, 7, 8]));

const email = 'krishnaradhi@yahoo.com'

function finddomain(emailid) {
    var name = emailid.substring(emailid.lastIndexOf( '@' )+1)
    var domain = name.replace('.com','')
    console.log(domain)
    //var domainname = arr
    //var substring = arr[1].split('.')
    // for (let i = 0; i < substring.length; i++) {
    //     if (substring[i] == 'gmail' ) {
    //         return substring[i]
    //     }
    // }
}
console.log(finddomain(email))
