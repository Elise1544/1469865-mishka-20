var menuButton = document.querySelector(".page-header__button");
var navList = document.querySelector(".nav-list");
var userList = document.querySelector(".user-list");

menuButton.addEventListener("click", function(evt) {
  if (menuButton.classList.contains("page-header--closed")) {
    evt.preventDefault();
    menuButton.classList.remove("page-header--closed");
    menuButton.classList.add("page-header--opened");
    navList.classList.add("nav-list--mobile");
    userList.classList.add("user-list--mobile");
  } else {
    evt.preventDefault();
    menuButton.classList.remove("page-header--opened");
    menuButton.classList.add("page-header--closed");
    navList.classList.remove("nav-list--mobile");
    userList.classList.remove("user-list--mobile");
  }
}
);


var modalLink = document.querySelectorAll(".modal-button");
var modal = document.querySelector(".modal");
var modalWrapper = document.querySelector(".modal-wrapper");

modalLink.forEach(function (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
    modalWrapper.classList.add("modal-wrapper--active");
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modalWrapper.classList.remove("modal-wrapper--active");
    }
  }
});

