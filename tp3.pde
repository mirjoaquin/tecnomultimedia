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
  text(texto[pantalla], 50, 50);
  if (pantalla == 0) {
    fill(#036A60);
    Botones("cuad", 150, 400, 80, 1, "Iniciar");
    fill(#DE0925);
    Botones("cuad", 450, 400, 80, 13, "Creditos");
  } else if (pantalla == 1) {
    fill(#036A60);
    Botones("cuad", 556, height/2, 60, 2, "A");
  } else if (pantalla == 2) {
    fill(#036A60);
    Botones("cuad", 556, height/2, 60, 3, "A");
  } else if (pantalla == 3) {
    fill(#036A60);
    Botones("cuad", 556, height/2, 60, 4, "A");
} else if (pantalla == 4) {
    fill(#DE0925);
    Botones("circ", 556, height/3, 60, 12, "B");
    fill(#036A60);
    Botones("cuad", 556, height/2, 60, 5, "A");
  } else if (pantalla == 5) {
    fill(#DE0925);
    Botones("circ", 556, height/3, 60, 11, "B");
    fill(#036A60);
    Botones("cuad", 556, height/2, 60, 6, "A");
  } else if (pantalla == 6) {
    fill(#036A60);
    Botones("cuad", 556, height/2, 60, 7, "A");
  } else if (pantalla == 7) {
    fill(#036A60);
    Botones("cuad", 556, height/2, 60, 8, "A");
  } else if (pantalla == 8) {
    fill(#036A60);
    Botones("cuad", 556, height/2, 60, 9, "A");
  } else if (pantalla == 9) {
    fill(#036A60);
    Botones("cuad", 556, height/2, 60, 10, "A");
  } else if (pantalla == 10) {
    fill(#DE0925);
    Botones("circ", width/2, 400, 60, 0, "Reiniciar");
  } else if (pantalla == 11) {
    fill(#DE0925);
    Botones("circ", width/2, 400, 60, 0, "Reinicio");
  } else if (pantalla == 12) {
    fill(#DE0925);
    Botones("circ", width/2, 400, 60, 0, "Inicio");
  } else if (pantalla == 13) {
    Botones("cuad", width/2, 500, 40, 0, "Inicio");
  }
  noStroke();
  fill(#068ECB);
  for (int j = 0; j < texto.length; j++) {
    texto[j] = texto[j].replaceAll("\\\\n", "\n");
  }
}


void mouseMoved() {
  on = true;
}
