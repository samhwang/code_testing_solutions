/**
 * Print out the ratios of elements > 0, < 0 and == 0
 * @param {number[]} arr
 */
function plusMinus(arr) {
    function getFloatRatio(num) {
        const result = parseFloat(num) / parseFloat(arr.length);
        return parseFloat(result).toPrecision(6);
    }

    const { negatives, positives, zeroes } = arr.reduce(
        (accumulator, currentNumber) => {
            if (currentNumber < 0) {
                accumulator.negatives++;
            } else if (currentNumber > 0) {
                accumulator.positives++;
            } else {
                accumulator.zeroes++;
            }
            return accumulator;
        },
        { negatives: 0, positives: 0, zeroes: 0 }
    );

    const posRatio = getFloatRatio(positives);
    console.log(posRatio);
    const negRatio = getFloatRatio(negatives);
    console.log(negRatio);
    const zeroRatio = getFloatRatio(zeroes);
    console.log(zeroRatio);
}
