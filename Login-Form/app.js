let passError = document.getElementsByClassName("pass-check");
let getPass = document.getElementById("pass");
let passMatchError = document.getElementsByClassName("pass-match-error")[0];
let loginbtn = document.getElementById("logbtn");
let forgetbtn = document.getElementsByClassName("forgetbtn")[0];
let cnfPassInput = document.getElementById("cnfPass");
let legend = document.getElementsByTagName("h2")[0];
let inputs = document.getElementsByTagName("input");

function passcheck(data) {
  const lowerCase = new RegExp("(?=.*[a-z])");
  const upperCase = new RegExp("(?=.*[A-Z])");
  const numeric = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const eightcr = new RegExp("(?=.{8,})");

  if (eightcr.test(data)) {
    passError[0].style.color = "green";
  }
  if (lowerCase.test(data)) {
    passError[1].style.color = "green";
  }
  if (upperCase.test(data)) {
    passError[2].style.color = "green";
  }
  if (numeric.test(data)) {
    passError[3].style.color = "green";
  }
  if (special.test(data)) {
    passError[4].style.color = "green";
  }
}
const check = (data) => {
  if (getPass.value != data) {
    passMatchError.innerText = "Password not match";
  } else {
    passMatchError.innerText = "";
  }
};
const final = (event) => {
  event.preventDefault();
  alert(`
    Username = ${inputs[0].value}
    Password = ${inputs[1].value}
    `);
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
};

loginbtn.addEventListener("click", loginUser);

function loginUser() {
  if (loginbtn.innerText == "Are you already an user? Login") {
    loginbtn.innerText = "Do you not have an account? New User";
    cnfPassInput.classList.add("hide");
    forgetbtn.classList.remove("hidden");
    legend.innerText = "Log-in";
  } else {
    loginbtn.innerText = "Are you already an user? Login";
    cnfPassInput.classList.remove("hide");
    forgetbtn.classList.add("hidden");
    legend.innerText = "Sign-Up";
  }
}
