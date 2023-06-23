let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripcionSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

//funcion que carla la info del item seleccionado

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";


    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementsByTagName ("p")[0].innerHTML;

    descripcionSeleccionada.innerHTML = "Descripcion del producto";

    precioSeleccionado.innerHTML = item.getElementsByClassName("precio")[0].textContent;

}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i < items.length; i++){
        items[i].style.border = "none";
    }
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    quitarBordes();
}

function mostrarBoton(imagen) {
    const boton = imagen.nextElementSibling;
    boton.classList.add('mostrado');
  
    setTimeout(function() {
      boton.classList.remove('mostrado');
    }, 10000);
  }