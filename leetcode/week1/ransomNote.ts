/**
 * @link https://leetcode.com/problems/ransom-note/
 */

function canConstructArray(ransomNote: string, magazine: string): boolean {
    for (let i = 0; i < ransomNote.length; i++) {
        const ransomChar = ransomNote[i];
        const index = magazine.indexOf(ransomChar);
        if (index === -1) {
            return false;
        }

        magazine = magazine.replace(ransomChar, '');
    }

    return true;
}

function canConstructCharMap(ransomNote: string, magazine: string): boolean {
    if (magazine.length === 1 && ransomNote.length === 1) {
        return magazine === ransomNote;
    }

    if (magazine.length < ransomNote.length) {
        return false;
    }

    const magMap = magazine.split('').reduce((map, char) => {
        if (!map.has(char)) {
            map.set(char, 1);
            return map;
        }

        const charInMap = map.get(char);
        map.set(char, charInMap! + 1);
        return map;
    }, new Map<string, number>());

    for (const ransomChar of ransomNote.split('')) {
        if (!magMap.has(ransomChar)) {
            return false;
        }

        const numCharsLeft = magMap.get(ransomChar);
        if (magMap.get(ransomChar) === 0) {
            return false;
        }

        magMap.set(ransomChar, numCharsLeft - 1);
    }
    return true;
}
