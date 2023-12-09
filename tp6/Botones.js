class Button {
  constructor(x, y, image, textoInicial) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.text = textoInicial;
  }

  display() { 
    image(this.image, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  

    fill(27,8,255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.text, this.x, this.y);
    
  }

  isMouseOver() {
    return mouseX > this.x - this.width / 2 &&
           mouseX < this.x + this.width / 2 &&
           mouseY > this.y - this.height / 2 &&
           mouseY < this.y + this.height / 2;
  }

  updateText(newText) {
    this.text = newText;
  }
}
