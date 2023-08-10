module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    for (i = 0; i < matrix.length; i++) {
        if (i % 2) {
            matrix[i].reverse();
        }
    }
    return matrix.flat();
};

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// // result [ 1, 2, 3, 6, 5, 4, 7, 8, 9 ]
// console.log(module.exports());
