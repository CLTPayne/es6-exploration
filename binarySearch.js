const findIndex = (array, item) => {
    let midPoint = Math.floor(array.length / 2);
    for (let i = 0; i <= midPoint; i++) {
        if (array[i] === item) {
            return i
        } else {
            midPoint = array.length;
        }
    }
}

// console.log(findIndex([1, 2, 3, 4, 5], 2))

const findItem = (sortedArray, item, start = 0, end = sortedArray.length) => {
    let middle = Math.floor((start + end) / 2);
    if (sortedArray[middle] === item) {
        return middle;
    }
    if (item < sortedArray[middle]) {
        return findItem(sortedArray, item, start, middle - 1);
    }
    if (item > sortedArray[middle]) {
        return findItem(sortedArray, item, middle + 1, end);
    }
}

const array = [1, 7, 8, 9, 11, 12, 20, 200]
console.log(findItem(array, 200))