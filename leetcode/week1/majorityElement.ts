/**
 * @link https://leetcode.com/problems/majority-element/
 */

function majorityElement(nums: number[]): number {
    const numMap = new Map<number, number>();

    for (const num of nums) {
        const count = (numMap.get(num) || 0) + 1;
        if (count > nums.length / 2) {
            return num;
        }
        numMap.set(num, count);
    }
}

function findValueInMap(numMap: Object<number, number>, key: number) {
    if (Object.keys(numMap).includes(key)) {
        return numMap[key];
    }

    return 0;
}

function majorityElement2(nums: number[]): number {
    const numMap: Record<number, number> = {};
    const limit = nums.length / 2;

    for (const num of nums) {
        let count = findValueInMap(numMap, num);
        count = count + 1;
        if (count > limit) {
            return num;
        }
        numMap[num] = count;
    }
}
