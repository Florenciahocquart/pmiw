class creditos{
  dibujar(){
    image(imagenes[3], 0, 0, width, height);
    dibujarBtn(55, 32, 310, 200, 126, 203, 55);
    textSize(30);
    fill(203, 55, 93);
    textWrap(WORD);
    text(textos[3], 70, 40, 300);
  }
  
  botonVolver(){
    dibujarBtn(457, 257, 110, 40, 122, 214, 216);
    textSize(18);
    text(txtBtn[3], 460, 280);
  }
}
