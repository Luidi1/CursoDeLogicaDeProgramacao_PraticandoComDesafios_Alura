// Declarando uma variável do tipo array
let minhaLista = [];

// Adicionando elementos com push
minhaLista.push(1, 2, 3);
console.log("Adicionando elementos:", minhaLista);

// Criando uma nova variável
let outrosNumeros = [1, 2, 3];

// Concatenando arrays
let novaLista = minhaLista.concat(outrosNumeros);
console.log("Juntando Arrays:", novaLista);

novaLista.pop();

console.log("Após remover último elemento", novaLista);


function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  
// Embaralhando novaLista
novaLista = embaralharArray(novaLista);
console.log("Embaralhando a Lista:", novaLista);


// Função para remover duplicatas de um array
function removerDuplicatas(array) {
    return [...new Set(array)];
}
  
// Testando a função com novaLista
let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log("Remover duplicatas:", novaListaSemDuplicatas);