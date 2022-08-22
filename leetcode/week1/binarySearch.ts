/**
 * @link https://leetcode.com/problems/binary-search/
 */
function getMiddleIndex(min: number, max: number) {
    return Math.round((max + min) / 2);
}

function search(nums: number[], target: number): number {
    if (nums.length === 1) {
        if (nums[0] === target) {
            return 0;
        }
        return -1;
    }

    let minIndex = 0;
    let maxIndex = nums.length - 1;

    while (minIndex <= maxIndex) {
        const midIndex = getMiddleIndex(minIndex, maxIndex);
        const midValue = nums[midIndex];
        if (midValue === target) {
            return midIndex;
        }

        if (midValue < target) {
            minIndex = midIndex + 1;
            continue;
        }

        maxIndex = midIndex - 1;
    }

    return -1;
}
