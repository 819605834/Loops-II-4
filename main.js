// Write your code below
var num = 5;

function findCumulativeSum(num){
    let sum = 0;
    if (num != 0) {
        for (let i = 1;i<=num;i++){
            sum += i;
        }
    }
    return sum;
}

console.log(findCumulativeSum(num));