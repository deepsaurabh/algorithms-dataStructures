// Countdown using recursion
function countDown(n){
    if(n <=0){
        console.log('Done');
        return;
    }
    console.log(n);
    
    n--;
    countDown(n);
}


// Countdown iterative

function countDown(n){
    for(var i=n; i>0;i--){
        console.log(i);
    }
    console.log("Done")

}
