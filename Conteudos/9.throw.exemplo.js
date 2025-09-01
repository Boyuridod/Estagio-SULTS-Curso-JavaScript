function funcao1(){
    try{
        vaiDarErroAqui;
    }
    catch(error){
        throw("Erro função 1: " + error);
    }
}

function funcao2(){
    try{
        funcao1();
    }
    catch(error){
        console.log(error);
    }
}

funcao2()