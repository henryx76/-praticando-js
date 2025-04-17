const carros = ["civic", "palio", "gol", "uno", "corolla"];
var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
   document.getElementById("teste").innerHTML += carros[i] + " - ";
}