
//BOTON IZQUIERDA

document.getElementById("knowmore").addEventListener("mouseover", mouseOver);
document.getElementById("knowmore").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("knowmore").innerHTML = "CLICK ME";
}

function mouseOut() {
  document.getElementById("knowmore").innerHTML = "Know More";
}


//BOTON CENTRAL

function cambioagris() {
    var element = document.getElementById("agris");
    element.classList.add("gris");
 }


// BOTON DERECHA

function cambioacuadrado() {
    document.getElementById("acuadrado").classList.toggle("d-none");
    document.getElementById("acuadrado1").classList.toggle("d-none");
}
