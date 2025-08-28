const Animal = {
    reino: "Animal",
    nome: "*Animal desconhecido*",
    catalogo: function(){
        return `O ${this.nome} é um ${this.reino}`;
    }
}

console.log(Animal.catalogo());

const Gato = {
    nome: "Gato"
}

Object.setPrototypeOf(Gato, Animal);

console.log(Gato.catalogo())

