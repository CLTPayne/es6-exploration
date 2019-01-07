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
