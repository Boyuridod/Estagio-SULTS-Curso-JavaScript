function exibir(resultado){
    console.log(`O resultado é ${resultado}`);
}

function multiplicacao(x, y, callback){
    let resultado = x * y;

    callback(resultado);
}

multiplicacao(2, 16, exibir)

