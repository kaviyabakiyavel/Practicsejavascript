function findstringcount(str,inp){
  console.log("str.split(inp)",str.split(inp))
  var count = str.split(inp).length-1
  console.log("count",count)
}
console.log(findstringcount('potatopotatopotato','potato'))

/*reg expression*/
// var temp = "potatopotatop.";
// var count = (temp.match(/potato/g) || []).length;
// console.log("count",count);

function findstring(str,inp) {
  let check = str.split(inp)
  console.log("check",check)
  return check.length-1
}
console.log(findstring("potatoapple",'potato'))