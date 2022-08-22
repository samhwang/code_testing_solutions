/**
 * Return the min and max possible of a sum of 4 numbers in a num array
 * @param {number[]} arr
 */
function miniMaxSum(arr) {
    const sortedArray = arr.sort();
    function getSumOfElements(start, end = undefined) {
        return sortedArray
            .slice(start, end)
            .reduce((total, num) => total + num, 0);
    }
    const minSum = getSumOfElements(0, 4);

    const maxSum = getSumOfElements(1);
    console.log(`${minSum} ${maxSum}`);
}
