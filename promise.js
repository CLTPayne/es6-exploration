// a promise is a special javascript object
// involves producing code - something that takes some time like a script
// consuming code - functions that that need the result of the producing code
// promise connects the aboce two
// the function passed to a promise is called an executor.

// constructor syntax for a promise is:

let promise = new Promise(function(resolve, reject) {
  executor(the producing code);
});

// when the promise is created, the executor runs automatically

// a promise object has two internal properties:
  // state - starts off pending then changes to 'fulfilled' or 'rejected'
  // result - initially 'undefined', a value of your choosing
// when the executor finishes what it's doing, it calls one of the argument functions:
  // resolve(value) - sets state as fullfilled and result as value
  // reject(error) - sets state to rejected and result to error

// the following has the setTimeout as the producing code function:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('done!'), 1000);
});
