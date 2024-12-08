// cuadro de dialogo
function cuadroDialogo(x, y, ancho, alto) {
  push();
  fill(240);
  noStroke();
  rect(x, y, ancho, alto);
  pop();
}

// botones
function dibujarBoton(xBoton, yBoton, anchoBoton, altoBoton, rBoton, gBoton, bBoton) {
  push();
  noStroke();
  fill(rBoton, gBoton, bBoton);
  rect(xBoton, yBoton, anchoBoton, altoBoton);
  pop();
}

// detector de boton
function detectarBtn(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

//funciones de pantalla

function pantalla1Btn(xB, yB, r, g, b, i, xT, yT) {
  image(imagenes[pantallaActual], 0, 0, width, height);
  cuadroDialogo(0, 350, width, height/4);
  textWrap(WORD);
  text(textos[pantallaActual], 11, 373, 485);
  dibujarBoton(xB, yB, 118, 20, r, g, b);
  text(textosBoton[i], xT, yT);
}

function pantalla2Btn(xB, yB, xT, yT) {
  image(imagenes[pantallaActual], 0, 0, width, height);
  cuadroDialogo(0, 350, width, height/4);
  textWrap(WORD);
  text(textos[pantallaActual], 11, 373, 485);
  dibujarBoton(xB, yB, width/6, height/10, 221, 252, 150);
  text(textosBoton[0], xT, yT);
  dibujarBoton(520, 415, width/6, height/10, 221, 252, 150);
  text(textosBoton[1], 535, 450);
}


function pantallaInicio() {
  image(imagenes[pantallaActual], 0, 0, width, height);
  dibujarBoton(13, 421, width/6, height/10, 245);
  text(textos[pantallaActual], 18, 450);
  dibujarBoton(508, 421, width/6, height/10, 155, 50, 50);
  text(textosBoton[2], 515, 450);
}

function pantallaCreditos() {
  background(228, 198, 255);
  textWrap(WORD);
  text(textos[pantallaActual], 100, 100, 260);
  dibujarBoton(300, 380, width/4, height/8, 180, 231, 255);
  text(textosBoton[5], 320, 420);
}
