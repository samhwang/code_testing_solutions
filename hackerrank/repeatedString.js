function repeatedString(s, n) {
    let result = 0;

    // We will need this later.
    const remainderString = s.substring(0, n % s.length).split('');

    // Finding how many of the first char is in original string
    s = s.split('');
    const originalCount = s.filter((character) => character === 'a').length;

    // Now multiply that by number of complete repeat of original string
    const multiplier = parseInt(n / s.length);
    result += originalCount * multiplier;

    // For the remainder
    const remainderCount = remainderString.filter((character) => character === 'a').length;
    result += remainderCount;
    
    return result;
}