let age = prompt("Input your age: ", 0)

if ((age < 14) || (age > 90)){
    alert("Age out of range of 14 to 90")
}

if (!(14 <= age <= 90)){
    alert("Age out of range of 14 to 90")
}