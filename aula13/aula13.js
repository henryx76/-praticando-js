/* if e else */
function varficar() {
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "O campo está vazio!";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não está vazio!";
        p.style.color = "red";
    }
}