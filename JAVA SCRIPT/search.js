function search (arr, val) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            return i;
        }
    }
    return -1;
}
console.log(search([1,2,3,4,56,7,8,8], 8))
