function checkSquareNaive(arr1,arr2){
        if(arr1.length !== arr2.length) return;

    
    for(var i=0;i<arr1.length;i++){
        const currentNumber = arr1[i];
        const squared = currentNumber * currentNumber;
        const indexInSecond = arr2.indexOf(squared);
        if(indexInSecond == -1){
            return false;
        }
        arr2.splice(indexInSecond,1);
    }
    return true;


}
