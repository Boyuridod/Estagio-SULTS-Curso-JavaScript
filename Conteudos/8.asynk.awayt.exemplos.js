function query(){
    return new Promise((resolve, reject) => {
        try {
            setTimeout(()=>{resolve("Dados");}, 5000);
        } catch (error) {
            reject(error);
        }
    })
}

async function buscaDados() {
    try {
        const dados = await query();
        console.log(dados);
    } catch (error) {
        console.error(error);
    }
}

buscaDados();

