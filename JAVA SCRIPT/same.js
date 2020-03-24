function same(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0; i< arr1.length; i++){
        let correctindex = arr2.indexOf(arr1[i]**2)
        if(correctindex === -1){
            return false;
        }
        console.log(arr2);
        arr2.splice(correctindex,1)
    }
    return true;
}
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))




function same(arr1, arr2) {
    if(arr1.length !==arr2.length){
        return false;
    }

    let frequencycounter1 = {}
    let frequencycounter2 = {}
    for(let val of arr1){
        // key (A) = value (number || 0) + 1
        frequencycounter1[val] = (frequencycounter1[val] || 0) + 1 
    }
    for(let val of arr2){
        frequencycounter2[val] = (frequencycounter2[val] || 0) + 1
    }
    for (let key in frequencycounter1){
        if(!(key**2 in frequencycounter2)){
            return false
        }
        if (frequencycounter2[key ** 2] !== frequencycounter1[key]){
            return false
        }
    }
    return true
}
console.log(same([1,3,4,6], [36, 1, 16, 9]))
