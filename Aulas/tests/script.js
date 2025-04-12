function meuEscopo(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const limpar = document.querySelector('.limpar');

    const pessoas = [];

    function receberEventoForm(evento){
        evento.preventDefault(); // previne o comportamento padrão do form, que é recarregar a página

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        const pessoa = {
            nome,
            sobrenome,
            peso,
            altura
        };

        pessoas.push(pessoa); // adiciona a pessoa ao array de pessoas
        console.log(pessoas); // imprime o array de pessoas no console

        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`; // adiciona a pessoa ao resultado na tela

    }

    function limparTela(evento){
        evento.preventDefault(); // previne o comportamento padrão do form, que é recarregar a página
        resultado.innerHTML = ''; // limpa o resultado na tela
        pessoas.length = 0; // limpa o array de pessoas
        console.log(pessoas); // imprime o array de pessoas no console
    
    }

    form.addEventListener('submit', receberEventoForm); // adiciona o evento de submit ao form
    form.addEventListener('reset', limparTela); // adiciona o evento de reset ao form
}

meuEscopo();