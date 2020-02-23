window.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const images = document.querySelectorAll('.carousel-item');
  let offset = 0;

  const delay = (ms) => new Promise((res) => setTimeout(() => res(), ms));

  carouselContainer.style.transform = `translateX(0%)`;
  carouselContainer.style.transition = 'all 1s ease';

  setInterval(async () => {
    offset = (offset + 1) % images.length;
    if (offset === 0) {
      carouselContainer.style.transition = 'none';
      carouselContainer.style.transform = 'none';
      await delay(10);
      carouselContainer.style.transition = 'all 1s ease';
      offset++;
    }
    carouselContainer.style.transform = `translateX(-${offset}00%)`;
  }, 8000);

});