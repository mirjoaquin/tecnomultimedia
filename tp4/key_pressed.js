function keyPressed() {
  if (!enJuego && !enCreditos && key === " ") {

    pantallaInicio = true
    enJuego = false
    enCreditos = false
    puntaje = 0;
    botonComenzar.show()
    botonCreditos.show()
    botonRegresar.hide()

  
    paleta.x = width / 2
    pelota = createVector(width / 2, height / 2)
    velocidadPelota = createVector(3, -3)

   
    ladrillos = []
    for (let i = 0; i < 23; i++) {
      for (let j = 0; j < 5; j++) {
        ladrillos.push(createVector(i * 60 + 30, j * 60 + 30))
      }
    }
  }
}
