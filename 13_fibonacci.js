// 13. Write a function that returns the sum of a sequence of Fibonacci numbers. The sequence is defined by the following rule: The first two values in the sequence must be 0 and 1. Any subsequent number must be the sum of the two values that immediately precede it. The sequence begins as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on.

// using closure to cache the result
const fibonacci = (function(n) {
    const arr = [1, 1];

    return function (n) {
        console.log('\nF(', n, '): ');
        if (n < arr.length) {
            console.log('from cache');
            return arr.slice(0, n);
        }

        while (arr.length < n) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            console.log('adding ', arr[arr.length - 1]);
        }

        console.log('from calculation');
        return arr;
    }
}());

// with `while`
// function fibonacci(num) {
//     const arr = [1, 1];
//     if (num < 2) {
//         return arr.slice(0, num);
//     }

//     while (arr.length < num) {
//         arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     }

//     return arr;
// }

// with `for`
// function fibonacci(num) {
//     const arr = [1, 1];
//     if (num < 2) {
//         return arr.slice(0, num);
//     }

//     `for`
//     let prev = 1, curr = 1;
//     let arr = [prev, curr];
//     for (let i = 1; i < num - 1; i++) {
//         next = prev + curr;
//         prev = curr;
//         curr = next;
//         arr.push(next);
//     }

//     return arr;
// }

console.log(fibonacci(0)); // [1]
console.log(fibonacci(1)); // [1]
console.log(fibonacci(2)); // [1, 1]
console.log(fibonacci(3)); // [1, 1, 2]
console.log(fibonacci(10)); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(fibonacci(7)); // [1, 1, 2, 3, 5, 8, 13] -> from cache
