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

function minhaPromessa(vaiResolver) {
    return new Promise((resolve, reject) => {
        if (vaiResolver) {
            resolve("Deu certo");
        } else {
            reject("Deu errado");
        }
    });
}

const segundaPromessa = minhaPromessa(true)

const terceiraPromessa = minhaPromessa(false)

Promise.all([umaPromessa, segundaPromessa, terceiraPromessa])
    .then((messages) => {
        console.log("Todas as promessas: " + messages);
    })
    .catch((messages) => {
        console.log("Alguma das promessas: " + messages);
    })

console.log("Esta mensagem vai aparecer antes da promessa")