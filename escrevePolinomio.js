// RestParameters

function modulo(x){
    if(x < 0){
        return x * -1;
    }

    return x;
}

function escrevePolinomio(...polinomio){
    let indice = polinomio.length - 1, escrito = "";
    for(const i of polinomio){
        if(i > 0){
            escrito += " +";
        }
        else if(i < 0){
            escrito += " -";
        }

        if(i != 0){
            if(indice == 0){
                escrito += `${modulo(i)}`;
            }

            else if(indice == 1){
                escrito += `${modulo(i)}x`;
            }

            else{
                if(modulo(i) != 1){
                    escrito += `${modulo(i)}x^${indice}`;
                }
                else{
                    escrito += `x^${indice}`;
                }
            }
        }

        indice--;
    }

    return escrito;
}

console.log(escrevePolinomio(1, 2, 6, 8, 4));
console.log(escrevePolinomio(2, 5));
console.log(escrevePolinomio(1, 2, 0, 3));
console.log(escrevePolinomio(1, -2, 0, -3));
console.log(escrevePolinomio(-2, 5));
console.log(escrevePolinomio(-1, -2, 5));