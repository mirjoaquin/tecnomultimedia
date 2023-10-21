class Balloon {
  
  
  constructor(img) {
    this.x = width / 2;
    this.y = height - 50;
 
}

  move(dir) {
    this.x += dir * 5;
}

  update() {

    this.x = constrain(this.x, 20, width - 20);
    if (keyIsDown(LEFT_ARROW)) {
    balloon.move(-1);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    balloon.move(1);
  }

}
  show() {
  
    image(balloonImg, this.x - 20, this.y - 20, 100, 100);
  }

  hits(bird) {
    let d = dist(this.x, this.y, bird.x, bird.y);
    return d < 20;
  }
}
