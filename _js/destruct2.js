// Object Destructuring Assignment
var o = {p: 42, q: true};
var {q, p, o = 1} = {p: 42, q: true};;

console.log(p); // 42
console.log(q); // true

// default parameter
console.log(o);