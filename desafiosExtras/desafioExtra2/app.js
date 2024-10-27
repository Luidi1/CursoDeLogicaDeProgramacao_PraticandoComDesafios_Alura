function ordenarNumerosOrdemCrescente(num1, num2, num3){
    const numerosOrdenados = [num1, num2, num3].sort((x,y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

//Exemplo de uso
ordenarNumerosOrdemCrescente(3, 1, 5);