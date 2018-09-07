// SYNTAX

// normal function example:
// this function uses the function keyword in order to declare it.
// this gives it a named identifier.

// function takeOff() {
//   console.log("3... 2... 1... go!")
// };
//
// takeOff();

// es5 anoymous function syntax:
setTimeout(function() {
  console.log('3...2...1... blast off!')
}, 1000);

// above first argument is an anoymous function
// above second argument is 1000 milliseconds (1 second)

// setTimeout automatically calls the function
// after the minimum time limit has passed


// es6 anoymous arrow function (they are anonymous by default):
setTimeout(() => {
  console.log('3...2...1... gooooooo!')
}, 1000);

// es6 arrow function with a named identifier:
const blastOff = () => {
  console.log('3...2...1... blasting off!')
};

// now we can specifically call this arrow function.
blastOff();

// when we run this file, note that that last function is printed first
// because it doesn't have to wat for the setTimeout to elapse.

// BENEFITS

// 1. Arrow functions don't bind their own this object to the expresssion.
// This - each function defines it's own scope and creates a new keyword, this within that scope
// The function can then bind keys and values to that this object.
// However arrow functions don't create a this object
// Due to them being anonymous their this keyword still acesses the this of the global scope
// Or the function wrapped around them

// There is a global this object:

this.a = 25
//
// let print = function() {
//   console.log('this.a', this.a);
// };

// print(); // returns this.a undefined
// because the es5 print function creates it's own this separate from the global this object

// so we can use the print function's this object:
let print = function() {
  this.a = 50
  console.log('this.a', this.a);
};

print() // returns this.a 50

// vs in an arrow function can still access the global this in the object around the function:

let arrowPrint = () => {
  console.log('this.a in arrowPrint', this.a)
}

arrowPrint() // returns this.a 25
