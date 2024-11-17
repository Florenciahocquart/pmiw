class principal {
  constructor() {
    this.pantalla = 0;
    this.pInicio = new inicio();
    this.pInst = new instrucciones();
    this.pCred = new creditos();
    this.objJuego = new juego(1);
    this.gan = new ganaste();
    this.per = new perdiste();
  }

  dibujarPantallas() {
    if (this.pantalla === 0) { //incio
      
      this.pInicio.dibujar();
      this.pInicio.btnInicio(11, 0, 15);
      this.pInicio.btnInicio(513, 1, 513);
      this.pInicio.btnInicio(263, 2, 283);
    } 
    else if (this.pantalla === 1) { //instrucciones
    
      this.pInst.dibujar(); 
      this.pInst.botonVolver();
      
    } else if (this.pantalla === 2) { // creditos
    
      this.pCred.dibujar();
      this.pCred.botonVolver();
      
    } 
    else if (this.pantalla === 4) {
      
      this.objJuego.dibujar();
      this.objJuego.actualizar();
      this.objJuego.detectarColisiones();
      this.objJuego.estadosUi();
      
    } else if (this.pantalla === 5) { //ganaste
      
      this.gan.dibujar();
      this.gan.botonR();
      
    } else if (this.pantalla === 6) { //perdiste
      this.per.dibujar();
      this.per.botonR();
    }
  }
}
