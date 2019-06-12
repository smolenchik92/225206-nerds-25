var button = document.querySelector(".button-contact");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close-popup");


button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
});