document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que o formulário recarregue a página

    let nome = document.getElementById('nome').value;
    let area_js = document.getElementsByClassName('area-js')[0];

    function saudacao(nome) {
        return 'Olá, ' + nome + '! Seja bem-vindo!';
    }

    function exibirMensagem() {
        return 'Agora vamos estilizar tudo isso, selecione a cor a ser exibida!';
    }

    area_js.innerHTML = '<h2>Saudação</h2>';
    area_js.innerHTML += `<p>${saudacao(nome)}</p>`;
    area_js.innerHTML += `<p>${exibirMensagem()}</p>`;
    area_js.innerHTML += `
        <label for="cor">Selecione a cor:</label>
        <select id="cor">
            <option value="">Selecione uma Opção</option>
            <option value="red">Vermelho</option>
            <option value="green">Verde</option>
            <option value="blue">Azul</option>
            <option value="yellow">Amarelo</option>
        </select>
    `;

    // Evento para mudar a cor quando o select mudar
    document.getElementById('cor').addEventListener('change', function () {
        let corSelecionada = this.value;
        area_js.style.backgroundColor = corSelecionada;
    });
});
