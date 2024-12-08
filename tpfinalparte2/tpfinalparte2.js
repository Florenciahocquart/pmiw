/*
 TP#FINAL PARTE 2
 COMISIÓN 5
 DOCENTE: Leonardo Garay
 INTEGRANTES:
 Hoqcuart María Florencia
 LEGAJO: 94747/4
 Ladines Romero Camila Amaya
 LEGAJO: 119060/5
 Link a video (individual):
 */

let pr = new Principal();
let imagenes = [];
let sonido;

function preload() {
  for (let i=1; i<10; i++) {
    imagenes[i] = loadImage("data/img"+i+".png");
  }

  sonido = loadSound('data/ost.mp3');

  pr.cargarTextosPantallas();
}

function setup() {
  createCanvas(640, 480);
}


function draw() {
  pr.dibujarPantallas();
}

function keyPressed() {
  pr.teclaPresionada(key);
}

function mousePressed() {
  pr.mousePresionado();

}
