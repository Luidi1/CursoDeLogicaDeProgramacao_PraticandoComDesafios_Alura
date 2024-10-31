function adicao(num1, num2){
    return num1 + num2;
}

function subtracao(num1, num2){
    return num1 - num2;
}

function multiplicacao(num1, num2){
    return num1 * num2;
}

function divisao(num1, num2){
    if(num2 !== 0){
        return num1 / num2;
    }
    return "Erro: divisão por zero.";
}

function calculadora(opercao, num1, num2){
    switch(opercao){
        case 'soma':
            return adicao(num1, num2);
        case 'subtracao':
            return subtracao(num1, num2);
        case 'multiplicacao':
            return multiplicacao(num1, num2);
        case 'divisao':
            return divisao(num1, num2);
        default:
            return "Operação inválida.";
    }
}

let resultado = calculadora('soma', 5, 3);
console.log(resultado);