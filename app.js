let listaParticipantes = [];

function adicionarNome() {
    const inputNome = document.getElementById("nome");
    const nome = inputNome.value.trim(); 

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    listaParticipantes.push(nome);
    atualizarLista();
    inputNome.value = ""; 
}

function atualizarLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = ""; 

    listaParticipantes.forEach((nome, index) => {
        const item = document.createElement("li");
        item.textContent = nome;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.onclick = () => removerNome(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function removerNome(index) {
    listaParticipantes.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaParticipantes.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaParticipantes.length);
    const nomeSorteado = listaParticipantes[indiceSorteado];

    document.getElementById("resultado").textContent = ` O amigo sorteado é: ${nomeSorteado} `;
}
