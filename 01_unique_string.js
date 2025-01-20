// 1. Implement a function that takes a string as an argument and returns true if all the characters in the string are unique, otherwise, it returns false.
function isUnique(str) {
    return new Set(str).size === str.length
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abacdef')); // -> false
