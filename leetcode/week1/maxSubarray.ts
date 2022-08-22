/**
 * @link https://leetcode.com/problems/maximum-subarray/
 */
function maxSubArray(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    let largest = nums[0];
    let currentMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        largest = Math.max(largest, currentMax);
    }

    return largest;
}
