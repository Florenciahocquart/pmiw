/* 
TP#FINAL PARTE 1
COMISIÓN 5
DOCENTE: Leonardo Garay
INTEGRANTES:
 Hoqcuart María Florencia 
 LEGAJO: 94747/4
 Ladines Romero Camila Amaya
 LEGAJO: 119060/
Link a video (individual):https://youtu.be/xW5aYDFOIRg
*/

let imagenes = [];
let sonido;
let pantallaActual = 0;
let textos;
let xBoton, yBoton, anchoBoton, altoBoton, rBoton, gBoton, bBoton;
let textosBoton = ["No", "Sí", "Empezar", "Siguiente", "Créditos", "Reiniciar"];

function preload() {

  for (let i=0; i<17; i++) {
    imagenes[i] = loadImage("data/img"+i+".jpg");
  }

  sonido = loadSound('data/ost.mp3');

  textos = loadStrings('data/guion.txt');
  
}

function setup() {
  createCanvas(640, 480);
  textSize(18);
}


function draw() {

  // dinamica de pantallas
  if (pantallaActual === 0) { //incio
    pantallaInicio();
  } else if (pantallaActual === 1) {
    pantalla1Btn(522, 320, 255, 204, 62, 3, 530, 335);
  } else if (pantallaActual === 2) {
    pantalla1Btn(522, 320, 255, 204, 62, 3, 530, 335);
  } else if (pantallaActual == 3) {
    pantalla1Btn(522, 320, 255, 204, 62, 3, 530, 335);
  } else if (pantallaActual === 4) { // 2 botones
    pantalla2Btn(520, 360, 535, 390);
  } else if (pantallaActual === 5) { // 2 btns
    pantalla2Btn(397, 415, 410, 450);
  } else if (pantallaActual === 6) { // penultima
    pantalla1Btn(0, 320, 255, 152, 176, 4, 15, 335);
  } else if (pantallaActual === 7) { //penultima
    pantalla1Btn(0, 320, 255, 152, 176, 4, 15, 335);
  } else if (pantallaActual === 8) { //opcion b pantalla 3
    pantalla1Btn(522, 320, 255, 204, 62, 3, 530, 335);
  } else if (pantallaActual === 9) {
    pantalla1Btn(522, 320, 255, 204, 62, 3, 530, 335);
  } else if (pantallaActual === 10) { //2 botones
    pantalla2Btn(520, 360, 535, 390);
  } else if (pantallaActual === 11) {
    pantalla1Btn(522, 320, 255, 204, 62, 3, 530, 335);
  } else if (pantallaActual === 12) { //penultima
    pantalla1Btn(0, 320, 255, 152, 176, 4, 15, 335);
  } else if (pantallaActual === 13) { //opcion b pantalla 10
    pantalla1Btn(522, 320, 255, 204, 62, 3, 530, 335);
  } else if (pantallaActual === 14) {
    pantalla1Btn(522, 320, 255, 204, 62, 3, 530, 335);
  } else if (pantallaActual === 15) {
    pantalla1Btn(522, 320, 255, 204, 62, 3, 530, 335);
  } else if (pantallaActual === 16) { //penultima
    pantalla1Btn(0, 320, 255, 152, 176, 4, 15, 335);
  } else if (pantallaActual === 17) { // créditos + reinicio
    pantallaCreditos();
  }
  
}

function mousePressed() {
  //console.log(mouseX, mouseY);

  if (pantallaActual === 17) {
    sonido.stop();
  } else {
    sonido.play();
  }

  //interacciones
  if ( pantallaActual === 0 && detectarBtn(508, 421, width/6, height/10)) {
    pantallaActual = 1;
  }

  if (detectarBtn(522, 320, 118, 20)) {
    pantallaActual = pantallaActual+1;
  }

  if (pantallaActual === 4) {
    if (detectarBtn(520, 360, width/6, height/10)) {
      pantallaActual = 5;
    } else if (detectarBtn(520, 415, width/6, height/10)) {
      pantallaActual = 8;
    }
  }

  if (pantallaActual === 5) {
    if (detectarBtn(367, 415, width/6, height/10)) {
      pantallaActual = 7;
    } else if (detectarBtn(520, 415, width/6, height/10)) {
      pantallaActual = 6;
    }
  }

  if (pantallaActual === 10) {
    if (detectarBtn(520, 360, width/6, height/10)) {
      pantallaActual = 11;
    } else if (detectarBtn(520, 415, width/6, height/10)) {
      pantallaActual = 13;
    }
  }

  if (
    pantallaActual === 6 ||
    pantallaActual === 7 ||
    pantallaActual === 12 ||
    pantallaActual === 16
    ) {
    if (detectarBtn (0, 320, 118, 20)) {
      pantallaActual = 17;
    }
  }

  if (pantallaActual === 17) {
    if (detectarBtn(300, 380, width/4, height/8)) {
      pantallaActual = 0;
    }
  }
}
