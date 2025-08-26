const umaPromessa = new Promise((resolve, reject) => {
    vaiResolver = false;
    if (vaiResolver) {
        resolve("Deu certo")
    }

    else {
        reject("Deu errado")
    }
})

console.log("Esperando promessa...")

umaPromessa.then((resultado) => {
    console.log("Valor do then 1: " + resultado);
}).catch((resultado) => {
    console.warn("Valor do catch 1: " + resultado);
}).finally(() => {
    console.log("Promessa 1 realizada")
})

// ============ Função de promessa ============

function minhaPromessa(vaiResolver) {
    return new Promise((resolve, reject) => {
        if (vaiResolver) {
            resolve("Deu certo");
        } else {
            reject("Deu errado");
        }
    });
}

minhaPromessa(true)
    .then((resultado) => {
        console.log("Valor do then 2: " + resultado);
    })
    .catch((resultado) => {
        console.error("Valor do catch 2: " + resultado);
    })
    .finally(() => {
        console.log("Promessa 2 realizada");
    });

minhaPromessa(false)
    .then((resultado) => {
        console.log("Valor do then 3: " + resultado);
    })
    .catch((resultado) => {
        console.error("Valor do catch 3: " + resultado);
    })
    .finally(() => {
        console.log("Promessa 3 realizada");
    });

console.log("Esta mensagem vai aparecer antes da promessa")