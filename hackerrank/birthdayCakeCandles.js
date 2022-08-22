/**
 * Count the number of the tallest candles on a birthday cake
 * @param {number[]} candles
 * @returns {number}
 */
function birthdayCakeCandles(candles) {
    const numCandles = candles.length;
    const sortedCandles = candles.sort((prev, next) => prev - next);
    return sortedCandles.filter(
        (candle) => candle === sortedCandles[numCandles - 1]
    ).length;
}
