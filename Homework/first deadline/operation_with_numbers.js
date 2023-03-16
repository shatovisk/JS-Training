export function plus (num1, num2){
    let res = "";
    let temporarySum;
    let flag = 0;
    
    if (num1 < num2){
        let c;
        c = num1;
        num1 = num2;
        num2 = c;
    }

    num1 += '';
    num2 += '';
    console.log(num1, num2)

    for (let i = 0; i < num1.length - num2.length; i++){
        num2 = "0" + num2;
    }

    for (let i = num1.length - 1; i >= 0; i--){
        temporarySum = Number(num1[i]) + Number(num2[i]) + (+flag);
        console.log(num1[i], num2[i])

        if (temporarySum > 9){
            flag = 1;
            temporarySum = +temporarySum % 10;
            res = temporarySum + res
        } else{
            res = temporarySum + res;
            flag = 0;
        }

    }

    if (flag == 1){
        res = '1' + res;
    }

    return(res)
}





export function minus(minuend, subtrahend){
    let flip = false;
    let res = [];
    let answerToReturn;

    if (minuend < subtrahend){
        let c;
        c = minuend;
        minuend = subtrahend;
        subtrahend = c;
        flip = true;
    }
    
    minuend += '';
    subtrahend += '';

    for (let i = 0; i < minuend.length - subtrahend.length; i++){
        subtrahend = "0" + subtrahend;
    }

    for(let i = minuend.length - 1; i >= 0; i--){
        res[i] = Number(minuend[i]) - Number(subtrahend[i]);
    }

    for(let i = res.length - 1; i > 0; i-- ){
        if(res[i] < 0){
            res[i] += 10;
            res[i-1] -= 1; 
        }
    }

    while (res[0] === 0){
        res.shift();
    }

    answerToReturn = res.join('')

    if (flip){
        answerToReturn = '-' + answerToReturn;
    }

    return answerToReturn
}



export function multiplication(num1, num2){
    num1 += '';
    num2 += '';

    let mul1 = num1.split('').reverse();
    let mul2 = num2.split('').reverse();
    let temporaryMul;
    let temporaryRes;
    let move;
    
    let res = [];

    for (let i = 0; i < mul1.length; i++){
        for (let j = 0; j < mul2.length; j++){
            temporaryMul = mul1[i] * mul2[j];
            res[i + j] = res[i + j] ? res[i + j] + temporaryMul : temporaryMul;
        }
    }

    for (let i = 0; i < res.length; i++){
        temporaryRes = res[i] % 10;
        move = Math.floor(res[i] / 10);
        res[i] = temporaryRes;

        if (res[i + 1]){
            res[i + 1] += move;
        } else if (move != 0){
            res[i + 1] = move;
        }
    }


    return res.reverse().join('');
}



export function division(dividend, divider){
    let res = [];


    if (dividend < divider) {
        return 0
    }

    
    dividend += '';
    divider += '';
    

    let len = divider.length;

    while (true){


        if ( +(dividend.substr(0, len)) >= (+divider) ){
            res.push(Math.floor( +(dividend.substr(0, len)) / (+divider) ));
            dividend = ( +(dividend.substr(0, len)) - (res[res.length - 1] * (+divider)) ) + dividend.substr(len, dividend.length - 1);
        } else if (dividend.substr(0, len + 1).length > len){
            res.push(Math.floor( +(dividend.substr(0, len + 1)) / (+divider) ));
            dividend = ( +(dividend.substr(0, len + 1)) - (res[res.length - 1] * (+divider)) ) + dividend.substr(len + 1, dividend.length - 1);
        } else{
            break;
        }

    }

    return res.join('')
}

