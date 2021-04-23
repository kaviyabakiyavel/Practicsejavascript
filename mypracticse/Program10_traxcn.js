let numberOfDays = 9
console.log("numberOfDays",numberOfDays)
let inputs = ["FATOil","FIBERSpinach","CARBRice","FATCheese","FIBERBeans","FATOlive","CARBPotato","FIBERBroccoli","FIBERBanana"]
var stock = []
var new_dish =""
var dishlist=""
for (let i = 0; i < numberOfDays; i++) {
    var ingredient = inputs[i];
    stock.push(ingredient)
    new_dish = cookx(stock)
    dishlist = dishlist.concat(new_dish)
}
console.log("stock",stock)
console.log("dishlist",dishlist)


cookx = (stock) =>{
 console .log("stock1",stock)
 var Fatcount = stock.filter(a =>a.includes("FAT")).length;
 console.log("Fatcount",Fatcount)
 var Fibercount = stock.filter(a =>a.includes("FIBER")).length;
 console.log("Fibercount",Fibercount)
 var Carbcount = stock.filter(a =>a.includes("CARB")).length;
 console.log("Carbcount",Carbcount)
 var dish
 if(Fatcount >= 2){
   dish = "X"
   console.log("dish",dish)
   stock.splice(stock.indexOf('FAT'), 0)
 }
 else if( Fibercount >= 1 && Carbcount >= 1 && dish != "X"){
   dish = "Y"
   console.log("dish",dish)
 }
 else {
     dish = "-"
 }
 return dish
}
