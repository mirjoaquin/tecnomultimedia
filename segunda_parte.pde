void Botones(String forma, float x, float y, float tamaño, int siguiente, String MostrarTexto) {
  push();
  if (forma == "circ") {
    circle(x, y, tamaño);
    text(MostrarTexto, x, y);
    if (mousePressed && on) {
      if (dist(mouseX, mouseY, x, y) < tamaño / 2) {
        pantalla = siguiente;
        on = false;
      }
    }
  } else if (forma == "cuad") {
    square(x, y, tamaño);
    text(MostrarTexto, x, y);
    if (mousePressed && on) {
      if (mouseX > x -tamaño/2
        && mouseX < x + tamaño/2
        && mouseY > y - tamaño/2
        && mouseY < y + tamaño/2) {
        pantalla = siguiente;
        on = false;
      }
    }
  }
  pop();
}
