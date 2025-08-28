class Livro{
    constructor(nome = "Não informado", paginas = "Não informado", editora = "Não informado", autor = "Não informado"){
        this.nome = nome;
        this.paginas = paginas;
        this.editora = editora;
        this.autor = autor
    }

    get getNome(){
        return this.nome;
    }

    get getPaginas(){
        return this.paginas;
    }

    get getEditora(){
        return this.editora;
    }

    get getAutor(){
        return this.autor;
    }

    set setNome(nome){
        this.nome = nome;
    }

    set setPaginas(paginas){
        this.paginas = paginas;
    }

    set setEditora(editora){
        this.editora = editora;
    }

    set setAutor(autor){
        this.autor = autor;
    }

    toString(){
        return `Livro: ${this.nome} escrito por ${this.autor}`;
    }
}

let livro1 = new Livro("Garra", 300, "RJ", "Angela Duckworth");
let livro2 = new Livro(undefined, 106, "Classe A", "Yuri")

console.log(livro1, livro2);
livro2.setNome = "TNTASM";
console.log(livro2.getNome);

console.log(livro1.toString())

// Adicionar propriedade

Object.defineProperty(livro1, "tipoCapa", {
    get(){
        return ("Capa " + this.capa);
    },

    set(x){
        this.capa = x;
    }
});

livro1.tipoCapa = "Mole";
console.log(livro1);
console.log(livro1.tipoCapa);