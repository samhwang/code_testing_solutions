/**
 * Solution for Sock merchant, find the number of matched pairs.
 * @link https://www.hackerrank.com/challenges/sock-merchant/problem
 * @param {number} n number of socks in the pile 
 * @param {number[]} ar color of each sock 
 * @returns {number}
 */
function sockMerchant(n, ar) {
    let count = 0;
    const duplicate = [];
    
    ar.forEach((element) => {
        // Check if there is a duplicate
        const check = duplicate.indexOf(element);
        if (check === -1) {
            duplicate.push(element);
        } else {
            return;
        }

        // find if there are duplicates
        const dupes = ar.filter((dupe) => dupe === element).length;
        if (dupes > 1) {
            if (dupes % 2 === 0) {
                count += dupes / 2;
            } else if (dupes % 2 === 1) {
                count += (dupes / 2 - 0.5);
            }
        } else {
            return;
        }
    });
    
    return count;
}
