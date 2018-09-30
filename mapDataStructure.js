let favouriteColours =  new Map();

favouriteColours.set('Charlotte', 'black')
                .set('Jenny', 'red')
                .set('James', 'pink')
                .set('Jon', 'green');

console.log(favouriteColours.get('Charlotte')); // returns black
console.log(favouriteColours.has('James')); // returns true
console.log(favouriteColours.has('Mads')); // returns false

console.log(favouriteColours.values()) // returns a map iterator
