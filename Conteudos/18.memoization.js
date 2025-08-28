const memoria = {}

function fibonacci(n, memoria){
    if(memoria[n]){
        return memoria[n];
    }

    else if(n == 0){
        memoria[n] = 0;
    }

    else if(n == 1){
        memoria[n] = 1
    }

    else{
        memoria[n] = fibonacci((n - 1), memoria) + fibonacci((n - 2), memoria);
    }

    return memoria[n];
}

for(let i = 0; i < 10; i++){
    console.log(fibonacci(i, memoria));
}

console.log(fibonacci(100, memoria));
console.log(fibonacci(50, memoria));

console.log(memoria)