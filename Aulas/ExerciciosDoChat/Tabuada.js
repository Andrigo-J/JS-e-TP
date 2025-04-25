let tab_num = 7;
function tabuada(tab_num) {
    let resultado;
    for (let i = 1; i <= 10; i++) {
        resultado = `${tab_num} x ${i} = ${tab_num * i}`;
        console.log(resultado);
    }
}

console.log(`Tabuada do ${tab_num}:`);
tabuada(tab_num); // Chama a função tabuada com o número desejado