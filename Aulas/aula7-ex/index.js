/*
Luiz Otavio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é 25.92...

*/

const nome = "Andrigo Junior"
const sobrenome = "Prates"
const idade = "19"
const peso = "70"
const altura = "1.74"
const anoAtual = 2025
let imc; // peso / (altura * altura)
let anoNasc;

imc = peso / (altura*altura);
anoNasc = anoAtual - idade

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, ' + 'pesa ' + peso + 'kg')
console.log(`tem ${altura}  de altura e seu IMC é ${imc}`)
console.log('Seu ano de nascimento é de ' + anoNasc)
