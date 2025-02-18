// 9. Implement a function that takes a sorted array and a target element and returns the index of the target element in the array. If the target element is not present in the array, return -1.

function search(arr, target) {
    let left = 0
    let right = arr.length - 1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) return mid

        if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // -> 4
console.log(search(['abc', 'bgh', 'bht', 'ghr', 'abc', 'bgh', 'bgh'], 'bgh')); // -> 1
console.log(search(Array.from(Array(100).keys()).map(e => e * 5), 375)); // -> 75
