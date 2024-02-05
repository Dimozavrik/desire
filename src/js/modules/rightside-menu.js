function rightside() {
  const openBtn = document.querySelector(".header__btn");
  const closeBtn = document.querySelector(".rightside-menu__close");
  const rightsideMenu = document.querySelector(".rightside-menu");
  const rightsideOverlay = document.querySelector(".rightside-overlay");
  const body = document.querySelector("body");

  openBtn.onclick = rightsideToggle;
  closeBtn.onclick = rightsideToggle;
  rightsideOverlay.onclick = rightsideToggle;
  window.onkeyup = onRightsideEscPress;

  function rightsideToggle() {
    body.classList.toggle("no-scroll");
    rightsideMenu.classList.toggle("rightside-menu--close");
    rightsideOverlay.classList.toggle("rightside-overlay--open");
  }

  function onRightsideEscPress(e) {
    const event = e.keyCode;
    if (event == 27) {
      body.classList.remove("no-scroll");
      rightsideMenu.classList.remove("rightside-menu--close");
      rightsideOverlay.classList.remove("rightside-overlay--open");
    }
  }
}

export default rightside;
