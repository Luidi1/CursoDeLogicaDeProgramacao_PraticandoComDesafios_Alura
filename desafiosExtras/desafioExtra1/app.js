function essaPalavraEhUmPalindromo(){
    let palavraOuFraseOriginal = "   a lupa pula    ";
    palavraOuFraseOriginal = palavraOuFraseOriginal.replace(/\s+/g, ' ').toLowerCase().trim();

    palavraOuFrase = palavraOuFraseOriginal.replace(/\s+/g, '');
    let separandoAsLetrasDaPalavra = palavraOuFrase.split("");
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");

    if(palavraOuFrase == palavraInvertida){
        if(palavraOuFraseOriginal.trim().includes(" ")){
            console.log("A frase " + palavraOuFraseOriginal + " é um palíndromo!");
        }
        else{
            console.log("A palavra " + palavraOuFraseOriginal + " é um palíndromo!");
        }
        
    }
    else{
        if(palavraOuFraseOriginal.trim().includes(" ")){
            console.log("A frase " + palavraOuFraseOriginal + " não é um palíndromo!");
        }
        else{
            console.log("A palavra " + palavraOuFraseOriginal + " não é um palíndromo!");
        }
    }
}

essaPalavraEhUmPalindromo();