var button = document.querySelector(".button-contact");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close-popup");
var form = document.querySelector("[name=contact_us]");
var formName = document.querySelector("[name=your_name]");
var formEmail = document.querySelector("[name=email]");
var formMessage = document.querySelector("[name=message]");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
    if (!formName.value || !formEmail.value || !formMessage.value) {
        evt.preventDefault();
        popup.classList.remove("popup-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup-error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        popup.classList.remove("popup-error");
      }
    }
  });
