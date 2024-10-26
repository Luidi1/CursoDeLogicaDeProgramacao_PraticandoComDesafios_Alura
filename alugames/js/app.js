let quantidadeJogosAlugados = 0;

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            quantidadeJogosAlugados--;
        }
        
    }
    else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        quantidadeJogosAlugados++;
    }
    imprimirQuantidadeJogosAlugados();
}

function imprimirQuantidadeJogosAlugados(){
    console.log(`Total de jogos alugados: ${quantidadeJogosAlugados}.`);
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function(){
    quantidadeJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    imprimirQuantidadeJogosAlugados();
})