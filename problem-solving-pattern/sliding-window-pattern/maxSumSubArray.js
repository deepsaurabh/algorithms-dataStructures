function maxSumSubArray(arr,num){
    let maxSum = 0;
    let currentSum = 0;

    for(let i =0;i<num;i++){
        maxSum = maxSum + arr[i];
    }
    currentSum = maxSum;

    for(let i = num;i<arr.length;i++){
        currentSum =  currentSum - arr[i-num] + arr[i];

        maxSum = Math.max(currentSum,maxSum);
        
    }

    return maxSum;

    

    
}
