let navBarList = document.querySelector(".navigation-bar__list");
let projectsSection = document.querySelector(".projects-section");
let carouselEscape = document.querySelector(".carousel-section");

navBarList.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.className == "itemAlliances") {
    let navCheckbox = document.querySelector(".navigation__checkbox");
    navCheckbox.checked = false;
  }
});

projectsSection.addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.className == "text-container") {
    let carousel = document.querySelector(".carousel-section");
    let title = e.target.id;
    carousel.style.display = "flex";
    carousel.innerHTML = `<div class="carrousel">
    <h2 class="carousel-title">${title}</h2>
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="carrouselItem">
              <img
                class="carrousel-Image"
                src="./images/proyectos/${title}/1.jpeg"
              />
            </div>
          </li>
          <li class="glide__slide">
          <div class="carrouselItem">
            <img
              class="carrousel-Image"
              src="./images/proyectos/${title}/2.jpeg"
            />
          </div>
        </li>
        <li class="glide__slide">
        <div class="carrouselItem">
          <img
            class="carrousel-Image"
            src="./images/proyectos/${title}/3.${
      title == "Beat" ? "JPG" : "jpeg"
    }"
          />
        </div>
      </li>
      <li class="glide__slide">
      <div class="carrouselItem">
        <img
          class="carrousel-Image"
          src="./images/proyectos/${title}/4.jpeg"
        />
      </div>
    </li>
        </ul>
      </div>

      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
        <button class="glide__bullet" data-glide-dir="=3"></button>
      </div>
    </div>
  </div>`;
  }

  const config = {
    type: "carousel",
    perView: 1,
    startAt: 0,
    focusar: true,
    keyboard: true,
    hoverpause: true,
    gap: 0,
  };

  new Glide(".glide", config).mount();
});

carouselEscape.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.className == "carousel-section") {
    this.style.display = "none";
  }
});
