class Carousel {
  /**
   *  Create a carousel from a list of images.
   *  @param {HTMLCollection} images - A list of images.
   */
  constructor(images, previousButton, nextButton) {
    this.currentIndex = 0;
    this.images = images;
    this.previousButton = previousButton;
    this.nextButton = nextButton;

    this.setup();
  }

  setup() {
    this.previousButton.addEventListener("click", this.previous.bind(this));
    this.nextButton.addEventListener("click", this.next.bind(this));
  }

  previous() {
    this.images[this.currentIndex].classList.remove("active");
    this.currentIndex = this.currentIndex - 1;
    this.images[this.currentIndex].classList.add("active");
  }

  next() {
    this.images[this.currentIndex].classList.remove("active");
    this.currentIndex = this.currentIndex + 1;
    this.images[this.currentIndex].classList.add("active");
  }
}
