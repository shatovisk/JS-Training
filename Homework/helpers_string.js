export function firstUpNextLow(str){
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.slice(1);
    return str
}

export function delExtraSpace(str){

    str = str.replace(/ +/g, ' ');
    str = str.replace(/(\p{Po})/gu, "$1 ");
    str = str.replace(/ +(\p{Po})/gu, "$1");
    str = str.replace(/ +/g, ' ');


    return str;
}


export function countOfWords(str){
    str = delExtraSpace(str);
    let arr = str.split(" ");
    
    return arr.length
}


export function countOfUniqWords(str){
    let newStr = str.replace(/(\p{Po})/gu, "")
    let arr = newStr.toLowerCase().split(" ");
    let arrCheck = [];
    let count = 0;
    let answer = "";


    for (let i of arr){
        
                
        if (!arrCheck.includes(i)){
            for (let y of arr){
                if(i == y){
                    ++count;
                }
            } 
        }else {
            continue;
        }

        if ((count < 10 || count > 19) && (count % 10 < 2 || count % 10 > 4)){  
            answer += `${i} - ${count} раз, `
        } else{
            answer += `${i} - ${count} раза, `
        }

        arrCheck.push(i);
        count = 0;

    }
    
    answer = answer.slice(0, answer.length - 2);
    return answer;
}
