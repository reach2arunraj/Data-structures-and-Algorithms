function isAlphanumeric(str) {
    var code;
    var len = str.length
    for (var i=0; i<len; i++){
        code = str.charCodeAt(i);
        if(!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123))
        return false;
    }
    return true;
}
console.log(isAlphanumeric('Java007'))
