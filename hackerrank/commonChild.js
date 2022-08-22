/**
 * Find the longest common child string from 2 strings.
 * This is assuming both of them have the same length.
 * @link https://www.hackerrank.com/challenges/common-child/
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
function commonChild(s1, s2) {
    const fullLength = s1.length;
    if (fullLength === 0) {
        return 0;
    }

    // Initialize the map
    let charMap = [];
    for (let a = 0; a <= fullLength; a++) {
        charMap.push(new Array(fullLength + 1));
    }

    // Fill out with values
    for (let i = 0; i <= fullLength; i++) {
        for (let j = 0; j <= fullLength; j++) {
            // Start of each row/column
            if (i === 0 || j === 0) {
                charMap[i][j] = 0;
                continue;
            }

            // If a character match, increase current count by 1.
            if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
                charMap[i][j] = charMap[i - 1][j - 1] + 1;
                continue;
            }

            // Otherwise, take the max value of the last row and column
            charMap[i][j] = Math.max(charMap[i - 1][j], charMap[i][j - 1]);
        }
    }

    // The last value of the last row and last column will be the answer.
    return charMap[fullLength][fullLength];
}
