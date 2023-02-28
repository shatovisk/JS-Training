function sumInput(){
    let arrNum = [];
    let val;
    let sum = 0;

    while(true){
        val = prompt("Введите число: ", "");

        if (val == null || val == "" || !isFinite(val)){
            break
        }

        arrNum.push(+val);
        sum += +val;
    }

    return sum;
}

alert(sumInput());