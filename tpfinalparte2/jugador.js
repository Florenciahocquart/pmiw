class jugador {
  constructor(ancho, alto) {
    this.x = 10;
    this.y = 420;
    this.ancho = ancho;
    this.alto = alto;
  }

  dibujar() {
    image(imagenes[5],this.x, this.y, 60, 60);
  }

  movD() {
    this.x += 40;
  }

  movI() {
    this.x -= 40;
  }

  saltar() {
    this.y -= 100;
  }

  movAb() {
    this.y += 40;
  }

  colision(p) {
    return (
      this.x < p.x + p.ancho &&
      this.x + this.ancho > p.x &&
      this.y < p.y + p.alto &&
      this.y + this.alto > p.y
      );
  }
}
