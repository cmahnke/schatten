/*----- Imports -----*/

/*----- Page functions -----*/

window.addEventListener("load", (event) => {
  slider();
  links();
});


function links() {
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    const href = link.getAttribute("href")
    if (href.startsWith('#')) {
      console.log(href);
    }


  });
}

function slider() {
  const inactive = document.querySelectorAll('.section.column.inactive');
  inactive.forEach((column) => {
    column.addEventListener("click", (event) => {
      const active = document.querySelector('.section.column.active');
      event.currentTarget.classList.remove("inactive");
      event.currentTarget.classList.add("active");
      active.classList.remove("active");
      active.classList.add("inactive");
      slider();
    }, { once: true });
  });

}
