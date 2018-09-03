// reduce() executes a reducer function (that you provide) on each member of an array
// results in a single output value
// the reducer function has four parameters:
  // accumulator
  // current value
  // current index
  // source array
// the reducers return value is assigned to the accumulator
// this value is remembered across each iteration through the array
// this value finally becomes the final, single resulting value

const array1 = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer)); // returns 10

// you can give the reducer an initial value as an arguement e.g:
console.log(array1.reduce(reducer, 5)); // returns 15

// reducer() is used as a callback and executed on each element in the array

// if no initial value arguement is given, the first element of the array is used

// if the array is empty and no initial value is provided, a TypeError is thrown
// it's generally safer to provide an initial value

// two different syntax options:
// non fat arrow:
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});

// fat arrow version:
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue);

// if you're providing an inital value as a second arguement to reduce (after the callback):
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, 10);

// sum up values contained in array of objects:
// you must supply an initial value
let initialValue = 0;
let sum = [{x: 1}, {x: 2}, {x:3}].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x
  , initialValue
);

console.log(sum); // returns 6
