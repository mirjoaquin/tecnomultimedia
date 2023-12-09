class Jugador {
  constructor() {
    this.x = width / 2;
  }

  mostrar() {
    image(juego.imagenJugador, this.x - 30, height - 60, 60, 60);
  }
}
