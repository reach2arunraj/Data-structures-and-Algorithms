function maxSumarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (var i = 0; i < arr.length - num + 1; i++) {
    var temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSumarraySum([1, 2, 3, 4, 5, 6, 7], 3));
