function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Um dos números não é válido.";
    }
    return (num1 + num2) / 2;
}

console.log(calcularMedia(8,5));