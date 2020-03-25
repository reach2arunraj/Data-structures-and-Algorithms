function numcomp (num1, num2) {
    return num1 - num2;
}
[6,2,15,7,20,19].sort(numcomp) // [ 2, 6, 7, 15, 19, 20 ]

function numcomp (num1, num2) {
    return num2 - num1;
}
[6,2,15,7,20,19].sort(numcomp) // [ 20, 19, 15, 7, 6, 2 ]


function compareByLen(str1, str2) {
    return str2.length - str1.length;
}
["colt", "steele", "Data structure", "Algorithm"].sort(compareByLen) // [ "Data structure", "Algorithm", "steele", "colt" ]
