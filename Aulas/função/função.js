function saudacao(nome){
    return `Olá ${nome}, tudo bem?`; // Retorna uma string
}

const variavel = saudacao('Andrigo');
console.log(variavel); // Retorna a string "Olá Andrigo, tudo bem?"
console.log(saudacao('Andrigo')); // Retorna a string "Olá Andrigo, tudo bem?"

/*
A função tem a seguinte estrutura:
function nomeDaFuncao(parametros) {
    // corpo da função
    return valor; // opcional
}

Tem um chamado de função, que é o nome da função seguido de parênteses. Dentro dos parênteses, você pode passar argumentos (valores) para a função. Os parâmetros são variáveis que recebem os valores passados para a função. O corpo da função contém o código que será executado quando a função for chamada. O comando return é usado para retornar um valor da função.
A função pode retornar um valor, que pode ser armazenado em uma variável ou usado diretamente. Se a função não retornar nada, o valor padrão retornado é undefined.
*/