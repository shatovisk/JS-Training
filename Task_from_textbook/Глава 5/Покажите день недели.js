function getWeekDay(date){
    let dayName = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]

    return dayName[date.getDay()]
}



let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"