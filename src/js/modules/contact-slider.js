import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function contactSlider() {
  const swiper6 = new Swiper(".mySwiper6", {
    spaceBetween: 70,
    cssMode: true,
    pagination: {
      el: ".swiper-pagination-contact",
      clickable: "true",
    },
  });
  const swiper7 = new Swiper(".mySwiper7", {
    cssMode: true,
    spaceBetween: 19,
    slidesPerView: 11,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-contact-next",
      prevEl: ".swiper-button-contact-prev",
    },
  });
}

export default contactSlider;
