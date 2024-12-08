class Boton {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.txtBtn = ["Instrucciones", "Créditos", "Juego", "Volver", "Reiniciar"];
  }

  dibujar(num, xt, yt) {
    push();
    noStroke();
    fill(122, 214, 216); //celeste
    rect(this.x, this.y, this.ancho, this.alto);
    pop();
    textSize(18);
    fill(203, 55, 93); //rosa
    text(this.txtBtn[num], xt, yt);
  }

  detectar() {
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }
}
