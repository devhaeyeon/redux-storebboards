// Array Destructuring Assignment
var foo = ['one', 'two', 'three'];

// var [two, one, three, four  = 'four'] = ['one', 'two', 'three'];
var [one, ...two] = ['one', 'two', 'three'];
console.log(one); // "one"
console.log(typeof two);
console.log(two); // "two"