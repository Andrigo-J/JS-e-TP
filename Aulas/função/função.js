function saudacao(nome){
    return `Olá ${nome}, tudo bem?`; // Retorna uma string
}

const variavel = saudacao('Andrigo');
console.log(variavel); // undefined, pois a função não retorna nada
