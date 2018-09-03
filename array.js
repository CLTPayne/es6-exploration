// create an array:

let fruits = ['Apple', 'Strawberry'];

console.log(fruits.length);

// index into an array item:
let first = fruits[0];
let last = fruits[fruits.length - 1];

// loop over an array:
// the below returns the name of the item with it's index on each line:

fruits.forEach(function(item, index, array) {
  console.log(item, index);
});

// add to the front of an array
// newLength is equal to the new array length, not the array itself
let newLength = fruits.push('Orange');

// remove from the end of an array:
let lastItem = fruits.pop();

// remove from the start of an array:
// returns the removed item from the start of the array
// the array has been mutated.
// functional programming aims to treat all data as immutable
let removeFirstItem = fruits.shift();

// add to the front of an array:
let addFirstItem = fruits.unshift('Blueberry');

// find index of an array item:
let pos = fruits.indexOf('Blueberry');

// remove a single item from an index position:
// the second parameter is the number of items to be removed
let removeItem = fruits.splice(pos, 1);

// remove more than one item from an index position:
let vegetables = ['Cabbage', 'Kale', 'Mushrooms', 'Onions'];
console.log(vegetables);

let position = 1, n = 2;

// n defines the number of items to be removed.
let removedItems = vegetables.splice(position, n);

// you now have two separate arrays
// the first two items are still in the original vegetables array
// the second two items have been removed and are now in a new removedItems array
// this is mutating data - so not so functional

// make a copy of an array:
let shallowCopy = vegetables.slice();
// now shallowCopy and vegetables hold the same elements in an array
// in general slice extracts a section of an array and returns a new array (when given parameters to indicate the indexs to extract)

// constructing an empty array structure:
new Array(5)
// the arguement passed to the Array constructor is a number, it creates an array with empty slots
// return value of the above is: (5) [empty × 5]
