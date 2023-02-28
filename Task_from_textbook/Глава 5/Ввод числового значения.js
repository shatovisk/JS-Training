function readNumber(){
    let num;

    while (!isFinite(num)){
        num = +prompt("Введите число: ", "");

        if (num == null || num == ""){
            return null
        }
    }
    return num
}


alert(`Число: ${readNumber()}`);