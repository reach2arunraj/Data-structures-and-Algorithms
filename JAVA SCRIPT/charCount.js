function charCount(str) {
    var result = {};
    for(var i=0; i<str.length; i++){
        var char = str[i]
        if (result[char] > 0){
            result[char]++;
        }
        else{
            result[char] = 1;
        };
    }
    return result
}
console.log(charCount('ARUN raj !'))




function charCount(str) {
    var obj = {};
    for(var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if (obj[char] > 0){
                obj[char]++;
            }else{
                obj[char] = 1;
            }
        }
    }
    return obj
}
console.log(charCount("JAVA script check 007"))
