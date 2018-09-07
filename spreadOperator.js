// new way of manipulating arrays
// used a lot in react, when working with props

let a = [2, 3, 4, 5];
let b = [1, ...a, 6, 7, 8, 9, 10];

console.log(b);

// the above is the es6 equivalent of:

// "use strict";
//
// var a = [2, 3, 4, 5];
// var b = [1].concat(a, [6, 7, 8, 9, 10]);
//
// console.log(b);

// therefore the spread operator helps make your code a lot more conscise

function print(a, b, c) {
  console.log(a, b, c);
}

let z = [1, 2, 4]

// can use the spread opperator ot pass the whole array into the print function
print(...z); // returns 1 2 4

// or can use it as a variable argument to pass in a range of arguments to a function
function print(...w) {
  console.log(w);
};

print(5, 6, 7); // returns [5, 6, 7]

// this function will work with any number of args
// e.g.

print(1, 3); // returns [1, 3]

print(200, 1110, 2, 5, 6, 71); // returns [ 200, 1110, 2, 5, 6, 71 ]
