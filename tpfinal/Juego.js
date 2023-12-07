class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.enemigos = [];
    this.tablero = new Tablero();
    this.gameOver = false;
    this.velocidadEnemigo = 2;
    this.tamanoEnemigo = 15;
    this.intervaloMinSpawn = 1;
    this.intervaloMaxSpawn = 1;
    this.siguienteAparicionFrame = 0;
    this.puntaje = 0;
    this.tamanoMaximoEnemigo = 70;
    this.frecuenciaMaximaSpawn = 200;
    this.imagenEnemigo = loadImage("data/enemigo.png");
    this.imagenJugador = loadImage("data/jugador.png");
    this.imagenFondo = loadImage("data/fondo.png");
    this.iniciarMinijuego = false;
  }



  setup() {
    createCanvas(windowWidth, windowHeight);
    this.siguienteAparicionFrame = frameCount + int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
  }

  update() {
    if (!this.gameOver || this.iniciarMinijuego) {
      this.jugador.x = mouseX;

      for (let i = this.enemigos.length - 1; i >= 0; i--) {
        this.enemigos[i].mover();
        if (dist(this.jugador.x, height - 20, this.enemigos[i].x, this.enemigos[i].y) < this.tamanoEnemigo / 2) {
          this.gameOver = true;
          break;
        }
      }

      if (this.iniciarMinijuego) {
        if (frameCount >= this.siguienteAparicionFrame) {
          for (let i = 0; i < 20; i++) {
            let enemigoX = random(width);
            let retrasoAparicion = int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
            this.enemigos.push(new Enemigo(enemigoX, 0, this.velocidadEnemigo, this.tamanoEnemigo, retrasoAparicion));
          }

          this.siguienteAparicionFrame = frameCount + int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
        }
      } else {
        if (frameCount >= this.siguienteAparicionFrame) {
          for (let i = 0; i < 20; i++) {
            let enemigoX = random(width);
            let retrasoAparicion = int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
            this.enemigos.push(new Enemigo(enemigoX, 0, this.velocidadEnemigo, this.tamanoEnemigo, retrasoAparicion));
          }

          this.siguienteAparicionFrame = frameCount + int(random(this.intervaloMinSpawn, this.intervaloMaxSpawn));
        }

        this.velocidadEnemigo += 0.002;

        if (this.tamanoEnemigo < this.tamanoMaximoEnemigo) {
          this.tamanoEnemigo += 0.02;
        }

        if (this.puntaje < 200) {
          this.intervaloMinSpawn = 1 - int(this.puntaje / 10);
          this.intervaloMaxSpawn = this.frecuenciaMaximaSpawn;
        }

        this.puntaje++;
      }
    }
  }

  draw() {
    background(this.imagenFondo);
    this.update()
    if (!this.gameOver) {
      this.jugador.mostrar();
      this.tablero.mostrar();

      for (let i = 0; i < this.enemigos.length; i++) {
        this.enemigos[i].mostrar();
      }
    } else {
      textSize(32);
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      text("TE HAN MATADO :(", width / 2, height / 2);
    }
  }

  windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
