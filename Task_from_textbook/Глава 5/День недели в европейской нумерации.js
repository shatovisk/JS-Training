function getLocalDay(date){
    if (date.getDay() != 0){
        return date.getDay()
    } else return 7;
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2