Nombre = prompt("¿Como es tu nombre?");
 if (Nombre == "luli"){
    alert("¡Hola " + Nombre + " que tengas lindo día!")
} else {
    alert("¡Hola " + Nombre + " que tengas lindo día!")
}
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document .getElementById("move-content").classList.toggle('move-conteiner-all')
    document .getElementById("show-menu").classList.toggle('lateral')
}

var Slider = document.querySelector(".slider");
var Imagenes = document.querySelector(".img-slider").length;
var Contador = 0; 

/*function MoverSlider(){
        
        if (Contador > Imagenes - 1)
        {
            Contador = 0;
        }  else if(Contador < 0)
                 {
                    Contador = Imagenes - 1;
                 }
    Slider.style.transition = "all 1s ease";
    Slider.style.marginLeft = `-${100 * Contador}%`;
    } 
    setInterval(MoverSlider, 2000);  */

    var estado = false;
$(Nombre).ready(function () {
 $(".stock").each(function() {
   var aux = $(this).attr("id");
   var Nombre=parseInt($(this).text());
});
});