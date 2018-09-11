// a promise is a special javascript object

// DEFINITION:
// The promise object is used for deferred and asynchronous computations.
// A promise represents an operation that hasn't completed yet, but is expected

// involves producing code - something that takes some time like a script
// consuming code - functions that that need the result of the producing code
// promise connects the above two
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

example promise:

function stats (file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(data)
    })
  })
}

Promise.all([
  stats('file1'),
  stats('file2'),
  stats('file3')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))

// Promise.all() is an iterable method that returns a single Promise
// that resolves when all of the promises in the iterable argument have resolved.
