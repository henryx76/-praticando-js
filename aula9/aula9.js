const carro = {
    marca: "honda",
    modelo: "civic",
    ano: 2020,
    placa :"abc-1234",
    buzina: function () {alert('biiiiiiiiiiiii') },
    completo: function () {
        return "a marca" + this.marca + "e o modelo é " + this.modelo + " " + this.ano + " " + this.placa;
    }
};
console.log(carro.completo());