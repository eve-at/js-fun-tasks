// 4. Find the most frequant element of the array

function highestFrequency(arr) {
    const stack = {};

    for (let i = 0; i < arr.length; i++) {
        if (stack[arr[i]] === undefined) {
            stack[arr[i]] = 1;
        } else {
            stack[arr[i]]++;
        }
    }

    let max = 0;
    let maxChar = null;
    for (let key in stack) {
        if (stack[key] > max) {
            max = stack[key];
            maxChar = key;
        }
    }

    return maxChar;
}

console.log(highestFrequency([1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9])); // -> 5
console.log(highestFrequency(['abc', 'bgh', 'bht', 'ghr', 'abc', 'bgh', 'bgh'])); // -> 'bgh'
console.log(highestFrequency(['abc', 'bgh', 'bht', 'ghr', 'abc', 'bgh', 'bgn', 'abc'])); // -> 'abc'
