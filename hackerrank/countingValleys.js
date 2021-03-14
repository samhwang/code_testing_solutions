/**
 * Count Valleys function.
 * @link https://www.hackerrank.com/challenges/counting-valleys/problem
 * @param {number} steps
 * @param {string} paths
 * @returns {number}
 */
function countingValleys(steps, path) {
    let level = 0;
    let valleys = 0;
    let isInValley = false;
    const paths = path.split('');

    for (let i = 0; i < steps; i++) {
        if (paths[i] === 'U') {
            level = level + 1;
        } else if (paths[i] === 'D') {
            level = level - 1;
        }

        if (level < 0 && isInValley === false) {
            isInValley = true;
            continue;
        }

        if (level === 0 && isInValley === true) {
            valleys++;
            isInValley = false;
            continue;
        }
    }

    return valleys;
}
