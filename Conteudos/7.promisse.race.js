const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('Promessa 1 resolvida'), 500);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve('Promessa 2 resolvida'), 255);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve('Promessa 3 resolvida'), 100);
});

// Vai retornar qual promessa ganhou a corrida

Promise.race([promise1, promise2, promise3]).then((resultado) => {
    console.log(resultado);
});