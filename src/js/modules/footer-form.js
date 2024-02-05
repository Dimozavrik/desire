function footerFormValid() {
  const footerForm = document.querySelector(".footer__form");
  const input = document.querySelector("._require");
  input.value = input.value.trim();

  if (footerForm) {
    footerForm.addEventListener("submit", formSend);
  }
  function formSend(e) {
    e.preventDefault();

    let error = formValidate(footerForm);

    if (error === 0) {
      location.reload();
    }
  }
  function formValidate(footerForm) {
    let error = 0;
    const placeholder = document.querySelector(".footer__form-placeholder");
    formRemoveError(input);

    if (input.value === "") {
      formAddError(input);
      error++;
      placeholder.style.color = "red";
      placeholder.classList.remove("top");
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
}

export default footerFormValid;
