function eventoClick(){
    //alert('clicou!');
}


function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append('o mouse moveu<br>');
}