
let allUser = [];

function signUp() {
  let user = {
    name: $("#name").val(),
    email: $("#email").val(),
    password: $("#pass").val(),
  };
  allUser.push(user);
  console.log(allUser);
}

function validateNameInput(ele) {
  console.log(ele.value);
  let nameReg = /^[a-zA-Z]{3,10}$/;
  if (nameReg.test(ele.value)) {
    ele.classList.add("is-valid");
    ele.classList.remove("is-invalid");
    ele.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  } else {
    ele.classList.add("is-invalid");
    ele.classList.remove("is-valid");
    ele.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  }
}

function validateEmailInput(ele) {
  let emailReg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (emailReg.test(ele.value)) {
    ele.classList.remove("is-invalid");
    ele.classList.add("is-valid");
    ele.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  } else {
    ele.classList.remove("is-valid");
    ele.classList.add("is-invalid");
    ele.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  }
}

function validatePassInput(ele) {
  let passReg = /^[0-9]{6,10}$/;
  if (passReg.test(ele.value)) {
    ele.classList.remove("is-invalid");
    ele.classList.add("is-valid");
    ele.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  } else {
    ele.classList.remove("is-valid");
    ele.classList.add("is-invalid");
    ele.nextElementSibling.classList.replace("d-none", "d-block");
    return false;
  }
}
