function verCreditos() {
  pantallaInicio = false
  enJuego = false
  enCreditos = true
  botonComenzar.hide()
  botonCreditos.hide()
  botonRegresar.show()
 fill(0,255,0)
      textSize(32)
      textAlign(CENTER, CENTER);
      text("¡Ganaste!", width / 2, height / 2 - 50)
}
