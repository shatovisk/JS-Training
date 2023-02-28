let n = prompt("Input end of range: ", 0);
let count = 0;

for (let i = 2; i <= n; i++){
    for (let y = 2; y <= i; y++){
        if (i % y == 0){
            ++count;
        }
    }
    if (count == 1){
        alert(i)
    }
    count = 0;
}