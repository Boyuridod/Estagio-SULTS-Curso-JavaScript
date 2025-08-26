// async → transforma uma função em assíncrona (retorna Promise).
// await → pausa a execução da função até a Promise ser resolvida.
// Isso substitui a necessidade de usar .then() e .catch(), deixando o código mais limpo.

// Exemplo GPT

// // 🔸 Usando Promise + .then()
function buscarDados() {
  return new Promise(resolve => {
    setTimeout(() => resolve("📦 Dados recebidos usando then"), 2000);
  });
}

buscarDados()
  .then(res => {
    console.log(res);
    return "✅ Processado usando then";
  })
  .then(console.log)
  .catch(console.error);
  
// // 🔸 Usando async/await

function buscarDadosAsyncAwait() {
  return new Promise(resolve => {
    setTimeout(() => resolve("📦 Dados recebidos usando async e await"), 2000);
  });
}

async function executar() {
  try {
    const dados = await buscarDadosAsyncAwait();
    console.log(dados);

    const resultado = "✅ Processado usando async e await";
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
}

executar();