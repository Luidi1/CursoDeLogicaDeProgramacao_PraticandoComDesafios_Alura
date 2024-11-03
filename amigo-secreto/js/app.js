let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value.toUpperCase();

    if(amigo == ''){
        alert('Informe o nome do amigo!');
        return;
    }

    if(amigos.includes(amigo)){
        alert('Nome já adicionado!');
        return;
    }

    amigos.push(amigo.toUpperCase());
    document.getElementById('nome-amigo').value = '';
    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    if(amigos.length < 4){
        alert('Aidicone pelo menos 4 amigos!');
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        }
        else{
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
}

function excluirAmigo(index){
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarLista(){
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = ''; // Limpa a lista para recriá-la

    amigos.forEach((amigo, index) => {
        // Cria um elemento <span> para cada amigo
        let span = document.createElement('span');
        span.textContent = amigo;

        // Define o cursor como pointer (mãozinha) ao passar sobre o nome
        span.style.cursor = 'pointer';

        // Adiciona um evento de clique para excluir o amigo ao clicar no nome
        span.addEventListener('click', () => excluirAmigo(index));

        // Adiciona o <span> à lista
        lista.appendChild(span);

        // Adiciona uma vírgula e espaço após cada nome, exceto o último
        if (index < amigos.length - 1) {
            let virgula = document.createTextNode(', ');
            lista.appendChild(virgula);
        }
    });
}

function atualizarSorteio(){
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}
