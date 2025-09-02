const Carro = {
    marca: "Ferrari",
    ano: 2010,
    buzina: () => {return "Buzina"}
}

console.log("Tenho uma " + Carro.marca + " " + Carro.ano)
console.log(Carro.buzina())

console.log("Tenho uma " + Carro["marca"] + " " + Carro["ano"])
console.log(Carro["buzina"]())

Carro.modelo = "La Ferrari"

console.log("Tenho uma " + Carro.marca + " " + Carro.modelo + " do ano de " + Carro.ano)
console.log(Carro.buzina())

// ============================================

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentacao(){
        return `Olá, sou ${this.nome}, tenho ${this.idade} anos`
    }
}

class Dev extends Pessoa{
    constructor(nome, idade, linguagem){
        super(nome, idade);
        this.linguagem = linguagem
    }

    apresentacao(){
        return super.apresentacao() + `. Sou desenvolvedor ${this.linguagem}.`;
    }
}

const pessoa = new Pessoa("Abmael", 25)
const dev = new Dev("Yuri", 23, "Fullstack")

console.log(pessoa.apresentacao() + ".")
console.log(dev.apresentacao())