// mul(4)(5)() = 20
// mul(2)(2)(2)() = 8

// let mul = function (a) {
//   return function (b) {
//     if (b) {
//       return mul(a * b);
//     }
//     return a;
//   }
// };
// console.log(mul(4)(5)());
// console.log(mul(2)(2)(2)());

let test = { a: { a: "a" }, b: "b", c: { c: { c: "c" } } };
// let test2 = Object.assign({} , test);
// test2.a = 'new'
// let copyinneerobject = Object.assign({} , test.a);
// copyinneerobject.a = "innernew";
// console.log("test2",test2)
// console.log('test',test)

function loopobj(obj) {
  let deepcopy = {};
  for (var key in obj) {
    if (typeof obj[key] == "object") {
      // recursion
      deepcopy[key] = { ...obj[key] };
    } else {
      deepcopy[key] = obj[key];
    }
  }
  return deepcopy;
}
let originalobj = { a: { a: "a" }, b: "b", c: { c: { c: "c" } } };
let deepclone = loopobj(originalobj);
deepclone.c.c = "new";
console.log("deepclone", deepclone);
console.log("originalobj", originalobj);
