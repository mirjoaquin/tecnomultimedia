class Enemigo {
  constructor(x, y, velocidad, tamano, retrasoAparicion) {
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.tamano = tamano;
    this.retrasoAparicion = retrasoAparicion;
 
  }

  mover() {
    if (this.retrasoAparicion <= -5) {
      this.y += this.velocidad;
    } else {
      this.retrasoAparicion--;
    }
  }

  mostrar() {
    if (this.retrasoAparicion <= -5) {
      push();
      translate(this.x, this.y);  
   image(juego.imagenEnemigo, -this.tamano / 2, -this.tamano / 2, this.tamano, this.tamano);
      pop();
    }
  }
}
