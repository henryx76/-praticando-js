var item1 = "arroz";
var item2 = "feijão";
var item3 = "batata";
var item4 = "carne";

const numeros = [40, 100, 1, 5, 25, 10];

document.getElementById("teste").innerHTML = MenorNumero(numeros);

function MaiorNumero(array) {
    return Math.max.apply(null, array);
}
function MenorNumero(array) {
    return Math.min.apply(null, array);
}