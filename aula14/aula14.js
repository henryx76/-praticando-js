function diaDaSemana(){
    var dia = new Date().getDay();

    console.log(dia);
    switch (dia) {
        case "azul":
            //o que acontece
            Document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            //o que acontece
            Document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            //o que acontece
            Document.body.style.backgroundColor = "yellow";
            break;
        default:
            //o que acontece
            document.getElementById("teste").innerHTML = "nenhuma cor disponivel!";
    }
}