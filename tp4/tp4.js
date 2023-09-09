/*
NOMBRE : Joaquin Mir
COMISION : Comision 5
 LINK AL VIDEO DE YOUTUBE:https://youtu.be/RgJokwwV3Aw
 */



let pantallaInicio = true
let enJuego = false
let enCreditos = false
let paleta
let pelota
let ladrillos = []
let puntaje = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
 
  paleta = createVector(width / 2, height - 20)
  pelota = createVector(width / 2, height / 2)
  velocidadPelota = createVector(3, -3)

  // Crear ladrillos
  for (let i = 0; i < 23; i++) {
    for (let j = 0; j < 5; j++) {
      ladrillos.push(createVector(i * 60 + 30, j * 60 + 30))
    }
  }


  botonComenzar = createButton('Comenzar Juego')
  botonComenzar.position(width / 2 - 70, height / 2)
  botonComenzar.mousePressed(iniciarJuego)
  botonComenzar.size(140, 40)


  botonCreditos = createButton('Créditos');
  botonCreditos.position(width / 2 - 50, height / 2 + 60)
  botonCreditos.mousePressed(verCreditos)
  botonCreditos.size(100, 40)


  botonRegresar = createButton('Regresar a Inicio')
  botonRegresar.position(width / 2 - 80, height / 2 + 120)
  botonRegresar.mousePressed(regresarAInicio)
  botonRegresar.size(160, 40)
  botonRegresar.hide()

  
  elementosCreditos = createP("Desarrollado por [Joaquin Mir]")
  elementosCreditos.hide()
  elementosCreditos.position(width / 2 - 100, height / 2)
  elementosCreditos.style('font-size', '24px');
  elementosCreditos.style('color', 'white'); // Cambio de color a blanco
  elementosCreditos.hide();
  elementosCreditos.position(width / 2 - 200, height / 2 - 200 );
  elementosCreditos.html(
    "<strong>Reglas del Juego Breakout:</strong><br>" + // Cambio a texto en negrita
    "1. Controla la paleta con el mouse o las teclas de flecha.<br>" +
    "2. Golpea la pelota con la paleta para destruir los ladrillos.<br>" +
    "3. Evita que la pelota caiga fuera de la pantalla.<br>" +
    "4. Gana puntos al romper los ladrillos.<br>" +
    "5. Ganas cuando destruyes todos los ladrillos o pierdes si la pelota cae.<br>"+
    "6. Para volver a la pantalla principal tienes que tocar la barra espaciadora.<br>"
  );





}

function draw() {
  background(0)
  mouseMoved()
  keyPressed()
 
  if (pantallaInicio) {
    // Pantalla de inicio
    fill(255)
    textSize(32)
    textAlign(CENTER, CENTER);
    text("¡Bienvenido al Juego Breakout!", width / 2, height / 2 - 50)
  }

  if (enCreditos) {
    
    elementosCreditos.show()
    botonRegresar.show()
  } else {
    elementosCreditos.hide()
    botonRegresar.hide()
  }

  if (enJuego) {
  
  background(0)

  rectMode(CENTER)
  fill(255)
  rect(paleta.x, paleta.y, 60, 10)

  // Dibuja la pelota
  fill(200,200,0)
  ellipse(pelota.x, pelota.y, 15, 15)

  // Mueve la pelota
  pelota.x += velocidadPelota.x
  pelota.y += velocidadPelota.y

  // Colisiones con los bordes
  if (pelota.x < 0 || pelota.x > width) {
    velocidadPelota.x *= -1
  }
  if (pelota.y < 0) {
    velocidadPelota.y *= -1
  }

  // Colisión con la paleta
  if (
    pelota.y > height - 10 &&
    pelota.x > paleta.x - 30 &&
    pelota.x < paleta.x + 30
  ) {
    velocidadPelota.y *= -1
  }

  // Colisión con ladrillos
  for (let i = ladrillos.length - 1; i >= 0; i--) {
    let l = ladrillos[i]
    if (
      pelota.x > l.x - 20 &&
      pelota.x < l.x + 20 &&
      pelota.y > l.y - 10 &&
      pelota.y < l.y + 10
    ) {
      velocidadPelota.y *= -1
      ladrillos.splice(i, 1)
      puntaje += 10; // Incrementa el puntaje cuando rompes un ladrillo
    }
  }

  // Dibuja los ladrillos
  for (let l of ladrillos) {
    fill(random(255),random(255),random(255))
    rect(l.x, l.y, 40, 20)
  }

  // Muestra el puntaje
  textSize(24)
  fill(0,255,50)
  textAlign(RIGHT)
  text("Puntaje: " + puntaje, width - 20, 30)

    // Ganaste
    if (ladrillos.length === 0) {
      enJuego = false
      fill(0,255,0)
      textSize(32)
      textAlign(CENTER, CENTER);
      text("¡Ganaste!", width / 2, height / 2 - 50)
    }

    // Perdiste
    if (pelota.y > height) {
      enJuego = false
      fill(255,0,0)
      textSize(32)
      textAlign(CENTER, CENTER)
      text("¡Perdiste!", width / 2, height / 2 - 50)
    }
  }
}
