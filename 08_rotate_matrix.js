// 8. Implement a function that takes a matrix and returns a matrix rotated 90 degrees to the left or right.

function rotate_matrix(arr, direction = 'left') {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            if (direction === 'left') {
                result[i][j] = arr[j][arr[i].length - i - 1];
            } else { //right
                result[i][j] = arr[arr.length - j - 1][i];
            }
        }
    }

    return result;
}

function print_result(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

console.log(print_result(rotate_matrix([[1, 2], [3, 4]], 'left'))); // -> [[2, 4], [1, 3]]
console.log(print_result(rotate_matrix([[1, 2], [3, 4]], 'right'))); // -> [[3, 1], [4, 2]]
console.log(print_result(rotate_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 'left'))); // -> [[3, 6, 9], [2, 5, 8], [1, 4, 7]]
console.log(print_result(rotate_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 'right'))); // -> [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
