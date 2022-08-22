/**
 * @link https://leetcode.com/problems/longest-palindrome/
 */

function longestPalindrome(s: string): number {
    if (s.length === 1) {
        return 1;
    }

    const charMap = s.split('').reduce((map, char) => {
        const charCount = map.get(char) || 0;
        map.set(char, charCount + 1);

        return map;
    }, new Map<string, number>());

    let evens = 0;
    charMap.forEach((value) => {
        evens += 2 * Math.floor(value / 2);
    });

    return evens < s.length ? evens + 1 : evens;
}
