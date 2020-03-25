function numcomp (num1, num2) {
    return num1 - num2;
}
[6,2,15,7,20,19].sort(numcomp) // [ 2, 6, 7, 15, 19, 20 ]

function numcomp (num1, num2) {
    return num2 - num1;
}
[6,2,15,7,20,19].sort(numcomp) // [ 20, 19, 15, 7, 6, 2 ]
