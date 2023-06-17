
/*
NOMBRE : Joaquin Mir
COMISION : Comision 5
 LINK AL VIDEO DE YOUTUBE: https://youtu.be/NrE9c88EONg
 */

PImage img;

int cantidad =  16;

int alto;
int ancho;

int cantidadXDeModulos;
int cantidadYDeModulos;

int anchoDeModulo;
int altoDeModulo;

int posX;
int posY;


color pintar;

int angulo;
void setup(){
size(800,400);


img = loadImage("op art.jpg");
 
cantidadXDeModulos = 1;
cantidadYDeModulos = 1;

anchoDeModulo = width/ cantidadXDeModulos;
altoDeModulo = height/ cantidadYDeModulos;

alto = altoDeModulo/cantidad;
ancho = anchoDeModulo/cantidad;

posX = width/cantidad* -4 ;
posY = height/2;





}
void draw(){
image(img,0,0);
img.resize(400,400);






for(int i=0 ;i<13; i++){
 for (int j = 0; j <13; j++) {

   
   noStroke();

   
   for(int a = 11; a< 12; a++){
    for(int b = 10; b< 12; b++){
      for(int c = 11; c< 12; c++){
        for(int d = 11; d< 12; d++){
        push();
 
     if (j % 2 == 0) {
    fill(255);
  } else {
    fill(0);
  }
    
push(); 

 rect(560,a*j*1.13,79,11);
 translate(550,240);
 

 rect(b,a*j*1.13,79,11);

pop();
push();
translate(400,159);

 rect(c*j*1.13,i,11,69);
pop();
translate(640,160);

rect(d*j*1.13,i,11,65);
pop();
   
   
   
   
   

   Modulo2(i, j);

}
}
}
}
}
}
}



void modulo1(int c, int pX, int pY) {

  push();
   rectMode(CENTER);
 
 
    if (c % 2 == 0) {
    
    fill(0);
  } else {
    fill(255);
  }
 translate(pX * anchoDeModulo, pY * altoDeModulo);
 
  rect(posX , posY, ancho * c /2 , alto*2 * c /2);
  pop();

rect(560,161,80,80);
fill(255);
rect(575,175,50,50);  
fill(0);


rect(587,187,26,26);  
fill(0);


}
void Modulo2(int parametroX, int parametroY) {

  for (int i = cantidad; i > 0; i--) {
    modulo1(i, parametroX, parametroY);
  }
}



void mouseMoved(){


rect(560,161,80,80);
fill(random(255),random(255),random(255));

rect(575,175,50,50);  
fill(random(255),random(255),random(255));


rect(587,187,26,26);  
fill(random(255),random(255),random(255));



for(int i=0 ;i<13; i++){
 for (int j = 0; j <13; j++) {

   
   noStroke();

   
   for(int a = 11; a< 12; a++){
    for(int b = 10; b< 12; b++){
      for(int c = 11; c< 12; c++){
        for(int d = 11; d< 12; d++){
push();
          push(); 
fill(random(255),random(255),random(255));
rect(560,a*j*1.13,79,11);
translate(550,240);
rect(b,a*j*1.13,79,11);
pop();
push();
fill(random(255),random(255),random(255));
translate(400,159);
rect(c*j*1.13,i,11,69);
pop();
fill(random(255),random(255),random(255));
translate(640,160);
rect(d*j*1.13,i,11,65);
pop();

}
      }
    }
   }
 }
}
}
