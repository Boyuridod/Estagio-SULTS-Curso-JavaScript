// RestParameters

function escrevePolinomio(...polinomio){
    let indice = length(polinomio), escrito = "";
    for(const i of polinomio){
        if(i != 0){
            if(i != 1){
                escrito += ``
            }
        }

        indice--;
    }
}

console.log(escrevePolinomio(1, 2, 6, 8, 4));
console.log(escrevePolinomio(2, 5));
console.log(escrevePolinomio(1, 2, 0, 3));