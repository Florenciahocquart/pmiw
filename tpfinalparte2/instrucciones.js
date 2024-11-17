class instrucciones{
  dibujar(){
    image(imagenes[2], 0, 0, width, height);
    dibujarBtn(62, 170, 310, 300, 126, 203, 55);
    textSize(30);
    fill(203, 55, 93);
    textWrap(WORD);
    text(textos[2], 70, 180, 300);
  }
  
  botonVolver(){
    dibujarBtn(457, 257, 110, 40, 122, 214, 216);
    textSize(18);
    text(txtBtn[3], 460, 280);
  }
}
