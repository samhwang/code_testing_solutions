/**
 * @link https://leetcode.com/problems/two-sum/
 */
function twoSum(nums: number[], target: number): number[] {
    if (nums.length === 2) {
        return [0, 1];
    }

    let start = 0;
    let end = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const remainder = target - num;
        const findFrom = remainder === num ? i + 1 : i;
        const findIndex = nums.indexOf(target - num, findFrom);
        if (findIndex > 0) {
            start = i;
            end = findIndex;
            break;
        }
    }

    return [start, end];
}
