/**
 * @link https://leetcode.com/problems/valid-anagram/submissions/
 */
function createCharMap(a: string): Record<string, number> {
    return a.split('').reduce((charMap, char) => {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1;
            return charMap;
        }

        charMap[char] = 1;
        return charMap;
    }, {} as Record<string, number>);
}

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const charmapS = createCharMap(s);
    const charmapT = createCharMap(t);

    return Object.entries(charmapS).every(
        ([keyS, valueS]) => charmapT[keyS] === valueS
    );
}
