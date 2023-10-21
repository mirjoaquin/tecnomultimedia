class Background {
  constructor(img) {
    this.img = img;
  }

  display() {
    image(this.img, 0, 0, width, height);
  }
}
