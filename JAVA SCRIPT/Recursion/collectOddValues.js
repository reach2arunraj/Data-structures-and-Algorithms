//Helper method Recursion

function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6]));




// Pure Recursion Method

function collectOddValues(arr) {
    let newarr = [];

    if (arr.length === 0 ){
        return newarr;
    }
    if(arr[0] % 2 !== 0){
        newarr.push(arr[0]);
    }
    newarr = newarr.concat(collectOddValues(arr.slice(1)));
    return newarr;
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))
