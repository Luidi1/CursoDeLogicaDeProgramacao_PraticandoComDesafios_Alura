function verificaParOuImpar(num1){
    if(num1 % 2 == 0){
        return "Par";
    }
    else{
        return "Ímpar";
    }
}

console.log(verificaParOuImpar(4));