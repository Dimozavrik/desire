function gallery() {
  const tabsBtn = document.querySelectorAll(".gallery__btn");
  const tabsContent = document.querySelectorAll(".gallery__content-item");
  const openPopup = document.querySelectorAll(".gallery__content-link");
  const popup = document.querySelector(".popup");
  const body = document.querySelector("body");

  tabsBtn.forEach((el) => {
    el.addEventListener("click", open);
  });
  function open(evt) {
    const tabTarget = evt.currentTarget;
    const btn = tabTarget.dataset.btn;

    tabsBtn.forEach((item) => {
      item.classList.remove("gallery__btn--active");
    });

    tabTarget.classList.add("gallery__btn--active");

    tabsContent.forEach((item) => {
      item.classList.remove("gallery__content-item--active");
      item.classList.remove("gallery__content-item--anim");
    });

    document
      .querySelector(`#${btn}`)
      .classList.add("gallery__content-item--active");
    document
      .querySelector(`#${btn}`)
      .classList.add("gallery__content-item--anim");
  }

  for (let i = 0; i < openPopup.length; i++) {
    const element = openPopup[i];
    if (element) {
      element.addEventListener("click", function () {
        popup.classList.add("popup--open");
        body.classList.add("no-scroll");
      });
    }
  }
}

export default gallery;
