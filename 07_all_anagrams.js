// 7. Verify if all the elements of the array are anagrams

function all_anagrams(arr) {
    const sortedArr = arr.map(el => Array.from(el).sort().join(''));

    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[0]) {
            return false;
        }
    }

    return true;
}

console.log(all_anagrams(['abc', 'bca', 'cab', 'bac', 'acb', 'cba'])); // -> true
console.log(all_anagrams(['abc', 'bca', 'cab', 'bac', 'acb', 'cbz'])); // -> false
console.log(all_anagrams(['abc', 'bca', 'cab', 'bac', 'acb', 'cb'])); // -> false
