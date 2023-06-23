function saludo(){
    alert("Hola muy buenas tardes");
}


function remover(parametro){
    console.log("que es este parametro", parametro)
    parametro.remove();
}

function cambiarColor(parametro){
    let elemento = document.getElementsByTagName(parametro)
    console.log(elemento)
    elemento[0].style.color = "red";
}