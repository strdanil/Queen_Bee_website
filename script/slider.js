document.addEventListener("DOMContentLoaded", function() {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    const prevButton = slider.parentElement.querySelector('.prev-button');
    const nextButton = slider.parentElement.querySelector('.next-button');
    const slides = Array.from(slider.children);
    const slideCount = slides.length;
    let slideIndex = 0;
    let startX = 0;
    let endX = 0;

    prevButton.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + slideCount) % slideCount;
      slide();
    });

    nextButton.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % slideCount;
      slide();
    });

    const slide = () => {
      const slideOffset = -slideIndex * slider.clientWidth;
      slider.style.transform = `translateX(${slideOffset}px)`;
    };

    // Add touch event listeners for swipe
    slider.addEventListener('touchstart', touchStart);
    slider.addEventListener('touchmove', touchMove);
    slider.addEventListener('touchend', touchEnd);

    function touchStart(e) {
      startX = e.touches[0].clientX;
    }

    function touchMove(e) {
      endX = e.touches[0].clientX;
      e.preventDefault();
    }

    function touchEnd() {
      const swipeThreshold = 50;
      const swipeDistance = startX - endX;

      if (swipeDistance > swipeThreshold) {
        slideIndex = (slideIndex + 1) % slideCount;
      } else if (swipeDistance < -swipeThreshold) {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
      }
      
      slide();
      startX = 0;
      endX = 0;
    }

    window.addEventListener('load', () => {
      slide();
    });
  });
});
