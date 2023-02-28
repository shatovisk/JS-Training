function filterRange(arr, a, b){
    let newArr = [];

    for (let num of arr){
        if (num >= a && num <= b){
            newArr.push(num)
        }
    }

    return newArr
}

function filterRange(arr, a, b){
    return arr.filter(item => a <= item && b >= item)
}