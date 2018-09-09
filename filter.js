// returns a new array based on the initial array and the function passed to it: 

// e.g.

let isPassing = (grade) => {
  return grade >= 100
}

let scores = [99, 80, 75, 105, 101, 120]

let passing = scores.filter(isPassing);

console.log(passing) // returns the scores over or equal to 100.

// this can be even shorter with arrow functions:

let passed = scores.filter(element => element >= 105);

console.log(passed)
