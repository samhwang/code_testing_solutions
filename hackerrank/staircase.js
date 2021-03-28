/**
 * Print out a staircase with a given amount of steps
 * @param {number} n 
 */
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
}