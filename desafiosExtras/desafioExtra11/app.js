function converterCelsiusParaFahrenheitOuInverso(valor, escala){
    if(escala.toLowerCase() == 'celsius'){
        return (valor * 9/5) + 32; 
    }
    else if(escala.toLowerCase() == 'fahrenheit'){
        return (valor - 32) * 5/9;
    }
    return "Escala inválida!";  
}

console.log(converterCelsiusParaFahrenheitOuInverso(25, 'Celsius'));

