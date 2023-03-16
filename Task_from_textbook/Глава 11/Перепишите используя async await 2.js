class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url){

    try {
        let response = await fetch(url);
        if (response.status == 200){
            return response.json();
        } else{
            throw new Error(response.status);
        }
        
    } catch(err){
        alert(err)
    }
}


async function demoGitHubUser() {
    let name = prompt("Введите логин?", "iliakan");
    let user;

    try{
        user = await loadJson(`https://api.hithub.com/users/${name}`);
        alert(`Полное имя: ${user.name}`)
        return user;
    } catch(err){
        if (err instanceof HttpError && err.response.status == 404){
            alert("Такого пользователя не существует");
            while (err instanceof HttpError && err.response.status == 404){
                alert("Такого пользователя не существует");
                name = prompt("Введите логин?", "iliakan");
            }
            user = await loadJson(`https://api.hithub.com/users/${name}`);
            alert(`Полное имя: ${user.name}`)
            return user;
        }
        else{
            throw err;
        }
        }

}