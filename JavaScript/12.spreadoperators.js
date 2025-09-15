lista1 = [1, 3, 5, 7, 9];
lista2 = [2, 4, 6, 8, 10];

listaTotal = [...lista1, ...lista2]; // Ele espalha "spread" os numeros na total

console.log(listaTotal);

const objeto = {a: 1, b:"a"};

let objetoCopia = ""

objetoCopia = objeto;

console.log(objeto, objetoCopia, objeto === objetoCopia)

objetoCopia = {...objeto}; // Diferente de const objetoCopia = objeto

console.log(objeto, objetoCopia, objeto === objetoCopia)