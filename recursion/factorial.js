// Factorial of a number
function factorial(num){
    let total = 1;
    for(let i=num;i>0;i--){
        total *= i;
    }
    return total;
}
