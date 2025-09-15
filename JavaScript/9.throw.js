function funcao1(){

    console.log("Função 1");

    try {
        variavelInexistente;
    }
    
    catch (error) {
        console.error(error);
    }

}

function funcao2(){

    console.log("Função 2 errada com throw");

    try {
        variavelInexistente;
    }
    
    catch (error) {
        console.error(error);
        throw error;
    }

}

function funcao3(){

    console.log("Função 3 errada sem try");

    naoExiste = 10;

}

function funcao4(){

    console.log("Função 4");

    const variavel = false;

    try {
        if(!variavel){
            throw new Error("Não quero que a variável seja " + variavel);
        }
    }
    
    catch (error) {
        console.error(error);
    }

}

function main(){

    console.log("Try Catch normal");

    funcao1();

    console.log("\n\n\nNível de Try Catch não lançando o erro pra cima");

    try {
        funcao1();
        funcao3();
    } catch (error) {
        console.error(error)
    }

    console.log("\n\n\nNível de Try Catch lançando o erro pra cima");

    try {
        funcao2();
        funcao3();
    } catch (error) {
        console.error(error)
    }

    console.log("\n\n\nCriando um erro");

    funcao4();

}

main()