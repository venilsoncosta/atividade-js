const usuarios = [

];

const listaUsuariosElemento = document.querySelector('#listaUsuarios');

for (let usuario of usuarios) {
    inserirUsuarioNaLista(usuario);
}

function inserirUsuario() {
    const inputNomeElemento = document.querySelector('#nome');
    const inputIdadeElemento = document.querySelector('#idade');
    const inputCpfElemento = document.querySelector('#cpf');

    const usuario = {
        nome: inputNomeElemento.value,
        idade: inputIdadeElemento.value,
        cpf: inputCpfElemento.value
    };

    inserirUsuarioNaLista(usuario);

    inputNomeElemento.value = '';
    inputIdadeElemento.value = '';
    inputCpfElemento.value = '';
}

function inserirUsuarioNaLista(usuario) {
    const liElemento = document.createElement('li');

    const spanNomeElemento = document.createElement('span');
    spanNomeElemento.textContent = `Nome: ${usuario.nome}`;

    const spanIdadeElemento = document.createElement('span');
    spanIdadeElemento.textContent = `Idade: ${usuario.idade}`;

    const spanCpfElemento = document.createElement('span');
    spanCpfElemento.textContent = `CPF: ${usuario.cpf}`;

    const botaoRemoverElemento = document.createElement('button');
    botaoRemoverElemento.textContent = 'X';
    botaoRemoverElemento.addEventListener('click', () => {
        liElemento.remove();
    });

    liElemento.appendChild(spanNomeElemento);
    liElemento.appendChild(document.createElement('br'));
    liElemento.appendChild(spanIdadeElemento);
    liElemento.appendChild(document.createElement('br'));
    liElemento.appendChild(spanCpfElemento);
    liElemento.appendChild(document.createElement('br'));
    liElemento.appendChild(botaoRemoverElemento);

    listaUsuariosElemento.appendChild(liElemento);
}
