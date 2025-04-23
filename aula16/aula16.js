function ativaContagem(){
    // document.getElementById('tempo').innerHTML = "começou a contar!";

    //EXECUTA APENAS UMA VEZ APÓS O TEMPO DETERMINADO
    // tempo = setTimeout(function() {
    //    document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    //  }, 5000);

    tempo = setInterval(function () {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma === 0) {
            document.getElementById('tempo').innerHTML = "tempo esgotado";
            pararContagem()
        }else{
            document.getElementById('tempo').innerHTML = soma;
        }
    }, 1000);
}

function pararContagem(){
    clearInterval(tempo);
    // document.getElementById('tempo').innerHTML = "parou a contagem";
}