import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function topSlider() {
  const swiper = new Swiper(".mySwiper", {
    parallax: true,
    loop: true,
    speed: 1000,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
  });
}

export default topSlider;
