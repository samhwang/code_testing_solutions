/**
 * Return the diagonal difference of a matrix
 * @param {number[]} numArray 
 * @returns {number}
 */
function diagonalDifference(numArray) {
    const maxLength = numArray[0].length;
    const difference = numArray.reduce(
        (total, row, index) => total + (row[index] - row[maxLength - 1 - index]),
        0
    )
    
    return Math.abs(difference);
}