const carouselPanels = document.querySelectorAll(".carousel-panel");
const carouselPreviousButton = document.querySelector(".carousel-previous");
const carouselNextButton = document.querySelector(".carousel-next");

const carousel = new Carousel(
  carouselPanels,
  carouselPreviousButton,
  carouselNextButton
);
