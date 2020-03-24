function sumZero(arr) {
    for (let i=0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
    return false
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))




function SumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left]+arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
    return false
}
console.log(SumZero([-2, -1, 0, 1, 2]))
