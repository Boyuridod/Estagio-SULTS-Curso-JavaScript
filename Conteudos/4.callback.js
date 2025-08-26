// function saudacao(nome) {
//     alert("Olá " + nome);
// }

// function recebeNome(callback){
//     const nome = prompt("Qual seu nome? ");    
//     callback(nome)
// }

// recebeNome(saudacao)

const readline = require('readline');

function saudacao(nome) {
    console.log("Olá " + nome);
}

function recebeNome(callback){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Qual seu nome? ", (nome) => {
        callback(nome);
        rl.close();
    });
}

recebeNome(saudacao);