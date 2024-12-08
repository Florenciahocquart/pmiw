class Pantalla {
  constructor() {
    this.textos = [];
    this.bIns = new Boton(11, 450, 110, 40);
    this.bJue = new Boton(263, 450, 110, 40);
    this.bCre = new Boton(513, 450, 110, 40);
    this.bVol = new Boton(457, 257, 110, 40);
    this.bRei = new Boton(457, 257, 110, 40);
  }

  cargarTextos() {
    this.textos = loadStrings('data/frases.txt');
  }

  pantallaIncio() {
    image(imagenes[1], 0, 0, width, height);
    push();
    noStroke();
    fill(126, 203, 55); //verde
    rect(0, 0, 210, 40);
    rect(440, 0, 200, 100);
    pop();
    textSize(30);
    fill(203, 55, 93); //rosa
    text(this.textos[0], 5, 25);
    textSize(18);
    textWrap(WORD);
    text(this.textos[1], 450, 25, 200);
    this.bIns.dibujar(0, 15, 470);
    this.bJue.dibujar(2, 283, 470);
    this.bCre.dibujar(1, 515, 470);
  }

  pantallaCI(img, f) {
    image(imagenes[img], 0, 0, width, height);
    push();
    noStroke();
    fill(126, 203, 55); //verde
    rect(62, 60, 310, 330);
    pop();
    textSize(30);
    fill(203, 55, 93); //rosa
    textWrap(WORD);
    text(this.textos[f], 70, 70, 300);
    this.bVol.dibujar(3, 460, 280);
  }

  pantallaGP(img, f) {
    image(imagenes[img], 0, 0, width, height);
    textSize(50);
    fill(255);
    text(this.textos[f], 70, 180);
    this.bRei.dibujar(4, 460, 280);
  }

  cambiarPantallas() {
    if (pr.estado === 0 && this.bIns.detectar()) { //instrucciones
      pr.estado = 1;
    } else if (pr.estado === 0 && this.bJue.detectar()) { //juego
      pr.estado = 2;
      pr.objJuego = new Juego();
    } else if (pr.estado === 0 && this.bCre.detectar()) { //creditos
      pr.estado = 3;
    } else if (pr.estado === 1 && this.bVol.detectar()) { 
      pr.estado = 0;
    } else if (pr.estado === 3 && this.bVol.detectar()) {
      pr.estado = 0;
    } else if (pr.estado === 4 && this.bRei.detectar()) {
      pr.estado = 0;
    } else if (pr.estado === 5 && this.bRei.detectar()) {
      pr.estado = 0;
    }
  }
}
