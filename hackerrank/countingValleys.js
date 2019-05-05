function countingValleys(n, s) {
    let level = 0;
    let valleys = 0;
    let isInValley = false;
    s = (typeof s === "string") ? s.split('') : s;
    for (let i = 0; i < n; i++) {
        if (s[i] === 'U') {
            level = level + 1;
        } else if (s[i] === 'D') {
            level = level - 1;
        }
        if (level < 0 && isInValley === false) {
            isInValley = true;
        }
        if (level == 0 && isInValley === true) {
            valleys++;
            isInValley = false;
        }
    }
    return valleys;
}
