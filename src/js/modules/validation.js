function validation() {
  const formInputs = document.querySelectorAll(".form__input");
  const formPlaceholders = document.querySelectorAll(".form__placeholder");
  const formEmails = document.querySelectorAll(".form__email");
  const placeholderEmails = document.querySelectorAll(".placeholder-email");

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }

  for (let i = 0; i < formPlaceholders.length; i++) {
    for (let i = 0; i < formInputs.length; i++) {
      const input = formInputs[i];
      const placeholder = formPlaceholders[i];

      input.onfocus = function () {
        input.value = input.value.trim();
        placeholder.classList.add("top");
        if (input.value !== "") {
          placeholder.classList.add("top");
          placeholder.style.color = "var(--text-color)";
        } else {
          placeholder.style.color = "var(--text-color)";
        }
      };
      input.onblur = function () {
        input.value = input.value.trim();
        placeholder.classList.remove("top");

        if (input.value !== "") {
          placeholder.classList.add("top");
          placeholder.style.color = "var(--clarified-gray)";
          input.classList.remove("_error");
        } else {
          input.classList.add("_error");
          placeholder.classList.remove("top");
          placeholder.style.color = "var(--clarified-gray)";
        }
        if (input.classList.contains("_error")) {
          placeholder.style.color = "var(--red)";
        }
      };
      input.oninput = function () {
        if (input.value.charAt(0) === " ") {
          input.value = "";
        }
        input.value =
          input.value.charAt(0).toUpperCase() + input.value.slice(1);
      };
    }
  }
  for (let i = 0; i < placeholderEmails.length; i++) {
    for (let i = 0; i < formEmails.length; i++) {
      const email = formEmails[i];
      const placeholderEmail = placeholderEmails[i];

      email.addEventListener("focus", function () {
        placeholderEmail.classList.add("top");

        if ((isEmailValid(email.value) === false) & (email.value !== "")) {
          placeholderEmail.innerText = "Your e-mail";
        }
      });

      email.addEventListener("blur", function () {
        if ((isEmailValid(email.value) === false) & (email.value !== "")) {
          placeholderEmail.innerText = "Invalid email address";
          email.classList.add("_error");
          placeholderEmail.style.color = "var(--red)";
        } else {
          placeholderEmail.innerText = "Your e-mail";
          email.classList.remove("_error");
          placeholderEmail.style.color = "var(--clarified-gray)";
        }

        if (email.value == "") {
          email.classList.add("_error");
          placeholderEmail.style.color = "var(--red)";
        }
      });

      email.addEventListener("input", function () {
        if (email.value.charAt(0) === " ") {
          email.value = "";
        }
        email.value =
          email.value.charAt(0).toLowerCase() + email.value.slice(1);
      });
    }
  }
}

export default validation;
