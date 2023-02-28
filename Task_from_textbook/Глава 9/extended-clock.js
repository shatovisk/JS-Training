class ExtendedClock extends Clock{
    constructor (option){
        super(option);
        let {precision = 1000} = option;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}