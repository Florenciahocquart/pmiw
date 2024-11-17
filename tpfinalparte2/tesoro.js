class tesoro {
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

  actualizar() {
    if (this.recolectado == true) {
      this.x = Math.floor(Math.random() * 600);
      this.y = Math.floor(Math.random() * 400);
      this.recolectado = false;
    }
  }
}
