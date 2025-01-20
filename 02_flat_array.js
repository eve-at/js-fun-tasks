// 2. Implement a function that takes a multidimentional array and returns a one dimentional array

function flatten(arr) {
    // return arr.reduce((acc, val) => {
    //     return acc.concat(Array.isArray(val) ? flatten(val) : val);
    // }, []);

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // -> [1, 2, 3, 4, 5]
console.log(flatten([1, 2, 3, [4, [5]]])); // -> [1, 2, 3, 4, 5]
console.log(flatten([1, 2, 3, [4, [5, 6]]])); // -> [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, [4, [[5, 6], [7], 8]]])); // -> [1, 2, 3, 4, 5, 6, 7, 8]
