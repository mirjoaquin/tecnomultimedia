/*
NOMBRE : Joaquin Mir
COMISION : Comision 5
 LINK AL VIDEO DE YOUTUBE: https://youtu.be/oC9ZBkH348o
 */
int pantalla = 0;
boolean on;
PImage imagenes[];
String texto[];
void setup() {
  size(600, 600);
  rectMode(CENTER);
background(255);
  imagenes = new PImage[14];
  for (int i = 0; i <14; i++) {
    imagenes[i] = loadImage(i+".jpeg");
    imagenes[i].resize(width, height);
  }
  texto = loadStrings("texto.txt");
  textSize(20);
}
void draw() {
  dibujarPantallas();
}
void dibujarPantallas() {
  image(imagenes[pantalla], 0, 0);
  text(texto[pantalla], 10, 30);
  if (pantalla == 0) {
    fill(#10CB1B);
    Botones("cuad", 150, 400, 80, 1, "Iniciar", #036A60);
    fill(#DE0925);
    Botones("cuad", 450, 400, 80, 13, "Creditos", #036A60);
  } else if (pantalla == 1) {
    fill(#10CB1B);
    Botones("cuad", 556, height/2, 60, 2, "A", #036A60);
  } else if (pantalla == 2) {
    fill(#10CB1B);
    Botones("cuad", 556, height/2, 60, 3, "A", #036A60);
  } else if (pantalla == 3) {
    fill(#10CB1B);
    Botones("cuad", 556, height/2, 60, 4, "A", #036A60);
} else if (pantalla == 4) {
    fill(#DE0925);
    Botones("circ", 556, height/3, 60, 12, "B", #036A60);
    fill(#10CB1B);
    Botones("cuad", 556, height/2, 60, 5, "A", #036A60);
  } else if (pantalla == 5) {
    fill(#10CB1B);
    Botones("cuad", 556, height/2, 60, 6, "A", #036A60);
  } else if (pantalla == 6) {
    fill(#DE0925);
    Botones("circ", 556, height/3, 60, 11, "B", #036A60);
    fill(#10CB1B);
    Botones("cuad", 556, height/2, 60, 7, "A", #036A60);
  } else if (pantalla == 7) {
    fill(#10CB1B);
    Botones("cuad", 556, height/2, 60, 8, "A", #036A60);
  } else if (pantalla == 8) {
    fill(#10CB1B);
    Botones("cuad", 556, height/2, 60, 9, "A", #036A60);
  } else if (pantalla == 9) {
    fill(#10CB1B);
    Botones("cuad", 556, height/2, 60, 10, "A", #036A60);
  } else if (pantalla == 10) {
    fill(#DE0925);
    Botones("circ", width/2, 400, 60, 0, "Reinicio", #036A60);
  } else if (pantalla == 11) {
    fill(#DE0925);
    Botones("circ", width/2, 400, 60, 0, "FIN", #036A60);
  } else if (pantalla == 12) {
    fill(#DE0925);
    Botones("circ", width/2, 400, 60, 0, "FIN", #036A60);
  } else if (pantalla == 13) {
    fill(#DE0925);
    Botones("cuad", width/2, 500, 60, 0, "Inicio", #036A60);
  }

  fill(#00FFDF);
  for (int j = 0; j < texto.length; j++) {
    texto[j] = texto[j].replaceAll("\\\\n", "\n");
  }
}


void mouseMoved() {
  on = true;
}
