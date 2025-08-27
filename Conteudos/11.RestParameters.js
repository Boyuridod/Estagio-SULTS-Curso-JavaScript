function soma(...lista){

    console.log(lista);

    let soma = 0;

    for (const i of lista) {
        soma += i
    }

    return soma;

}

console.log(soma(1, 3, 5, 6, 8));
console.log(soma(1, 1))

// FIXME Essa função está errada pq ta printando ao contrário
function polinomioToString(polinomio){
    let str = "";
    let i = 0;

    for(i = 0; i < polinomio.length - 1; i++){
        str += `${polinomio[i]}x^${i} + `;
    }

    str += polinomio[0];

    return str;
}

function multiplicaPolinomio(multiplicador, ...resto){
    return resto.map((num) => multiplicador * num);
}

console.log(multiplicaPolinomio(2, 1, -2, 3, 6, 2));

console.log(polinomioToString(multiplicaPolinomio(2, 1, -2, 3, 6, 2)));

console.log(polinomioToString(multiplicaPolinomio(2, 1, 2, 3)));