// String method:

const stringFinder = (string) => {
  return 'Merry Christmas and a Happy New Year'.includes(string);
};

console.log(stringFinder('Happy')); // true

// Array method:

reindeer = [
  'Dasher',
  'Dancer',
  'Prancer',
  'Vixen',
  'Comet',
  'Cupid',
  'Donner',
  'Blitzen'
]

const arrayElementFinder = (string) => {
  return reindeer.includes(string)
}

console.log(arrayElementFinder('Rudolph')) // false
