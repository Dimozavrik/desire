import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function blogPageSlider() {
  const swiper4 = new Swiper(".mySwiper4", {
    cssMode: true,
    pagination: {
      el: ".swiper-pagination-blog-page",
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-blog-page-next",
      prevEl: ".swiper-button-blog-page-prev",
    },
  });

  const swiperSlideBlogPage = document.querySelectorAll(
    ".swiper-slide-blog-page"
  );
  swiperSlideBlogPage.forEach((el) => {
    el.classList.add("swiper-no-swiping");
  });

  const swiperPaginationBullet = document.querySelectorAll(
    ".swiper-pagination-bullet"
  );
  swiperPaginationBullet.forEach((el) => {
    el.id = "scroll-top";
  });

  const scrollTop = document.querySelectorAll("#scroll-top");

  for (let i = 0; i < scrollTop.length; i++) {
    const element = scrollTop[i];
    element.addEventListener("click", topFunction);
  }

  function topFunction() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  new Swiper(".swiper-container", { simulateTouch: false });
}

export default blogPageSlider;
