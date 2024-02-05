function asideBarSinglePost() {
  const asideSingle = document.querySelector(".aside-single");
  const asideFilters = document.querySelector(".aside__filters");
  const asideTools = document.querySelector(".aside__tools");

  if (asideFilters) {
    asideFilters.onclick = function () {
      asideSingle.classList.toggle("aside-single--pull");
      asideTools.classList.toggle("aside__tools--open");
      asideFilters.classList.toggle("aside__filters--active");
    };
  }
}

export default asideBarSinglePost;
