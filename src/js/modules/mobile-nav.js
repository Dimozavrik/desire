function mobileNav() {
  const mobileNav = document.querySelector("#mobileNav");
  const mobileBtn = document.querySelector(".header__btn-menu");
  const menu = document.querySelectorAll(".menu");
  const headerOverlay = document.querySelector(".header-overlay");
  const body = document.querySelector("body");

  mobileBtn.onclick = mobileNavToggle;
  headerOverlay.onclick = mobileNavToggle;
  window.addEventListener("keyup", onHeaderOverlayEscPress);

  function mobileNavToggle() {
    mobileNav.classList.toggle("mobile-nav--active");
    menu.forEach((el) => el.classList.toggle("menu--open"));
    mobileBtn.classList.toggle("active");
    headerOverlay.classList.toggle("header-overlay--open");
    body.classList.toggle("no-scroll");
  }

  function onHeaderOverlayEscPress(e) {
    const event = e.keyCode;
    if (event == 27) {
      menu.forEach((el) => el.classList.remove("menu--open"));
      mobileBtn.classList.remove("active");
      headerOverlay.classList.remove("header-overlay--open");
      body.classList.remove("no-scroll");
    }
  }
}

export default mobileNav;
