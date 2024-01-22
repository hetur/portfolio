let menuVisible = false;
//funcion que oculta o muestra el menu//
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList=""
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive"
        menuVisible = true;
    }
}

function seleccionar() {
    //ocultar menu al seleccionarlo//
    document.getElementById("nav").classList=""
    menuVisible = false;
    
}
// funcion que aplica las 