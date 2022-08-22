/**
 * @link https://leetcode.com/problems/first-bad-version/
 */

function bruteForce(isBadVersion: (version: number) => boolean) {
    return function (n: number): number {
        for (let i = n; i >= 0; i--) {
            if (!isBadVersion(i)) {
                return i + 1;
            }
        }
    };
}

function binarySearch(isBadVersion: (version: number) => boolean) {
    function getMiddle(min: number, max: number) {
        return Math.round((min + max) / 2);
    }

    return function (n: number): number {
        if (isBadVersion(1)) {
            return 1;
        }

        let max = n;
        let min = 1;
        let badVersion = -1;

        while (min <= max) {
            const mid = getMiddle(min, max);
            const isBad = isBadVersion(mid);
            if (!isBad) {
                min = mid + 1;
                continue;
            }

            badVersion = mid;
            max = mid - 1;
        }

        return badVersion;
    };
}
