function Calculator(){
    this.read = function(){
        this.x = +prompt("Введите первое число: ", 0);
        this.y = +prompt("Введите второе число: ", 0);
    };

    this.sum = function(){
        return this.x + this.y
    };

    this.mul = function(){
        return this.x * this.y
    };
};

let calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );