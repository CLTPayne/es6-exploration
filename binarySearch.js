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

const findItem = (sortedArray, start, end, item) => {
    let middle = Math.floor((start + end) / 2);
    if (sortedArray[middle] === item) {
        return middle;
    }
    if (item < sortedArray[middle]) {
        return findItem(sortedArray, start, middle - 1, item);
    }
    if (item > sortedArray[middle]) {
        return findItem(sortedArray, middle + 1, end, item);
    }

}

const array = [1, 7, 8, 9, 11, 12, 20, 200]
console.log(findItem(array, 0, array.length, 20))