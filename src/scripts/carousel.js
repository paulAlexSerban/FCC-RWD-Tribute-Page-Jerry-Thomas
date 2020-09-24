class Carousel {
  constructor() {
    this.mainInit();
  }

  setupDOMRef() {
    this.slides = document.querySelectorAll('.hero__figure');
    this.next = document.querySelector('.hero__next');
    this.prev = document.querySelector('.hero__previous');
  }

  setupEvents() {
    this.next.addEventListener('click', () => this.plusSlides(1));
    this.prev.addEventListener('click', () => this.plusSlides(-1));
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
    this.slides[this.slideIndex - 1].style.display = "block";
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  setupIndex() {
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
  }

  mainInit() {
    this.setupDOMRef();
    this.setupEvents();
    this.setupIndex();
  };
}

function main() {
  let carousel = new Carousel();
};

main();