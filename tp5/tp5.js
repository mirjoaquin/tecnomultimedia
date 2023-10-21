/*
NOMBRE : Joaquin Mir
COMISION : Comision 5
 LINK AL VIDEO DE YOUTUBE: https://youtu.be/5eU9UaYA5uQ
 */

let balloonImg;
let birds = [];
let score = 0;
let backgroundImg;
let birdImg;

function preload() {
backgroundImg = loadImage('imagenes/Fondo.png');
balloonImg = loadImage('imagenes/Balloon.png');
birdImg = loadImage('imagenes/Bird.png');  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  balloon = new Balloon();
  textSize(20);
  let backgroundImage = new Background(backgroundImg);
  backgroundImage.display();
}


function draw() {

  background(backgroundImg);

// Actualiza el globo  
  balloon.update();
  balloon.show();

  // Crea nuevos pájaros
  if (frameCount % 60 == 0) {
    birds.push(new Bird());
  }

  // Actualiza los pájaros
  for (let bird of birds) {
   
    bird.update();
    bird.show();

    // Colisiones
    if (balloon.hits(bird)) {
      noLoop();
      textSize(32);
      text("Has Perdido :(", width / 2 - 100, height / 2);
    }

    // Restarte los pajaros al pasar la pantalla
    if (bird.y > height) {
      birds.splice(birds.indexOf(bird), 1);
      score++;
    }
  }

  // Puntuacion
  textSize(20);
  text("Puntaje: " + score, 10, 30);
}
