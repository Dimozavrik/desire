function search() {
  const search = document.getElementById("search");
  const clear = document.querySelector(".aside__search-clear");

  function validate() {
    if (search.value.length) {
      clear.classList.add("aside__search-clear--active");
      search.addEventListener("focus", function () {
        clear.classList.add("aside__search-clear--active");
      });
    } else {
      clear.classList.remove("aside__search-clear--active");
      search.addEventListener("focus", function () {
        clear.classList.remove("aside__search-clear--active");
      });
    }
  }

  function reset() {
    search.value = "";
    search.addEventListener("focus", function () {
      clear.classList.remove("aside__search-clear--active");
    });
    search.focus();
  }

  if ((search, clear)) {
    search.addEventListener("input", validate);
    clear.addEventListener("click", reset);
  }
}

export default search;
