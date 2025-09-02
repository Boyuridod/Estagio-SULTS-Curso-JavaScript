const estadosBrasileiros = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"
];

for (const estado of estadosBrasileiros) {
    console.log(estado + " é um estado brasileiro")
}

const nome = "Yuri Duarte"

for(let caractere of nome){
    console.log(caractere.toUpperCase())
}

/*
Ótima pergunta! 🚀
Em **JavaScript**, existem várias formas de iterar sobre arrays, objetos e coleções. As três que você citou (`forEach`, `for...of` e `for...in`) têm diferenças importantes:

---

## 🔹 1. `forEach`

👉 Método de **arrays**.

* Só funciona em **arrays** (ou objetos semelhantes a arrays).
* Sempre percorre **cada elemento** do array.
* Recebe uma função callback com até 3 parâmetros:
  `(elemento, índice, arrayCompleto)`.
* **Não pode usar `break` ou `continue`**.

```js
const numeros = [10, 20, 30];

numeros.forEach((valor, indice) => {
  console.log(indice, valor);
});
// Saída:
// 0 10
// 1 20
// 2 30
```

---

## 🔹 2. `for...of`

👉 Usado para **iterar valores de iteráveis** (arrays, strings, Map, Set, etc).

* Itera diretamente os **valores**.
* Mais legível quando você só quer os **elementos**.

```js
const numeros = [10, 20, 30];

for (const valor of numeros) {
  console.log(valor);
}
// Saída: 10 20 30
```

Também funciona em **strings**:

```js
for (const letra of "JS") {
  console.log(letra);
}
// Saída: J S
```

---

## 🔹 3. `for...in`

👉 Usado para **iterar as chaves/índices** de um objeto ou array.

* Em arrays → retorna **índices**.
* Em objetos → retorna **chaves** (nomes das propriedades).

```js
const numeros = [10, 20, 30];

for (const i in numeros) {
  console.log(i, numeros[i]);
}
// Saída:
// 0 10
// 1 20
// 2 30
```

Em objetos:

```js
const pessoa = { nome: "Yuri", idade: 22 };

for (const chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
// Saída:
// nome Yuri
// idade 22
```

---

## ✅ Resumindo:

| Estrutura  | Itera sobre         | Usado em                             |
| ---------- | ------------------- | ------------------------------------ |
| `forEach`  | Valores (callback)  | Apenas **arrays**                    |
| `for...of` | Valores diretamente | Arrays, Strings, Map, Set, Iteráveis |
| `for...in` | Chaves/índices      | Objetos e Arrays                     |

---

⚡ Exemplo final comparando os 3:

```js
const frutas = ["🍎", "🍌", "🍇"];

// forEach
frutas.forEach((f, i) => console.log("forEach:", i, f));

// for...of
for (const f of frutas) console.log("for...of:", f);

// for...in
for (const i in frutas) console.log("for...in:", i, frutas[i]);
```

---

Quer que eu te faça uma **analogia com emojis** pra fixar bem na mente a diferença entre os três? 🧠🎨

*/