let user = {
    name: "Василий Иванович",
    age: 35
};

let json = JSON.stringify(user);

alert(json);

let user2 = JSON.parse(json)

alert(user2)