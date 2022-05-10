let navBarList = document.querySelector(".navigation-bar__list");

navBarList.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.className == "itemAlliances") {
    let navCheckbox = document.querySelector(".navigation__checkbox");
    navCheckbox.checked = false;
  }
});
