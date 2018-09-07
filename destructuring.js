// before desctructuring assignment...

// ARRAYS
// if we wanted to assign some variables from an array we would:

let array = [100, 200];
let a = array[0];
let b = array[1];
console.log(a, b); // returns 100, 200

// with destructuring assignment this can be streamlined to:

let numbers = [300, 400]
let [c, d] = numbers;
console.log(c, d); // returns 300, 400

// essentially this is assigning both variables at the same time
// looks at the order in the assignment array and matches to this order

// similar example but with strings:
let nicknames = ['Chola', 'Bub', 'Chif'];
let [yaz, miranda, tif] = nicknames;
console.log(yaz, miranda, tif); // returns Chola, Bub, Chif

// third example
// using the spread operator two can assign one bit of data individually
// then spread the rest of the data to another variable
let g = [100, 200, 300, 400, 500]
let [e, ...f] = g;
console.log(e, f); // returns 100 [200, 300, 400, 500]

// OBJECTS
let wizard = { magical: true, power: 10 };
// es5 way to set a variable to one of the values in the object:
// let magical = wizard.magical;
// let power = wizard.power;

// with es6 you can:
let { magical, power } = wizard;

// it matches the variable name on the left,
// with the key property name in the object on the right
console.log(magical, power) // returns true 10

let ranger = { magic: false, strength: 9 };
let { magic, strength } = ranger;
console.log(magic, strength);
