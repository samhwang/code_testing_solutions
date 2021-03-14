/**
 * Output the min number of jumps needed to go from first to the last index.
 * @link https://www.hackerrank.com/challenges/jumping-on-the-clouds
 * @param {number[]} clouds 
 * @returns {number}
 */
function jumpingOnClouds(clouds) {
    let jump = 0;
    let currentIndex = 0;
    const maxIndex = clouds.length - 1;

    const isMaxIndex = (index) => index <= maxIndex;
    const isSafe = (index) => clouds[index] === 0;

    while (currentIndex < maxIndex) {
        if (isMaxIndex(currentIndex + 2) && isSafe(currentIndex + 2)) {
            currentIndex += 2;
            jump++;
            continue;
        }

        if (isMaxIndex(currentIndex + 1) && isSafe(currentIndex + 1)) {
            currentIndex += 1;
            jump++;
            continue;
        }
    }

    return jump;
}
