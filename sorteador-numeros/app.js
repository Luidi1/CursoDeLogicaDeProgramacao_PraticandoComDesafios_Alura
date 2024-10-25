function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if(de > ate){
        alert('Não é possível o campo "Do número" ser superior ao campo "Até o número".');
        return;
    }

    // Verifica se é possível sortear a quantidade desejada de números distintos
    if(quantidade > (ate - de + 1)){
        alert(`Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" 
            até o campo "Até o número". Verifique!`);
        return;
    }

    if(de == 0 && ate == 0){
        alert('Não é possível sortear de zero até zero.');
        return;
    }

    if(quantidade < 0 || de < 0 || ate < 0){
        alert('Não é permitido número neagtivo.')
        return;
    }

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
   
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
    desabilitarCampos();
    desabilitarBotaoSortear();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.disabled = false;
    }
    else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado'); 
        botao.disabled = true;
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
    habilitarCampos();
}

function habilitarBotaoSortear(){
    let botaoSortear = document.getElementById('btn-sortear');
    botaoSortear.classList.remove('container__botao-desabilitado');
    botaoSortear.classList.add('container__botao');
    botaoSortear.disabled = false; //Habilitar o clique no botão.
}

function desabilitarBotaoSortear(){
    let botaoSortear = document.getElementById('btn-sortear');
    botaoSortear.classList.remove('container__botao');
    botaoSortear.classList.add('container__botao-desabilitado');
    botaoSortear.disabled = true; //Desabilitar o clique no botão.
}

function verificarCamposPreenchidos() {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;
    
    let botaoSortear = document.getElementById('btn-sortear');

    // Verifica se todos os campos estão preenchidos
    if(quantidade && de && ate){
        habilitarBotaoSortear();
    } else {
        desabilitarBotaoSortear();
    }
}

function desabilitarCampos() {
    document.getElementById('quantidade').disabled = true;
    document.getElementById('de').disabled = true;
    document.getElementById('ate').disabled = true;
}

function habilitarCampos() {
    document.getElementById('quantidade').disabled = false;
    document.getElementById('de').disabled = false;
    document.getElementById('ate').disabled = false;
}

