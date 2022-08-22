/**
 * @link https://leetcode.com/problems/valid-parentheses/
 */
const bracketMap = {
    '}': '{',
    ']': '[',
    ')': '(',
};

function isClose(bracket: string) {
    return Object.keys(bracketMap).includes(bracket);
}

function isValid(s: string): boolean {
    if (s.length % 2 === 1) {
        return false;
    }

    const stack = [s.charAt(0)];
    for (let i = 1; i < s.length; i++) {
        const bracket = s.charAt(i);
        const lastBracketInStack = stack[stack.length - 1];
        const isAMatch = bracketMap[bracket] === lastBracketInStack;
        if (isClose(bracket) && isAMatch) {
            stack.pop();
            continue;
        }

        stack.push(bracket);
    }

    return stack.length === 0;
}
