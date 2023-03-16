function printNumbers1(from, to){
    let timerId = setInterval(function(){
        console.log(from);

        if (from == to){
            clearInterval(timerId)
        }
        from++;
    }, 1000)
}

// printNumbers1(3, 7)


function printNumbers2(from, to){
    setTimeout(function go(){
        console.log(from);

        if (from < to){
            setTimeout(go, 1000);
        }
        from++;
        
    }, 1000)
}

printNumbers2(3, 7)