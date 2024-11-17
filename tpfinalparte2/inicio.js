class inicio{
  dibujar(){
    image(imagenes[1], 0, 0, width, height);
    dibujarBtn(0, 0, 210, 40, 126, 203, 55);
    dibujarBtn(440, 0, 200, 100, 126, 203, 55);
    textSize(30);
    fill(203, 55, 93);
    text(textos[0], 5, 25);
    textSize(18);
    textWrap(WORD);
    text(textos[1], 450, 25, 200);
  }
  
  btnInicio(x, i, xt){
    dibujarBtn(x, 450, 110, 40, 122, 214, 216); // x 11, 
    textSize(18);
    text(txtBtn[i], xt, 470); // i 0 xt 15
  }
}
