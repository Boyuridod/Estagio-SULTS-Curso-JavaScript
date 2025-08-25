// Immediately Invoked Function Expression
// Expressão de Função Invocada Imediatamente

// Exemplo 1 - Sem parâmetros
(
    function (){
        console.log("Olá mundo");
    }
)();

// Exemplo 1 - Com parâmetros
(
    function (x, y){
        let soma = x + y;

        console.log(soma);
    }
)(10, 20);

// Exemplo 3 - Retorno direto
let nome = (function(){
    return "Yuri";
}); // Exemplo sem chamar a função

console.log(nome);

nome = (function(){
    return "Yuri";
})(); // É preciso fazer a chamada da função com os "()" no final nomeFuncao();

console.log(nome);