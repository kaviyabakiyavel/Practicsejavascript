let arr = [10,20,30,40,50,60,70,80,90,100]
function reverse(arr) {
	//return arr.reverse()
    //write polyfill
    let newarray = []
	for(var i = arr.length-1 ; i >= 0 ; i--) {
		console.log("arr.length",arr.length-1)
		console.log("i",i)
		newarray.push(arr[i])
	}
	return newarray
}
console.log(reverse(arr))