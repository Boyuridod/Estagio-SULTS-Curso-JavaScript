// Declaração de função
function olaMundo(){
    
    console.log("Olá Mundo!!!");
    
}

olaMundo();

// Expressão de função
const falaMundo = function(){
    
    console.log("Fala Mundo!!!");
    
}

falaMundo();

// Arrow function

// // Somente um comando
const umaLinha = () => console.log("Função de uma linha");

umaLinha();

// // Mais de um comando

const soma = (x, y) => {
    
    let soma = x + y;
    
    console.log(soma)
    
}

soma(2, 5);
soma(10, 10);