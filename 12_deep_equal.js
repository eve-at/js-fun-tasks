// 12. Write a function that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal.

function deepEqual(a, b) {
    // typeof NaN === 'number'
    if (Number.isNaN(a) && Number.isNaN(b)) return true;

    // typeof [1, 2] === 'object'
    if (typeof a !== typeof b) return false;

    // typeof null === 'object
    if (typeof a !== 'object' || a === null || b === null) return a === b;

    // objects
    if(Object.keys(a).length !== Object.keys(b).length) return false;

    for (let key in a) {
        if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
}

console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(deepEqual({ a: 1, b: 2 }, [1, 2])); // false
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(deepEqual(NaN, NaN)); // true
console.log(deepEqual(0, -0)); // true
console.log(deepEqual()); // true
