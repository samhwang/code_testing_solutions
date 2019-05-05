// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jump = 0;
    let i = 0;
    const max_value = c.length - 1;
    while (i < max_value) {
        if ((i + 2) <= max_value && c[i + 2] === 0) {
            i = i + 2;
        } else if ((i + 1) <= max_value && c[i + 1] === 0) {
            i = i + 1;
        }
        jump++;
    }
    return jump;
}
