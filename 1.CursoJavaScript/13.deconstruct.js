let lista = [4, 44, 444]

let [a, b, c] = lista

console.log(a);
console.log(b);
console.log(c);

lista = [4, 44, 444]

let d

[a, ...d] = lista;

console.log(a);
console.log(d);