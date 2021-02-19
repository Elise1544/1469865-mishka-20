var menuButton = document.querySelector(".page-header__button");
var navList = document.querySelector(".nav-list");
var userList = document.querySelector(".user-list");

document.addEventListener("DOMContentLoaded", function(evt) {
  navList.classList.remove("nav-list--mobile");
  userList.classList.remove("user-list--mobile");
  menuButton.classList.add("page-header__button--closed");
});

menuButton.addEventListener("click", function(evt) {
  if (menuButton.classList.contains("page-header__button--closed")) {
    evt.preventDefault();
    menuButton.classList.remove("page-header__button--closed");
    menuButton.classList.add("page-header__button--opened");
    navList.classList.add("nav-list--mobile");
    userList.classList.add("user-list--mobile");
  } else {
    evt.preventDefault();
    menuButton.classList.remove("page-header__button--opened");
    menuButton.classList.add("page-header__button--closed");
    navList.classList.remove("nav-list--mobile");
    userList.classList.remove("user-list--mobile");
  }
});


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

modalWrapper.addEventListener("click", function (evt) {
  if (modal.classList.contains("modal-show")) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
    modalWrapper.classList.remove("modal-wrapper--active");
  }
});
