let result_fun = function somar() {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    let resultado = num1 + num2;
    document.querySelector('.resultado').innerHTML += `A soma de ${num1} e ${num2} é igual a ${resultado}`
}

console.log(result_fun);
/*
let area_js = document.querySelector(".resultado");

let result_fun = function somar() {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    let resultado = num1 + num2;
    return resultado;
}

area_js.innerHTML += (`A soma de ${num1} e ${num2} é igual a ${resultado}<br>`)

console.log(result_fun) 
*/


/*
function somar() {
            // Pega os valores e converte para número
            let n1 = Number(document.querySelector("#num1").value);
            let n2 = Number(document.querySelector("#num2").value);

            // Faz a soma
            let resultado = n1 + n2;

            // Mostra o resultado
            document.querySelector(".resultado").innerHTML = 
                `A soma de ${n1} e ${n2} é igual a ${resultado}`;
        }
*/