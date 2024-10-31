function capturarValores(){
    let nomeUsuario = document.getElementById('campoNome').value;
    let idadeUsuario = document.getElementById('campoIdade').value;
    let mostrarNaTela = document.getElementById('mostraNome');

    mostrarNaTela.textContent = `Nome: ${nomeUsuario}, idade: ${idadeUsuario}`;
    console.log(`Nome: ${nomeUsuario}, idade: ${idadeUsuario}`);
    
}