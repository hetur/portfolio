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
// funcion que aplica las animaciones en las habilidades//
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso")
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("word");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajoenequipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("proactivo");
    }
}

//detecto el scrooling para aplicar las animaciones en la barra de habilidades//

window.onscroll = function(){
    efectoHabilidades()
}