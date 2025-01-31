// 15. Write a JavaScript function to group the elements of an array based on the given function `func` and returns the count of elements in each group. The `func` function should be a string or a function. If it is a string, it should be the name of the function as a property of the window object or the name of Array method. If it is a function, it should be a function in the global scope.

function groupby(arr, func) {

    let f = () => { }, isArrMethod = false;
    if (typeof func === 'function') {
        f = func;
    } else if (typeof func === 'string') {
        // is `func` an Array method or not
        isArrMethod = !! Array[func];

        // if it is not Array's function it must be `window` (browser)/`global`(Node.js) function
        if (!isArrMethod) {
            let source = typeof window === 'object' ? window : global;
            if (source === undefined) {
                return null;
            }

            const parts = func.split('.');

            f = source;
            for (let i = 0; i < parts.length; i++) {
                if (typeof f[parts[i]] === undefined) {
                    return null;
                }
                f = f[parts[i]];
            }
            if (typeof f !== 'function') {
                return null;
            }
        }
    } else {
        return null;
    }

    const stack = {};
    arr.forEach(element => {
        const key = isArrMethod ? Array.from(element)[func] : f(element);
        if (stack[key] === undefined) {
            stack[key] = [];
        }
        stack[key].push(element);
    });

    return stack;
}

console.log(groupby([6.1, 4.2, 6.3], Math.floor)) // { '4': [4.2], '6': [6.1, 6.2]}
console.log(groupby([6.1, 4.2, 6.3], 'Math.floor')) // { '4': [4.2], '6': [6.1, 6.2]}
console.log(groupby([6.1, 4.2, 6.3], 'Math.ceil')) // { '5': [4.2], '7': [6.1, 6.2]}
console.log(groupby(['one', 'two', 'three'], 'length')) // { '3': ['one', 'two'], '5': ['three']}
console.log(groupby([[1, 2, 3], [5, 6], [8, 9]], 'length')) // { '2': [[ 5, 6 ], [8, 9]], '3': [[ 1, 2, 3 ]] }
