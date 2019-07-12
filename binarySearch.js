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

console.log(findIndex([1, 2, 3, 4, 5], 2))