const memoria = {}

function fibonacci(n, memoria){
    if(memoria[n]){
        return memoria[n];
    }
    if(n == 0){
        memoria[n] = 0;
        return memoria[n]
    }
    if(n == 1){
        memoria[n] = 1
        return memoria[n];
    }
    memoria[n] = fibonacci((n - 1), memoria) + fibonacci((n - 2), memoria);
    return memoria[n];
}

for(let i = 0; i < 10; i++){
    console.log(fibonacci(i, memoria));
}

console.log(memoria)