// 3. Implement a function that takes an array and returns an array without duplicates

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9])); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9])); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
