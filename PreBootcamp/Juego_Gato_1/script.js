var posicionIzq = 550,
  posicionArriba = 100;

function actualizar() {
  document.getElementById("gatito").style.left = posicionIzq + "px";
  document.getElementById("gatito").style.top = posicionArriba + "px";
}

document.onkeydown = function (e) {
  console.log(e);
  if (e.keyCode == 37) {
    // Izquierda
    posicionIzq = posicionIzq - 10;
  } else if (e.keyCode == 39) {
    // Derecha
    posicionIzq = posicionIzq + 10;
  } else if (e.keyCode == 40) {
    // Abajo
    posicionArriba = posicionArriba + 10;
  } else if (e.keyCode == 38) {
    // Abajo
    posicionArriba = posicionArriba - 10;
  }


    // Asegurarse de que las posiciones se mantengan entre 0 y 800
	if (posicionIzq < 0) {
		posicionIzq = 0;
	  } else if (posicionIzq > 400) {
		posicionIzq = 400;
	  }
	
	  if (posicionArriba < 0) {
		posicionArriba = 0;
	  } else if (posicionArriba > 400) {
		posicionArriba = 400;
	  }

  actualizar();
};
