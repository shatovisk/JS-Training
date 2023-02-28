function Calculator(){
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };

    this.calculate = function(str){
        arr = str.split(' '),
        num1 = +arr[0],
        sign = arr[1],
        num2 = +arr[2]

        return this.methods[sign](num1, num2);
    }

    this.addMethod = function(name, func){
        this.methods[name] = func
    }
}