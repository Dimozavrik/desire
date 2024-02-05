function comments() {
  let comments = [];

  loadComments();

  let commentName = document.getElementById("comment-name");
  let commentBody = document.getElementById("comment-body");
  let commentItem = document.querySelectorAll(
    ".blog-singlePost__comments-item"
  );
  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", formSend);
  }
  function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
      let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000),
      };
      commentName.value = "";
      commentBody.value = "";
      comments.push(comment);
      // saveComments();
      showComments();
      document
        .querySelector(".blog-singlePost__comments-descr")
        .classList.add("_disable");

      const placeholderForm = document.querySelectorAll(
        ".blog-singlePost__form-placeholder"
      );

      for (let i = 0; i < placeholderForm.length; i++) {
        const placeholder = placeholderForm[i];
        placeholder.classList.remove("top");
      }
    }
  }
  if (commentItem.length > 0) {
    document
      .querySelector(".blog-singlePost__comments-descr")
      .classList.add("_disable");
  }
  function formValidate(form) {
    let formReq = document.querySelectorAll("._req");
    let error = 0;
    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
    return error;
  }
  // function saveComments() {
  //   localStorage.setItem("comments", JSON.stringify(comments));
  // }
  function loadComments() {
    if (localStorage.getItem("comments")) {
      comments = JSON.parse(localStorage.getItem("comments"));
    }
    showComments();
  }
  function showComments() {
    let commentField = document.getElementById("comment-field");
    let out = "";
    comments.forEach((item) => {
      out += `<div class="blog-singlePost__comments-item">
                <div class="blog-singlePost__comments-person">
                  ${randomImg()}
                  <div class="blog-singlePost__comments-user">
                    <p class="blog-singlePost__comments-name">${item.name}</p>
                    <p class="blog-singlePost__comments-date">${timeConverter(
                      item.time
                    )}</p>
                  </div>
                  <button class="blog-singlePost__reply">Reply</button>
                </div>
                <div class="blog-singlePost__comments-comment">
                  <p class="blog-singlePost__comments-text">
                    ${item.body}
                  </p>
                </div>
              </div>`;
    });
    if (commentField) {
      commentField.innerHTML = out;
    }
  }
  function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = month + " " + date + "," + " " + year;
    return time;
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function randomImg() {
    const random = Math.floor(Math.random() * 5) + 1;
    return `<img
                  class="blog-singlePost__comments-avatar"
                  src="img\/icons-comment\/${random}.gif"
                  alt="Avatar"
                  draggable="false"
                />`;
  }
}

export default comments;
