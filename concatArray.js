// Way to change an array with out mutating.
// Pop and splice are mutating
// In Redux it is important to not mutate state but create a new state object


// Concat does not modify the original array, so alternative to pop
const addCounter = (list) => {
  return list.concat([0]);
};

// Or using the es6 spread operator:
const addCounter = (list) => {
  return [...list, 0];
};


// to remove an item from an array, alternative to splice (splice mutates)
// slice makes a copy of the parts of the array before and after the index item you wan to skip
const removeCounter = (list, index) => {
  return list
    .slice(0, index)
    .concat(list.slice(index + 1))
};

// Or instead of chaining commands can use the spread operator again:
const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

// How do you increment a single value in an array with out mutating it:
const incrementCounter = (list, index) => {
  return list
    .slice(0, index)
    .concat([list[index] + 1])
    .concat(list.slice(index + 1))
};

// the above takes a copy up until the index you want to increment
// adds a single new item that is the original index value but plus 1
// adds a copy of the original array after the index value you want to change


// Or again with spread operator...
// spread over the first part of the original array
// add in the new item
// spread over the second part of the original array

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ... list.slice(index + 1)
  ]
}
