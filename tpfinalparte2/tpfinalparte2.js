/* 
TP#FINAL PARTE 2
COMISIÓN 5
DOCENTE: Leonardo Garay
INTEGRANTES:
 Hoqcuart María Florencia 
 LEGAJO: 94747/4
 Ladines Romero Camila Amaya
 LEGAJO: 119060/
Link a video (individual):
*/

let pr = new principal(); 
let haColisionado = false;
let imagenes = [];
let textos;
let txtBtn = ["Instrucciones", "Créditos", "Juego", "Volver", "Reiniciar"];
let sonido;

function preload(){
  for (let i=1; i<10; i++) {
    imagenes[i] = loadImage("data/img"+i+".png");
  }
  
  sonido = loadSound('data/ost.mp3');

  textos = loadStrings('data/frases.txt');
}

function setup() {
 createCanvas(640, 480); 
}


function draw() {
 background(200);
 
 pr.dibujarPantallas();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    pr.objJuego.j.movI();
  } else if (keyCode == RIGHT_ARROW) {
    pr.objJuego.j.movD();
  } else if (keyCode == UP_ARROW){
    pr.objJuego.j.saltar();
  } else if (keyCode == DOWN_ARROW){
    pr.objJuego.j.movAb();
  }
}

function mousePressed(){
  console.log(mouseX, mouseY);
  
  if (pr.pantalla === 5 || pr.pantalla === 6) {
    sonido.stop();
  } else {
    sonido.play();
  }
  
  if (pr.pantalla === 0 && detectarBtn(11, 450, 110, 40)){
    pr.pantalla = 1; // instrucciones
  } else if (pr.pantalla === 0 && detectarBtn(513, 450, 110, 40)){
    pr.pantalla = 2; // créditos
  } else if (pr.pantalla === 0 && detectarBtn(263, 450, 110, 40)){
    pr.pantalla = 4; // juego
  } else if (pr.pantalla === 1 || pr.pantalla === 2 || pr.pantalla === 5 || pr.pantalla === 6 && detectarBtn(457, 257, 110, 40)){
    pr.pantalla = 0;
  }
}

// botones
function dibujarBtn(x, y, ancho, alto, r, g, b) {
  push();
  noStroke();
  fill(r, g, b);
  rect(x, y, ancho, alto);
  pop();
}

// detector de boton
function detectarBtn(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}
