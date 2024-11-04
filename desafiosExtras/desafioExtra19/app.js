// Função que verifica se um elemento está presente no array
function verificarElementoNoArray(arr, elemento) {
    return arr.includes(elemento);
}

// Exemplo de uso
const meuArray = [10, 20, 30, 40, 50];
const elementoProcurado = 30;

// Utilizando a função para verificar a presença do elemento no array
const elementoEstaPresente = verificarElementoNoArray(meuArray, elementoProcurado);

// Exibindo o resultado
if (elementoEstaPresente) {
    console.log(`O elemento ${elementoProcurado} está presente no array.`);
} else {
    console.log(`O elemento ${elementoProcurado} não está presente no array.`);
}