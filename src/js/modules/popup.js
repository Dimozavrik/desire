function popup() {
  const popup = document.querySelector(".popup");
  const closeBtn = document.querySelector(".popup__close-btn");
  const body = document.querySelector("body");

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      popup.classList.remove("popup--open");
      body.classList.remove("no-scroll");
    });
  }
  if (popup) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        popup.classList.remove("popup--open");
        body.classList.remove("no-scroll");
      }
    });
  }
}

export default popup;
