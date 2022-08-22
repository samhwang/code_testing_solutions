/**
 * @link https://leetcode.com/problems/add-binary/
 */

function addBinary(a: string, b: string): string {
    const bigIntA = BigInt('0b' + a);
    const bigIntB = BigInt('0b' + b);
    return (bigIntA + bigIntB).toString(2);
}

function addBinary2(a: string, b: string): string {}
