PImage img;

void setup(){ 
 
  size(800,400);
 background(255);
 
 img = loadImage("maza.jpg");
  
 image(img,0,0);

img.resize(400,400);
 


}
void draw(){
 fill(#F7C91E,127);
  
  rect(500,70, 29,125);
  fill(0,0,0,255);
  rect(500,193, 29,159);
  fill(#11171F,255);
  rect(455,77 ,123, 53);
 

image(img,10,10);

img.resize(400,400);


}
