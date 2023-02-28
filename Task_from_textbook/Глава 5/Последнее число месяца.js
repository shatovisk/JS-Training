function getLastDayOfMonth(year, month){
    if (month % 2 == 0 || month == 7){
        return 31
    } else if(month == 1 && year % 4 == 0){
        return 29
    } else if (month == 1 && year % 4 != 0){
        return 28
    } else{
        return 30
    }
}

alert(getLastDayOfMonth(2012, 1))// = 29