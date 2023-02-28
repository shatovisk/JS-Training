function formatDate(date){
    let currentDate = new Date();

    if (currentDate - date <= 1000 && currentDate.getDay() == date.getDay() && currentDate.getMonth() == date.getMonth() && currentDate.getFullYear() == date.getFullYear()){
        return "прямо сейчас"
    } else if (currentDate.getSeconds() - date.getSeconds() < 60 && currentDate.getSeconds() - date.getSeconds() > 1 && currentDate.getDay() == date.getDay() && currentDate.getMonth() == date.getMonth() && currentDate.getFullYear() == date.getFullYear()){
        return`${currentDate.getSeconds() - date.getSeconds()} сек. назад`
    } else if (currentDate.getMinutes() - date.getMinutes() < 60 && currentDate.getMinutes() - date.getMinutes() > 1 && currentDate.getDay() == date.getDay() && currentDate.getMonth() == date.getMonth() && currentDate.getFullYear() == date.getFullYear()){
        return `${currentDate.getMinutes() - date.getMinutes()} мин. назад`
    } else{
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`
    }
}


alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );