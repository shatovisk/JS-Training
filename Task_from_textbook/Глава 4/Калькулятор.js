let calculator = {
    read() {
        this.x = prompt("Введите число: ", 0);
        this.y = prompt("Введите втрое число: ", 0)
    },

    sum(){
        return +this.x + +this.y
    },

    mul(){
        return this.x * this.y
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );