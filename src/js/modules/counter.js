function counter() {
  const percentage = document.querySelectorAll(".inspiration__item-percentage");
  for (let i = 0; i < percentage.length; i++) {
    const el = percentage[i];
    let percentageTop = el.getBoundingClientRect().top,
      end = +el.dataset.max;
    window.addEventListener("scroll", function onScroll() {
      if (window.scrollY > percentageTop - window.innerHeight / 1.5) {
        let step = 1;
        let n = 0;
        this.removeEventListener("scroll", onScroll);
        el.classList.add("_run");
        const interval = setInterval(() => {
          n = n + step;
          if (n >= end) {
            clearInterval(interval);
            n = end;
          }
          el.innerHTML = n + "%";
        }, 30);
      }
    });
  }
}

export default counter;
