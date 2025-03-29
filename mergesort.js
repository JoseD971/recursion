const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    let result = [];
    while (left.length && right.length) {
      result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return result.concat(left, right);
}

console.log(mergeSort([5, 8, 47, 8, 68, 34, 77, 1, 109, -4, 5.1]));