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
document.addEventListener('DOMContentLoaded', function () {
    // Obtén el botón y agrega un evento de clic
    var botonDescargarCV = document.getElementById('descargarCV');
    botonDescargarCV.addEventListener('click', descargarCV);
});

function descargarCV() {
    // Reemplaza "Tu_CV_Nombre.pdf" con el nombre correcto de tu CV
    var nombreCV = 'Hector_Ricardo_Lopez_Pepa_CV.pdf';

    // La ruta al CV relativa al HTML
    var rutaCV = 'img/Hector_Ricardo_Lopez_Pepa_CV.pdf' + nombreCV;

    // Crea un elemento <a> temporal y simula un clic para iniciar la descarga
    var linkTemporal = document.createElement('a');
    linkTemporal.href = rutaCV;
    linkTemporal.download = nombreCV;
    document.body.appendChild(linkTemporal);
    linkTemporal.click();
    document.body.removeChild(linkTemporal);
}
