// 6. Write a function that takes two arrays as arguments and returns true if the second array is a subset of the first array.

function arraySubset(source, subset) {
    if (source.length < subset.length) {
        return false;
    }

    let sourceMap = {};
    for (let i = 0; i < source.length; i++) {
        if (sourceMap[source[i]] === undefined) {
            sourceMap[source[i]] = 1;
        } else {
            sourceMap[source[i]]++;
        }
    }

    for (let i = 0; i < subset.length; i++) {
        if (sourceMap[subset[i]] === undefined || sourceMap[subset[i]] === 0) {
            return false;
        } else {
            sourceMap[subset[i]]--;
        }
    }

    return true;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false
