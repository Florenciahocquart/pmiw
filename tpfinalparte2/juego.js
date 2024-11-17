class juego {
  constructor(cantTesoros) {
    this.j = new jugador(30, 30);
    this.hoyo = new obstaculos(60, 60, 2);
    this.en = new obstaculos(60, 60, 3);
    this.cantTesoros = cantTesoros;
    this.crearTesoros();
    this.puntos = 0;
    this.vida = 3;
  }

  dibujar() {
    image(imagenes[4], 0, 0, width, height); //fondo juego
    dibujarBtn(0, 0, 100, 50, 122, 214, 216); //arriba de esto va la ui
    
    this.j.dibujar();

    // dibujar obstaculos
    this.hoyo.dibujarHoyo(60, 60);
    this.en.dibujarEn(60, 60);

    // dibujar tesoros
    for (let i = 0; i < this.t.length; i++) {
      this.t[i].dibujar();
    }
  }

  actualizar() {

    this.hoyo.actualizar();
    this.en.actualizar();

    this.hoyo.reciclar();
    this.en.reciclar();

    this.j.colision(this.hoyo);
    this.j.colision(this.en);

    for (let i = 0; i < this.t.length; i++) {
      this.t[i].actualizar();
    }
    
    if(this.vida == 0){
      pr.pantalla = 6;
    }
    if(this.puntos == 100){
      pr.pantalla = 5;
    }
  }

  crearTesoros() {
    this.t = [];
    for (let i = 0; i < this.cantTesoros; i++) {
      this.t[i] = new tesoro(30, 30);
    }
  }

  detectarColisiones() {
    for (let i = 0; i < this.t.length; i++) {
      if (this.t[i].recolectado == false && this.j.colision(this.t[i])) {
        this.t[i].recolectado = true;
        this.puntos += 10;
        console.log("TESORO");
        this.t[i] = new tesoro(30, 30);
      }
    }

    if (this.j.colision(this.hoyo) || this.j.colision(this.en)){
      if (haColisionado == false) {
      this.vida -= 1; 
      haColisionado = true;
      console.log("COLISION");
      }
    } else {
      haColisionado = false; 
    }
  }

  estadosUi() {
    textSize(20);
    fill(0);
    text("VIDA:"+ this.vida, 10, 20);
    text("PUNTOS:"+ this.puntos, 10, 40);
  }
   ///////esto lo debo cambiar a clases
  ganaste(){
    image(imagenes[8], 0, 0, width, height);
  }
  
  perdiste(){
    image(imagenes[9], 0, 0, width, height);
  }
}
