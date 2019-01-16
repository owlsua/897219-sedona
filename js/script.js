var link = document.querySelector(".button-hotel-search");
var popup = document.querySelector(".modal-search");
var datein = document.querySelector("[name=date-in]");
var dateout = document.querySelector("[name=date-out]");
var adults = document.querySelector("[name=person-value-adults]");
var kids = document.querySelector("[name=person-value-kids]");
var form = popup.querySelector("form");


link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.toggle("modal-search-show");

});

form.addEventListener("submit", function (evt) {
   if (!datein.value || !dateout.value || !adults.value || !kids.value) {
   evt.preventDefault();
   popup.classList.remove("modal-search-error");
   popup.offsetWidth = popup.offsetWidth;
   popup.classList.add("modal-search-error");
  } 
});