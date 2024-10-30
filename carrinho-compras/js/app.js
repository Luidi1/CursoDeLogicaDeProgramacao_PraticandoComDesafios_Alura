let totalGeral;
let carrinho = [];
limpar();

function adicionar(){
    if(verificarCamposPreenchidos()){
        //recuperar valores nome do produto, quantidade e valor
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split('-')[0];
        let valorUnitario = parseFloat(produto.split('R$')[1]);
        let quantidade = parseInt(document.getElementById('quantidade').value);

        //Calcular o preço, o nosso subtotal
        let preco = quantidade * valorUnitario;

        //Verifica se o produto já está no carrinho
        let produtoExistente = retornarProduto(nomeProduto);

        if(produtoExistente){
            // Atualiza a quantidade e o preço do produto
            produtoExistente.quantidade += quantidade
            produtoExistente.preco += preco;
        }
        else{
            // Adiciona o novo produto ao carrinho
            carrinho.push({
                nome: nomeProduto,
                quantidade: quantidade,
                preco: preco
            });
        }

        //atualizar o valor total
        totalGeral += preco;
        atualizarCarrinho();
        atualizarCampoTotal();
        document.getElementById('quantidade').value = '';
    }
    else{
        alert('Campo(s) "Produto" e/ou "Qtde." não preenchidos!')
    }
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    carrinho = [];
}

function verificarCamposPreenchidos(){
    let campoProduto = document.getElementById('produto').value;
    let campoQuantidade = document.getElementById('quantidade').value;

    if(campoProduto && campoQuantidade){
        return true;
    }
    return false;

}

function retornarProduto(nomeProduto){
    return carrinho.find(item => item.nome === nomeProduto);
}

function atualizarCarrinho(){
    let carrinhoElemento = document.getElementById('lista-produtos');
    carrinhoElemento.innerHTML = '';

    carrinho.forEach(item => {
        carrinhoElemento.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">R$${item.preco}</span>
        </section>`;
    });
}

function atualizarCampoTotal(){
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
}