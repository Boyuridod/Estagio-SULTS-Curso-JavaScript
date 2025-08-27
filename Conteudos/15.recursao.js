function exponenciacaoRapida(x, y){

    if(y == 0)
        return 1;
    if(y == 1)
        return x;
    if(y % 2 == 0){
        let aux = exponenciacaoRapida(x, y/2);
        return aux * aux;
    }
    else{
        let aux = exponenciacaoRapida(x, Math.floor(y/2));
        return aux * aux * x;
    }

}

console.log(exponenciacaoRapida(2, 2));
console.log(exponenciacaoRapida(2, 3));
console.log(exponenciacaoRapida(2, 5));
console.log(exponenciacaoRapida(8, 3));
console.log(exponenciacaoRapida(4, 4));
console.log(exponenciacaoRapida(4, 5));