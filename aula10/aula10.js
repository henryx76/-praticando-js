function viraVermelho() {
    const div = document.getElementById("teste");
    div.style.backgroundColor = "red";
  }
  
  function viraAzul() {
    const div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
  }
  
  function eventDblClick() {
    const texto = document.getElementById("texto");
    texto.innerText = "Você clicou duas vezes!";
  }
  
  function limpaTexto() {
    const input = document.getElementById("campoTexto");
    input.value = "";
  }
  