function somaTresNumeros(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log(somaTresNumeros(1, 4, 5)) //10

function argumentsOcultos(){
    console.log("Argumento numero 1: " + arguments[0]);
    return arguments
}

console.log(argumentsOcultos(100, 6, 5, 8, "Papoula", "Indianápoles"));

function somaNumeros(){
    const numeros = Array.from(arguments);
    let soma = 0, i = 0;

    for(i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }

    return soma;
}

console.log(somaNumeros(1, 1))
console.log(somaNumeros(1, 2, 2, 5))
console.log(somaNumeros(1, 2, 2, 5, 9, 2, 65))