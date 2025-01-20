// 1. Verify if the string contains unique characters

function isUnique(str) {
    return new Set(str).size === str.length
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abacdef')); // -> false
