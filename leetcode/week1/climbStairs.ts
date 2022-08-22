/**
 * @link https://leetcode.com/problems/climbing-stairs/
 */

function climbStairsRecursion(n: number): number {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);
}

function climbStairsLoop(n: number): number {
    if (n === 1) {
        return 1;
    }

    let previous = 1;
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = result + previous;
        previous = result - previous;
    }

    return result;
}
