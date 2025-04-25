let num = 20; // Número a ser verificado

let resultado = function result(num) {
    if (num % 2 === 0) {
        return `${num} é par`;
    } else {
        return `${num} é ímpar`;
    }
}

console.log(resultado(num)); // Chama a função e imprime o resultado    