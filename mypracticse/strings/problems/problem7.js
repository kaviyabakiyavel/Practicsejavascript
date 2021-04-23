//Challenge # 7— Checking that a string contains a substring
function findsubstringES6method1(string, substring) {
    let find = string.includes(substring)
    console.log(find)
}
findsubstringES6method1('foo', 'oo')


//includes () methods return true or false 
//indexOf() methods return the first occurenc eof the specified value  if not present return -1
//indexof(searchvalue,[fromindex])

function findsubstringES6method2(string, substring) {
    let op = string.indexOf(substring) !== -1
    console.log(op)
}
findsubstringES6method2('foo', 'oo')



//custom function first principle with space
function findsubstringwithspace(string, substring) {
    let arr = string.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == substring) {
            console.log(true)
        }
    }

}
findsubstringwithspace('my name kaviya', 'kaviya')

function findsubstringwithoutspace(string, substring) {
    let strlength = string.length
    let sublength = substring.length
    for (let i = 0; i <= strlength - sublength; i++) {
       let checksubstring = string.slice(i, i+sublength)
       if(checksubstring == substring){
           console.log(true)
       }
    }
}
findsubstringwithoutspace('mynamekaviya', 'kaviya')