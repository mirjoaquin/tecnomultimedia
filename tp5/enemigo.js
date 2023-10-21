class Bird {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.speed = random(2, 15);
  }

  update() {
    this.y += this.speed;
  }
  
  show() {
    image(birdImg, this.x - 20, this.y - 20, 70, 70);
   
}
}
