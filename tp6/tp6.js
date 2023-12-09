let screens = [];
let currentScreen;
let juego;

function preload() {
  buttonImageA = loadImage("data/boton.png", img => { img.resize(200, 100); });
  buttonImageB = loadImage("data/boton.png", img => { img.resize(200, 100); });
}

function setup() {
  let aspectRatio = 600 / 600;
  let canvasWidth = min(windowWidth, windowHeight * aspectRatio);
  let canvasHeight = min(windowHeight, windowWidth / aspectRatio);
  createCanvas(canvasWidth, canvasHeight);
  
  let screen0 = new Screen("","data/0.jpg", buttonImageA, buttonImageB);
  let screen1 = new Screen("La historia comienza con un hombre llamado Phileas Fogg \n era puntual y muy práctico, siempre daba con el camino \n más corto.", "data/1.jpeg", buttonImageA, buttonImageB);
  let screen2 = new Screen("Este hombre decidde hacer una apuesta con unos hombres en un club,\n la apuesta consistia en que Phileas Fogg\n diera la vuelta al mundo en 80 dias y si lo lograba ganaria 20.000 libras", "data/2.jpeg", buttonImageA, buttonImageB);
  let screen3 = new Screen("Phileas Fogg acepta la apueta y comienza su viaje con su compañero\n Jean Passepartout, ellos primero se dirigieron a Egipto", "data/3.jpeg", buttonImageA, buttonImageB);
  let screen4 = new Screen("En egipto se encontraron con un oficial de la corona britanica el cual\n estaba buscando al ladron del banco de Inglaterra y este oficial\n confunde a Phileas Fogg con el ladron", "data/4.jpeg", buttonImageA, buttonImageB);
  let screen5 = new Screen("Phileas Fogg y su compañero logran escapar del oficial y llegan a\n India donde conocen a una mujer llamada Aouda\n La cual decide acompañar a estos hombres en su viaje", "data/5.jpeg", buttonImageA, buttonImageB);
  let screen6 = new Screen("Ellos llegan a un puerto y intentan sobornar al capitan de un barco\n para que los lleve a Irlanda, pero el capitan te advierte de una gran tormenta, \n ahora tendras que elegir si afrontar la tormenta o esperar para que el capitan sarpe \n y de ahi ellos podran tomar un tren\n para llegar a Londres ", "data/6.jpeg", buttonImageA, buttonImageB);
  let screen7 = new Screen("Logran sobornar al capitan del barco y llegaron a Irlanda donde\n tomaron untren hacia londres, ya en londres Phileas Fogg\n Es detenido por el oficial, pero este deja libre a Fogg\n porque es informado de que el ladron ya fue capturado", "data/7.jpeg", buttonImageA, buttonImageB);
  let screen8 = new Screen("Entonces en ese momento Phileas Fogg se decepciona porque\n con su captura habia perdido demasiado tiempo\n debido a eso perdio la apuesta, asi que le pide a su compañero\n que valla a buscar un sacerdote para poder casarse con Aouda", "data/8.jpeg", buttonImageA, buttonImageB);
  let screen9 = new Screen("Cuando Jean Passepartout llega con el sacerdote el le dice que\n no los podria casar ese dia porque era domingo \n y la iglesia estaba cerrada, en ese momento Jean Passepartout\n se da cuenta que habian llegado un dia antes entonces le dice Fogg\n Entonces van a ganar la apuesta", "data/9.jpeg", buttonImageA, buttonImageB);
  let screen10 = new Screen("Finalmente Fogg se casa con Aouda y tambien logra ganar la apuesta\n de dar La vuelta al mundo en 80 dias. \n FIN.", "data/10.jpeg", buttonImageA, buttonImageB);
  let screen11 = new Screen("Pantalla 11", "data/11.png", buttonImageA, buttonImageB);
  let screen12 = new Screen("Lamentablemente Phileas Fogg es capturado por el oficial de la corona\n En egipto lo que proboca que no pueda terminar con el viaje y pierda\n la apuesta\n FIN.", "data/12.jpeg", buttonImageA, buttonImageB);
  let screen13 = new Screen("\n                                  El autor de esta novela fue Julio Verne\n                                  el cual fue un escritor, dramaturgo y poeta francés\n                                   el fue una gran influencia del genero literario\n                                  y de ciencia ficcion\n                                  El murio en el año 1905\n                                  NOMBRE :Joaquin Mir\n                                  COMISION :Comicion 5", "data/13.jpeg", buttonImageA, buttonImageB);

  screens.push(screen0);
  screens.push(screen1);
  screens.push(screen2);
  screens.push(screen3);
  screens.push(screen4);
  screens.push(screen5);
  screens.push(screen6);
  screens.push(screen7);
  screens.push(screen8);
  screens.push(screen9);
  screens.push(screen10);
  screens.push(screen11);
  screens.push(screen12);
  screens.push(screen13);

  currentScreen = screens[0];
  juego = new Juego();
  juego.setup();
}

function draw() {
  background(255);
  if (juego.gameOver) {
  } else {
    currentScreen.displayBackground();
    currentScreen.displayText();
    currentScreen.displayButtons();

    if (currentScreen.question === "Pantalla 11") {
      juego.update();
      juego.draw();
    }
  }
}
function updateButtonLabels() {
  currentScreen.option1.updateText("A");
  currentScreen.option2.updateText("B");
}


function mouseClicked() {
  let clickedButton = currentScreen.checkButtonClick();

  if (clickedButton !== null) {
     updateButtonLabels();
    if (juego.gameOver && currentScreen === screens[0]) {
      if (clickedButton === currentScreen.option1) {
        currentScreen = screens[11];
        juego.reiniciar();
        juego.setup();
        juego.iniciarMinijuego = true;
        console.log("Iniciando minijuego en Pantalla 11");
      } else if (clickedButton === currentScreen.option2) {
        let nextScreenIndex = currentScreen.getNextScreenIndex(clickedButton);
        if (nextScreenIndex !== null) {
          currentScreen = screens[nextScreenIndex];
          juego.reiniciar();
        } else {
          console.log("¡Fin del juego!");
        }
      }
    } else if (juego.gameOver) {
      let nextScreenIndex = currentScreen.getNextScreenIndex(clickedButton);
      if (nextScreenIndex !== null) {
        currentScreen = screens[nextScreenIndex];
        juego.reiniciar();
      } else {
        console.log("¡Fin del juego!");
      }
    } else {
      let nextScreenIndex = currentScreen.getNextScreenIndex(clickedButton);
      if (nextScreenIndex !== null) {
        currentScreen = screens[nextScreenIndex];
        if (currentScreen.question === "Pantalla 11") {
          juego.reiniciar();
          juego.setup();
          juego.iniciarMinijuego = true;
        }
      } else {
        console.log("¡Fin del juego!");
      }
    }
  }
}

class Screen {
  constructor(question, image, buttonImageA, buttonImageB) {
    this.question = question;
    this.image = loadImage(image);
    this.buttonImageA = buttonImageA;
    this.buttonImageB = buttonImageB;
    this.option1 = new Button(width / 2, height / 2, this.buttonImageA, "A");
    this.option2 = new Button((1.5 * width), height / 2, this.buttonImageB, "B");
  }

  displayBackground() {
    image(this.image, 0, 0, width, height);
  }

  displayText() {
    fill(27,8,255);
    textSize(24);
    textAlign(CENTER, TOP);
    text(this.question, width / 2, 20);
  }

  displayButtons() {
    this.option1.display();
    this.option2.display();
  }

  checkButtonClick() {
    if (this.option1.isMouseOver()) {
      return this.option1;
    } else if (this.option2.isMouseOver()) {
      return this.option2;
    }
    return null;
  }

getNextScreenIndex(clickedButton) {
    if (this === screens[0]) {
      this.option1.updateText("Comenzar");
      this.option2.updateText("Creditos");
      if (clickedButton === this.option1) {
        return 1;
      } else if (clickedButton === this.option2) {
        return 13;
      }
    } else if (this === screens[1]) {
      this.option1.updateText("Continuar");      
       this.option2.updateText("Volver");
      if (clickedButton === this.option1) {
        return 2; 
        } else if (clickedButton === this.option2) {
        return 0;
      }
    } else if (this === screens[2]) {
      this.option1.updateText("Continuar");
      this.option2.updateText("Volver");
      if (clickedButton === this.option1) {
        return 3; 
        } else if (clickedButton === this.option2) {
        return 1;
      }
    } else if (this === screens[3]) {
      this.option1.updateText("Continuar");
      this.option2.updateText("Volver");
      if (clickedButton === this.option1) {
        return 4;
        } else if (clickedButton === this.option2) {
        return 2;
        }
    } else if (this === screens[4]) {
      this.option1.updateText("A");
      this.option2.updateText("B");
      if (clickedButton === this.option1) {
        return 5;
      } else if (clickedButton === this.option2) {
        return 12;
      }
    } else if (this === screens[5]) {
      this.option1.updateText("Continuar");
      this.option2.updateText("Volver");
     if (clickedButton === this.option1) {
        return 6;
     } else if (clickedButton === this.option2) {
        return 4;
      }
    } else if (this === screens[6]) {
      this.option1.updateText("Tomar");
     
      if (clickedButton === this.option1) {
        return 7;
       } else if (clickedButton === this.option2) {
        return 11;
        juego.iniciarMinijuego = true;
      }
    } else if (this === screens[7]) {
      this.option1.updateText("Continuar");
     this.option2.updateText("Volver");
      if (clickedButton === this.option1) {
        return 8;
        } else if (clickedButton === this.option2) {
        return 6;
      }
    } else if (this === screens[8]) {
      this.option1.updateText("Seguir");
      this.option2.updateText("Volver");
       if (clickedButton === this.option1) {
        return 9;  
        } else if (clickedButton === this.option2) {
        return 7;
      }
    } else if (this === screens[9]) {
      this.option1.updateText("Seguir");  
      this.option2.updateText("Volver");
      if (clickedButton === this.option1) {
       return 10;  
       } else if (clickedButton === this.option2) {
        return 8;
      }
    }
    else if (this === screens[10]) {
      this.option1.updateText("Aceptar");
     
      if (clickedButton === this.option1) {
        return 0;
      } 
      else if (this === screens[11]){
      this.juego.update();
    }
    } else if (this === screens[12]) {
      this.option1.updateText("Ignorar"); 
      this.option2.updateText("Volver");
      if (clickedButton === this.option1) {
        return 0;
        } else if (clickedButton === this.option2) {
        return 0;
      }
    } else if (this === screens[13]) {
      this.option1.updateText("volver");
      this.option2.updateText("Volver");
      if (clickedButton === this.option1) {
        return 0;
        } else if (clickedButton === this.option2) {
        return 0;
     }
   }
    return null;
  }
 }
