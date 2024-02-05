function validateFormContact() {
  const formContact = document.getElementById("formContact");

  if (formContact) {
    formContact.addEventListener("submit", formSend);
  }
  function formSend(e) {
    e.preventDefault();

    let error = formValidate(formContact);

    if (error === 0) {
      location.reload();
    }
  }
  function formValidate(formContact) {
    let formReq = document.querySelectorAll("._req");
    const formPlaceholder = document.querySelectorAll(".form__placeholder");
    let error = 0;
    for (let i = 0; i < formPlaceholder.length; i++) {
      for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        const placeholder = formPlaceholder[i];
        formRemoveError(input);

        if (input.value === "") {
          formAddError(input);
          error++;
          placeholder.style.color = "red";
          placeholder.classList.remove("top");
        }
      }
      return error;
    }
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

export default validateFormContact;
