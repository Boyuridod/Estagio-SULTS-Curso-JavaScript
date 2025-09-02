function soma(num1){
    return (num2) => {
        if(!num2){
            return num1;
        }
        else{
            return soma(num1 + num2);
        }
    }
}

console.log(soma(1)(1)(2)(3)())

/*
Boa, Yuri! 👌 Esse código é bem interessante porque mistura **função de ordem superior**, **closures** e um padrão chamado **currying**. Bora destrinchar:

---

### 📌 O que o código faz

```js
function soma(num1) {
  return (num2) => {
    if (!num2) {
      return num1;
    } else {
      return soma(num1 + num2);
    }
  }
}

console.log(soma(1)(1)(2)(3)())
```

---

### 1️⃣ A função `soma` retorna outra função

* Quando você chama `soma(1)`, ela não devolve um número, mas sim outra função que espera um argumento (`num2`).
* Isso permite o **encadeamento**: `soma(1)(1)(2)(3)`.

---

### 2️⃣ Uso do `if (!num2)`

* Quando você chama a função **sem argumento** → `()`
* O `if (!num2)` detecta isso e retorna o **resultado acumulado (`num1`)**.
* Esse é o “ponto de parada” do encadeamento.

---

### 3️⃣ Recursão + Acúmulo

* Se você **passa um número** (`num2`), ele chama novamente `soma(num1 + num2)`.
* Assim, vai acumulando o valor:

🔎 Passo a passo:

1. `soma(1)` → retorna função esperando `num2`
2. `soma(1)(1)` → chama `soma(1 + 1)` → acumula = `2`
3. `soma(2)(2)` → chama `soma(2 + 2)` → acumula = `4`
4. `soma(4)(3)` → chama `soma(4 + 3)` → acumula = `7`
5. `soma(7)()` → como `num2` é vazio, retorna `7`.

---

### ✅ Resultado final

```
7
```

---

### 🎯 Em resumo

Esse padrão é uma forma de implementar **soma infinita encadeada**, onde você vai adicionando valores em chamadas sucessivas até parar com `()`.

👉 É um exemplo prático de:

* **Currying** → transformar uma função que recebe múltiplos parâmetros em várias funções que recebem um só.
* **Closure** → a função interna lembra do valor de `num1` mesmo depois da execução da função externa.
* **Recursão** → cada chamada cria uma nova função `soma` com o valor acumulado atualizado.

---

Quer que eu faça uma **versão mais simples** (sem recursão) para você ver o contraste, ou prefere que eu mostre como usar isso para outros operadores (tipo `multiplicar`)?

*/