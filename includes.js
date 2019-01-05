// String method:

const stringFinder = (string) => {
  return 'So happy that I started coding'.includes(string);
};

console.log(stringFinder('happy')); // true

// Array method:

languages = [
  'Ruby',
  'Clojure',
  'Erlang',
  'Java',
  'Python',
  'C++',
  'JavaScript'
]

const arrayElementFinder = (string) => {
  return languages.includes(string)
}

console.log(arrayElementFinder('English')) // false
