function sumZero(arr) {
    let start = 0;
    let end = arr.length -1;

    while(start < end){
    var sum = arr[start] + arr[end];
    if(sum == 0){
        return [arr[start],arr[end]];
    }else if(sum > 0){
        end--;
    }else{
        start++;
    }

    }
}
