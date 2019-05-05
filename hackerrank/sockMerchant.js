function sockMerchant(n, ar) {
    var count = 0;
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
