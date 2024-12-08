class Tesoro {
  constructor(ancho, alto) {
    this.x = Math.floor( Math.random() * 600 );
    this.y = Math.floor( Math.random() * 400 );
    this.ancho = ancho;
    this.alto = alto;
    this.recolectado = false;
  }

  dibujar() {
    image(imagenes[7], this.x, this.y, this.ancho, this.alto);
  }
}
