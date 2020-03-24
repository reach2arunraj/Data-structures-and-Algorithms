function countDown(num) {
    if(num<=0){
        console.log("All Done !")
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(10)




function countDown(num) {
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All is Done..!")
}
countDown(10)




function countDown(num) {
    if(num<=0){
        console.log("All is Done..!");
        return;
    }
    console.log(num)
    num--;
    countDown(num);
}
countDown(10)
