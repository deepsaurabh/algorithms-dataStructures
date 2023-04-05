// Sum of all digits les than number 
function sumRange(num){
    if(num === 1){
        return 1;
    }

    return num + sumRange(num -1);
    
}
