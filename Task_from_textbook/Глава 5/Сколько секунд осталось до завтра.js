function getSecondsToTomorrow(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return  (24 * 3600) - ((hours * 60 * 60) + (minutes * 60) + seconds)
}