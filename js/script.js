var link = document.querySelector(".button-hotel-search");
var popup = document.querySelector(".modal-search");

link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.toggle("modal-search-show");

});
