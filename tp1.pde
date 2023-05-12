//CONTADOR / PANTALLA
int pantalla =  0 ;
int contador =  0 ;
int posicionXBoton = 480;
int posicionYBoton = 380;
int tamanioEnXBoton = 140;
int tamanioEnYBoton = 80;
int space = 0;
//IMAGEN
PImage mouseImagen;
PImage fondoImagen0;
PImage fondoImagen1;
PImage fondoImagen2;
//FUENTES
PFont Fuente1;
PFont Fuente2;
PFont Fuente3;
PFont Fuente4;
//TEXTOS
String Texto1;
String Texto2;
String Texto3;
String Texto4;
//BOOLEAN
boolean botonRe = false;
//COLOR
color colorDetexto;
color colorDetexto2;
color colorDelBoton;
color colorBordeBoton;
//FLOAT
float y;
float x;

void setup() {
  // TRABAJO CASI TERMINADO AGREGAR EFECTOS AL TEXTO Y CAMBIAR EL TEXTO DE LAS DIAPOSITIVAS

  size(640, 480);

  mouseImagen = loadImage("imagenes/maza.png");
  noCursor();

  y = -300;
  x = -200;

  Texto1 = "Este es el tp1 sobre herramintas \n en este trabajo hablaremos de \n mazas y martillos ";
  Texto2 = "Aqui hay una foto \n de la primera Maza \n que fue creada \n se puede ver como \n fue diseniada";
  Texto3 = "Aca hay distintos tipos de\n mazas y martillos los cuales son \n para distintas profeciones \n  ";
  Texto4 = "FIN de la presentacion \n del TP1 ";

  Fuente1 = loadFont("fuentes/SketchGothicSchool-48.vlw");
  Fuente2 = loadFont("fuentes/TypoDraftDemo-48.vlw");
  Fuente3 = loadFont("fuentes/ArtBrewery-48.vlw");
  Fuente4 = loadFont("fuentes/WhiteOnBlack-48.vlw");

  colorDetexto = 0;
  colorDetexto2 = 0;
  colorDelBoton = 255;
  colorBordeBoton = 0;
}



void draw() {






  switch (pantalla) {
  case 0:




    fondoImagen0 = loadImage("imagenes/6.jpg");
    image(fondoImagen0, 0, 0, width - space, height - space);
    y += 5;
    if (y > 202)
      y = 202;
    textFont(Fuente1);
    fill(#21EA95);
    textSize(50);
    text(Texto1, 2, y);



    contador++;
    println("Bienvenida", contador);
    if (contador >= 250) {
      contador = 0;
      pantalla = 1;
    }

    break;

  case 1:



    fondoImagen1 = loadImage("imagenes/2.jpg");
    image(fondoImagen1, 0, 0, width - space, height - space);
    x += 5;
    if (x > 2)
      x = 2;
    textFont(Fuente2);
    fill(#E88F3B);
    textSize(40);
    text(Texto2, x, 40);




    contador++;

    println("Estado 1", contador);
    if (contador >= 250) {
      contador = 0;
      pantalla = 2;
    }
    break;

  case 2:

    contador++;
    fondoImagen2 = loadImage("imagenes/3.jpg");
    image(fondoImagen2, 0, 0, width - space, height - space);

    textFont(Fuente3);
    fill(255, 0, 0, contador);
    textSize(50);
    text(Texto3, 25, 60);



    println("Estado 2", contador);

    if (contador >= 250) {
      contador = 0;
      pantalla = 3;
    }
    break;

  case 3:


    contador++;
    fondoImagen1 = loadImage("imagenes/8.jpg");
    image(fondoImagen1, 0, 0, width - space, height - space);


    textFont(Fuente4);
    fill(colorDetexto2);
    text(Texto4, 25, 200);
    stroke(colorBordeBoton);
    rect(posicionXBoton, posicionYBoton, tamanioEnXBoton, tamanioEnYBoton);
    fill(colorDetexto);
    textSize(25);
    text("Reiniciar", posicionXBoton + tamanioEnXBoton /10, posicionYBoton + tamanioEnYBoton /2);
    println("Estado 3", contador);
  }




  image(mouseImagen, mouseX, mouseY, 100, 100);
}

void mouseMoved() {
  if (mouseX > posicionXBoton && mouseX < posicionXBoton + tamanioEnXBoton
    && mouseY > posicionYBoton && mouseY < posicionYBoton + tamanioEnYBoton) {
    colorBordeBoton = color(#3E3B3B);
    colorDelBoton = color(#8E8888);
    colorDetexto = color(#F78C8C);
    botonRe = true;
  } else {
    colorBordeBoton  = 255;
    colorDelBoton = 255;
    colorDetexto = 200;
    botonRe = false;
  }
}

void mouseClicked() {
  if (botonRe == true) {
    pantalla = 0;
  }
}
