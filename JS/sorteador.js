const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('nomeAmigo');
    const nomeAmigo = input.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    input.value = '';

    // Atualiza a lista na tela
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
    exibirAmigos();
    console.log(amigos);
}

function exibirAmigos() {
    // Obter o elemento da lista UL
    const lista = document.getElementById('listaAmigos');

    // Limpar a lista para não duplicar
    lista.innerHTML ='';

    // Percorrer o array e adicionar cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Adicione pelo menos um amigo antes para sortear');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
