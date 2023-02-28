function getMaxSubSum(arr){
    let sum = 0;
    let maxSum = 0;

    for (let val of arr){
        sum += val;
        maxSum = maxSum < sum ? sum: maxSum;
        if (sum + val < 0 ){
            sum = 0;
        } 
    }

    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9]))