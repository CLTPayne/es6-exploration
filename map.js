// es5 use of map:

let points = [10, 20, 30];

let addOne = function(element) {
  return element + 1;
};

// using a callback - the funtion passes as an arguement to map
// we call this callback on every element in the array:
extraPoints = points.map(addOne);

console.log(extraPoints); // returns [11, 21, 31]

// the callback can be changed to an anonymous functtion:

let timesTwo = (element) => {
  return element * 2;
};

doublePoints = points.map(timesTwo);

console.log(doublePoints); // returns [20, 40, 60]

// this can be striped back even further to be more conscise still:
// removing the named function and performing the data manipulation as the map argument:

removePoints = points.map(element => {
  return element - 1
});

console.log(removePoints); // returns [9, 19, 29]

// can shorten this even further:

halvePoints = points.map(element => element / 2);

console.log(halvePoints);

// when all on one line we can remove the braces
// when on one line, it automatically returns what's on the right so can remove the return too!
