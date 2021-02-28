/**
 * Return an array of unique, sorted and positive numbers
 * @param {number[]} numArray
 * @returns {number[]}
 */
function getPositiveNumbers(numArray) {
    return [...new Set(numArray)]
        .filter((num) => num > 0)
        .sort((prev, next) => prev - next);
}

/**
 * Find the missing positive integer in an array
 * @param {number[]} numArray 
 * @returns {number}
 */
function solution(numArray) {
    const sorted = getPositiveNumbers(numArray);
    const length = sorted.length;

    // If the original array was only negative, return 1.
    const noPositive = length === 0;
    if (noPositive) {
        return 1;
    }

    // Determine if the number at index i - 1 matches the value of i itself. (Basically A[0] === 1)
    // If it isn't, it's the missing value
    let i = 0;
    let condition = true;
    while (condition) {
        i++;
        condition = sorted[i - 1] === i;
    }
    return i;
}