// Callback
function exibir(resultado){
    console.log(`O resultado é ${resultado}`);
}

function multiplicacao(x, y, callback){
    let resultado = x * y;

    callback(resultado);
}

multiplicacao(2, 16, exibir)

// // Async / Await
// function query(){
//     return new Promise((resolve, reject) => {
//         try {
//             setTimeout(()=>{resolve("Dados");}, 5000);
//         } catch (error) {
//             reject(error);
//         }
//     })
// }

// async function buscaDados() {
//     try {
//         const dados = await query();
//         console.log(dados);
//     } catch (error) {
//         console.error(error);
//     }
// }

// buscaDados();

// Throw

function funcao1(){
    try{
        vaiDarErroAqui;
    }
    catch(error){
        throw("Erro função 1: " + error);
    }
}

function funcao2(){
    try{
        funcao1();
    }
    catch(error){
        console.log(error);
    }
}

funcao2()

// Arguments

function argumentsOcultos(){
    return arguments
}

console.log(argumentsOcultos(100, 6, 5, 8, "Papoula", "Indianápoles"));
console.log(argumentsOcultos("Fritura"));
console.log(argumentsOcultos(1, "Vermelho", 2, "Amarelo", 3, "Preto"));

// RestParameters

function pegaResto(x, ...y){
    console.log("Parte principal: " + x);
    console.log("Resto: " + y);
}

pegaResto(1, 2, 3, 4, 5);
pegaResto(2, 3);
pegaResto(2, 3, 7, 8);