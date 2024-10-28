let totalGeral;
limpar();

function adicionar(){
    if(verificarCamposPreenchidos()){
        //recuperar valores nome do produto, quantidade e valor
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split('-')[0];
        let valorUnitario = produto.split('R$')[1];
        let quantidade = document.getElementById('quantidade').value;

        //calcular o preço, o nosso subtotal
        let preco = quantidade * valorUnitario;

        //adicionar o produto no carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}X</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

        //atualizar o valor total
        totalGeral += preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = '';
    }
    else{
        alert('Campo(s) "Produto" e/ou "Qtde." não preenchidos!')
    }
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
}

function verificarCamposPreenchidos(){
    let campoProduto = document.getElementById('produto').value;
    let campoQuantidade = document.getElementById('quantidade').value;

    if(campoProduto && campoQuantidade){
        return true;
    }
    return false;

}