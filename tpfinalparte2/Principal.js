class Principal {
  constructor() {
    this.estado = 0;
    this.pan = new Pantalla();
    this.objJuego = new Juego();
  }

  cargarTextosPantallas() {
    this.pan.cargarTextos();
  }

  dibujarPantallas() {
    if (this.estado === 0) { //incio
    
      this.pan.pantallaIncio();
      
    } else if (this.estado === 1) { //instrucciones
    
      this.pan.pantallaCI(2, 2);
      
    } else if (this.estado === 2) { // juego
    
      this.objJuego.dibujar();
      this.objJuego.actualizar();
      this.objJuego.detectarColisiones();
      
    } else if (this.estado === 3) { //creditos
    
      this.pan.pantallaCI(3, 3);
      
    } else if (this.estado === 4) { //ganaste
    
      this.pan.pantallaGP(8, 4);
      
    } else if (this.estado === 5) { //perdiste
    
      this.pan.pantallaGP(9, 5);
      
    }
  }

  teclaPresionada(key) {
    this.objJuego.moverJugador(key);
  }

  mousePresionado() {
    this.pan.cambiarPantallas();
    this.controlarSonido();
  }
  
  controlarSonido(){
    if (this.estado === 2){
      sonido.play();
    } else{
      sonido.stop();
    }
  }
}
