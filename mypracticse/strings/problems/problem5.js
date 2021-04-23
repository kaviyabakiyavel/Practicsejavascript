//Challenge # 5— Checking whether a string is a palindrome
function palindrome(str) {
    var reversed = str.split("").reverse().join('');
    console.log(reversed)
    if (reversed == str) {
        console.log(true);
    }else{
        console.log(false);
    }
}
palindrome("mam")