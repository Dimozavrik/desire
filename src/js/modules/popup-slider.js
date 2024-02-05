import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function popupSlider() {
  const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 15,
    centeredSlides: true,
    breakpoints: {
      601: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
  const swiper1 = new Swiper(".mySwiper1", {
    navigation: {
      nextEl: ".swiper-popup-button-next",
      prevEl: ".swiper-popup-button-prev",
    },
    thumbs: {
      swiper: swiper2,
    },
    keyboard: {
      enabled: true,
    },
  });
}

export default popupSlider;
