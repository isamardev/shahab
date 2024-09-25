const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2000, // 2 seconds between slides, adjust the value as needed
      disableOnInteraction: false // Autoplay will continue after user interaction
    },
    // Pagination bullets
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   dynamicBullets: true
    // },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 1
      }
    }
  });
  