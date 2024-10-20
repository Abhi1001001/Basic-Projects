let passError = document.getElementsByClassName("pass-error")[0];
let cnfPassError = document.getElementsByClassName("cnfPass-error")[0];
let getPass = document.getElementById("password");
let passMatchError = document.getElementsByClassName("pass-match-error")[0];
let loginbtn = document.getElementsByClassName("logbtn")[0];
let forgetbtn = document.getElementsByClassName("forgetbtn")[0];
let cnfPassInput = document.getElementsByClassName("cnfPass")[0];
let legend = document.getElementsByTagName("h2")[0];
let inputs = document.getElementsByTagName("input");

const lowerCase = new RegExp("(?=.*[a-z])");
const upperCase = new RegExp("(?=.*[A-Z])");
const numeric = new RegExp("(?=.*[0-9])");
const special = new RegExp("(?=.*[!@#$%^&*])");
const eightcr = new RegExp("(?=.{8,})");

function passCheck(event) {
  let data = event.target.value;
  if (
    eightcr.test(data) &&
    lowerCase.test(data) &&
    upperCase.test(data) &&
    numeric.test(data) &&
    special.test(data)
  ) {
    passError.classList.remove("show");
    passError.classList.add("hide");
  } else {
    passError.classList.remove("hide");
    passError.classList.add("show");
  }
}
const cnfPassCheck = (event) => {
  if (getPass.value != event.target.value) {
    cnfPassError.innerText = "Password not match";
  } else {
    cnfPassError.innerText = "";
  }
};
const final = (event) => {
  event.preventDefault();

  if (loginbtn.innerText == "Are you already an user? Login") {
    if (
      getPass.value === cnfPassInput.value &&
      eightcr.test(getPass.value) &&
      lowerCase.test(getPass.value) &&
      upperCase.test(getPass.value) &&
      numeric.test(getPass.value) &&
      special.test(getPass.value)
    ) {
      alert(`Username : ${inputs[0].value} \nPassword : ${inputs[1].value}`);
    } else {
      alert("Error : Please enter all valid details");
    }
  } else {
    if (
      eightcr.test(getPass.value) &&
      lowerCase.test(getPass.value) &&
      upperCase.test(getPass.value) &&
      numeric.test(getPass.value) &&
      special.test(getPass.value)
    ) {
      alert(`Username : ${inputs[0].value} \nPassword : ${inputs[1].value}`);
    } else {
      alert("Error : Please enter all valid details");
    }
  }
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
    forgetbtn.classList.add("hide");
    legend.innerText = "Sign-Up";
  }
}
