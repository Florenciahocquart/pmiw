class Juego {
  constructor() {
    this.j = new Jugador(30, 30);
    this.hoyo = new Obstaculo(60, 60, 2);
    this.en = new Obstaculo(60, 60, 3);
    this.t = []; 
    this.cantTesoros = 2;
    this.crearTesoros();
    this.puntos = 0;
    this.vida = 3;
    this.haColisionado = false;
  }

  dibujar() {
    image(imagenes[4], 0, 0, width, height);
    this.estadosUi();

    this.j.dibujar();

    this.hoyo.dibujarHoyo(60, 60);
    this.en.dibujarEn(60, 60);

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

    if (this.vida == 0) {  // condicion p perder
      pr.estado = 5;
    }
    if (this.puntos == 80) { //condicion p ganar
      pr.estado = 4;
    }
  }

  crearTesoros() {
    for (let i = 0; i < this.cantTesoros; i++) {
      this.t[i] = new Tesoro(30, 30);
    }
  }

  detectarColisiones() {
    for (let i = 0; i < this.t.length; i++) {
      if (this.t[i].recolectado === false && this.j.colision(this.t[i])) {
        this.t[i].recolectado = true;
        this.puntos += 10;
        console.log("TESORO");
        this.t[i] = new Tesoro(30, 30);
      }
    }


    if (this.j.colision(this.hoyo) || this.j.colision(this.en)) {
      if (this.haColisionado == false) {
        this.vida -= 1;
        this.haColisionado = true;
        console.log("COLISION");
      }
    } else {
      this.haColisionado = false;
    }
  }

  moverJugador(key) {
    if (key === 'w') {
      this.j.saltar();
    } else if (key === 'a') {
      this.j.movI();
    } else if (key === 's') {
      this.j.movAb();
    } else if (key === 'd') {
      this.j.movD();
    }
  }

  estadosUi() {
    push();
    noStroke();
    fill(122, 214, 216);
    rect(0, 0, 120, 50);
    pop();
    textSize(20);
    fill(0);
    text("VIDA:"+ this.vida, 10, 20);
    text("PUNTOS:"+ this.puntos, 10, 40);
  }
}
