class Obstaculo {
  constructor(ancho, alto, velocidad) { 
    this.x = Math.floor( Math.random() * 640 );
    this.y = -100;
    this.ancho = ancho;
    this.alto = alto;
    this.vel = velocidad;
    
  }

  dibujarHoyo(ancho, alto) {
    fill(77, 0, 0);
    rect( this.x, this.y, this.ancho, this.alto);
  }
  
  dibujarEn(ancho, alto) {
    image(imagenes[6], this.x, this.y, this.ancho, this.alto);
  }

  actualizar() {
    this.y = this.y + this.vel;  //suma la velocidad a la pos Y
  }

  reciclar() {
    if ( this.y >= 480+100 ) {
      this.x = int(random(width-60));
      this.y = -100;
    }
  }
}
