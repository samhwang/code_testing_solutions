/**
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
function maxProfit(prices: number[]): number {
    const max = Math.max(...prices);

    let profit = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        min = Math.min(currentPrice, min);
        profit = Math.max(currentPrice - min, profit);
    }

    return profit;
}
