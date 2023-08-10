function towelSort(arr) {
    for (i = 0; i < arr.length; i++) {
        if (i % 2) {
            arr[i].reverse();
        }
    }
    return arr.flat();
}

module.exports = function towelSort(matrix) {
    return [];
};

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// // result [ 1, 2, 3, 6, 5, 4, 7, 8, 9 ]
// console.log(towelSort(matrix));
