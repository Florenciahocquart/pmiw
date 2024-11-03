// florencia hocquart
//94747/4
//com 5
//https://youtu.be/t1M9AoMaQXU

let F29;
let correccion=0;
let max_distance;
let puntoX, puntoY;


function preload(){
 F29 = loadImage ("data/F29.jpg");
}

 function setup(){ 
   createCanvas (800 , 400);
   noStroke();
    max_distance = dist(0, 0, width, height);   
    puntoX = width / 2;
   puntoY = height / 2;

   }
   
   function draw(){
     
     image (F29, 0 ,0, 400, 400);
     grilla(400 , 0 , 30 , 90) ;   
     let distancia = calcularDistancia(mouseX, mouseY, puntoX, puntoY);
  console.log("Distancia: ", distancia);

   
   }

   function grilla( x, y, t, c) {
    for(let i=0; i<c; i++) {
      for(let j=0; j<c; j++){
        if((i+j)%2==0){
          fill(255, 192, 231);
    } else {
      fill(167, 46, 147);
    }
    rect (x+i*t, y+j*t, t, t) ;
      }
      }
      for (let i=0; i<c+1; i++){
      for (let j=0; j<c+1; j++){
        
        if((i+j)%10==0){
          correccion=0;
        }else if ((i+j)%10==5){
          correccion = 255;
        }
        if((i+j)%2==0){
          fill(255,0,0-correccion);
        }else {
          fill(255+correccion);
        }
        circle(x+i*t, y+j*t, t/3);
      }
      }
     for (let i = 400; i <= width; i += 20) {
  for (let j = 0; j <= height; j += 20) {
    let size = dist(mouseX, mouseY, i, j);
    size = (size / max_distance) * 100;

    // pintar de color los circulos, fill color recibe el color inicial rosa, el final violeta 
    let fillcolor = colores(color(167, 46, 147), color(100, 0, 255)); // Puedes ajustar los colores
    fill(fillcolor); // aplicar el color
    ellipse(i, j, size, size);
  }
    }  
  }
  
function calcularDistancia(x1, y1, x2, y2) {
  return dist(x1, y1, x2, y2);
}

function colores(inicio, fin) {
  let cambio;
  if (mouseX < width / 2 || mouseX > width || mouseY > height) {
    cambio = 0; //si el mouse esta fuera no aplica el color
  } else {
    cambio = map(mouseX, width / 2, width, 0, 1); // sigo el movimiento del mouse
  }
                   //valor inicial, valor final del movimiento del mouse
  let r = map(cambio, 0, 1, red(inicio), red(fin));
  let g = map(cambio, 0, 1, green(inicio), green(fin));
  let b = map(cambio, 0, 1, blue(inicio), blue(fin));

  return color(r, g, b); // devuelve el color de rgb segun la posicion del mouse
}
