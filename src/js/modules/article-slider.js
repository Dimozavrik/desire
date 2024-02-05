import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function articleSlider() {
  const swiper3 = new Swiper(".mySwiper3", {
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    parallax: true,
    navigation: {
      nextEl: ".swiper-article__button-next",
      prevEl: ".swiper-article__button-prev",
    },
  });
}

export default articleSlider;
