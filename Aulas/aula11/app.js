let num1 = prompt('Digite um numero: ');
let num2 = prompt('Digite outro numero: ');

num1 = Number(num1);
num2 = Number(num2);

if(typeof num1 && typeof num2 === "number"){
    console.log('Deu certo')
}else{
    console.log('Deu errado')
}
