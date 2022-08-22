/**
 * @link https://leetcode.com/problems/valid-palindrome/
 */
function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

    let isPalindrome = true;
    let limit = Math.floor(s.length / 2);
    for (let i = 0; i < limit; i++) {
        const before = s[i];
        const after = s[s.length - 1 - i];
        isPalindrome = before === after;
        if (!isPalindrome) {
            return false;
        }
    }

    return isPalindrome;
}
