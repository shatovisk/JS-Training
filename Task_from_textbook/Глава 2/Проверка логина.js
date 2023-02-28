let login = prompt("Input your login: ", '');
let password;


if (login == "Админ"){
    password = prompt("Input your password: ", '');

    if (password == "Я главный"){
        alert("Здравствуйте")
    } else if(password != "" || password != null){
        alert("Неверный пароль")
    }else{
        alert("Отменено")
    }
} else if(login != "" || login != null){
    alert("Я вас не знаю")
} else{
    alert("Отменено")
}