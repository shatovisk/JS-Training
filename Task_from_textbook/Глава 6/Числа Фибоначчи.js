function fib(n) {
    if (n == 1 || n == 2){
        return 1
    }

    return fib(n-2) + fib(n-1)
}

console.log(fib(77))