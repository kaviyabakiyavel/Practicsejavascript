let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "lime", price: 30 },
    { name: "lime", price: 60 },
]
function asc_sortDrinkByPrice(drinks) {
    var asc_order_price = drinks.sort((a, b) => Number(a.price) - Number(b.price))
    return asc_order_price
}
console.log(asc_sortDrinkByPrice(drinks))

function desc_sortDrinkByPrice(drinks) {
    var desc_order_price = drinks.sort((a, b) => Number(b.price) - Number(a.price))
    return desc_order_price
}
console.log(desc_sortDrinkByPrice(drinks))

/*bubble sort*/
const sam_array = [5, 1, 4, 2, 8]
function asc_bubble_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("value of i",i)
        for (let j = 0; j < arr.length-1; j++) {
            console.log("value of j",j)
            if (arr[j] > arr[j + 1]) {
                console.log("arr[j]", arr[j])
                console.log("arr[j+1]", arr[j + 1])
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
            console.log("arr", arr)
        }
        console.log("***")
    }
    return arr
}
console.log(asc_bubble_sort(sam_array))

function desc_bubble_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
           if(arr[j] < arr[j+1]){
               let temp = arr[j]
               arr[j] = arr[j+1]
               arr[j+1] = temp
           }
        }
    }
    return arr
}
console.log(desc_bubble_sort(sam_array))