function solution(A) {
    let i = 0;
    let noDupes = [];
    let condition = true;
    A = A.filter((num) => num > 0).sort((prev, next) => prev - next);
    for (i = 0; i < A.length; i++) {
        if (A[i] !== A[i+1]) {
            noDupes.push(A[i]);
        }    
    }
    A = noDupes;
    
    if (A.length === 0) {
        return 1;
    }
    
    if (A[A.length - 1] === A.length) {
        return A.length + 1;
    }
    
    i = 0;
    while (condition) {
        i++;
        condition = A[i-1] === i;
    }
    return i;
}