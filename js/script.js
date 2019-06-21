var button = document.querySelector(".button-contact");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close-popup");
var form = document.querySelector("[name=contact_us]");
var form_your_name = document.querySelector("[name=your_name]");
var form_email = document.querySelector("[name=email]");
var form_message = document.querySelector("[name=message]");
var isStorageSupport = true;
var storage = "";
  
try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    if (storage) {
        form_your_name.value = storage;
        form_email.focus();
    } else {
        form_your_name.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
    if (!form_your_name.value || !form_email.value || !form_message.value) {
        evt.preventDefault();
        popup.classList.remove("popup-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", form_your_name.value);
        }
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
