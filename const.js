// Immutable variables
// Let is mutable

let foo = 'abc';
foo = 'def';
console.log(foo);

// Const declarations are immutable
// The following returns a TypeError: Assignment to constant variable.

const foo = 'abc';
foo = 'def';

// But const does not affect whether the value of a constant itself is mutable or not
// If a constant refers to an object it will always refer to that object
// But the object itself can be changed if it is mutable.
// e.g.

const obj = {};
obj.prop = 123;
console.log(obj.prop);

obj = {}; // this will return a TypeError: Assignment to constant variable.

// If you want an object to be truly constant, you can freeze it's value.

const object = Object.freeze({});
object.prop = 456; // returns the value you've tried to assign but does not add the key value pair to the frozen object 
