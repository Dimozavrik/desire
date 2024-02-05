function worksPath() {
  const worksPathBox = document.querySelector(".works-path__items-box");
  const worksPathMeasuring = document.querySelector(
    ".works-path__item--measuring"
  );

  window.addEventListener("resize", mediaRequest);
  window.addEventListener("load", mediaRequest);

  function mediaRequest() {
    if (worksPathBox) {
      if (window.innerWidth < 769) {
        worksPathBox.appendChild(worksPathMeasuring);
      } else {
        worksPathBox.after(worksPathMeasuring);
      }
    }
  }
}

export default worksPath;
