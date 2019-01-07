function returnIterator(arr) {
  let i = 0;
  function returnElement() {
    let element = arr[i];
    i++;
    return element;
  }
	return returnElement;
}

const array = ['a', 'b', 'c', 'd'];
const iterator = returnIterator(array);

console.log(myIterator()); // 'a'
console.log(myIterator()); // 'b'
console.log(myIterator()); // 'c'
console.log(myIterator()); // 'd'


function nextIterator(arr) {
  let i = 0;
  const returnElement = {
    next: function() {
      let element = arr[i];
    	i++;
    	return element;
    }
  }
	return returnElement;
}

const array2 = [1, 2, 3];
const iteratorWithNext = nextIterator(array2);

console.log(iteratorWithNext.next()); // 1
console.log(iteratorWithNext.next()); // 2
console.log(iteratorWithNext.next()); // 3
