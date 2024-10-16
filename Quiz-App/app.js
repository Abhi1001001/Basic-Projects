let option = document.querySelectorAll("li");
let mark = document.querySelectorAll(".options img");
let choice = document.querySelectorAll(".options p");
let home = document.querySelector(".home");
let question = document.querySelectorAll(".question-page");


// answer checking --------->
const checkA = () => { 
  option[0].style.borderColor = "red";
  option[1].style.borderColor = "green";
  mark[0].classList.remove("hide");
  choice[0].classList.remove("hide");
  mark[1].classList.remove("hide")
};

const checkB = () => {
  option[1].style.borderColor = "green";
  mark[1].classList.remove("hide")
  choice[1].classList.remove("hide")
};

const checkC = () => {
  option[2].style.borderColor = "red";
  option[1].style.borderColor = "green";
  mark[2].classList.remove("hide");
  choice[2].classList.remove("hide");
  mark[1].classList.remove("hide")
};

const checkD = () => {
  option[3].style.borderColor = "red";
  option[1].style.borderColor = "green";
  mark[3].classList.remove("hide");
  choice[3].classList.remove("hide");
  mark[1].classList.remove("hide")
};


// question navigations ----------->
const goBackHome = () =>{
  home.classList.remove("hide");
  question[0].classList.add("hide");
}
const goToQuestion1 = () =>{
  home.classList.add("hide");
  question[0].classList.remove("hide");
}
const goBackQuestion1 = () =>{
  question[0].classList.remove("hide");
  question[1].classList.add("hide");
}
const goToQuestion2 = () =>{
  question[0].classList.add("hide");
  question[1].classList.remove("hide");
}
const goBackQuestion2 = () =>{
  question[1].classList.remove("hide");
  question[2].classList.add("hide");
}
const goToQuestion3 = () =>{
  question[1].classList.add("hide");
  question[2].classList.remove("hide");
}
const goBackQuestion3 = () =>{
  question[2].classList.remove("hide");
  question[3].classList.add("hide");
}
const goToQuestion4 = () =>{
  question[2].classList.add("hide");
  question[3].classList.remove("hide");
}
const goBackQuestion4 = () =>{
  question[3].classList.remove("hide");
  question[4].classList.add("hide");
}
const goToQuestion5 = () =>{
  question[3].classList.add("hide");
  question[4].classList.remove("hide");
}
const goBackQuestion5 = () =>{
  question[4].classList.remove("hide");
  question[5].classList.add("hide");
}
const goToQuestion6 = () =>{
  question[4].classList.add("hide");
  question[5].classList.remove("hide");
}
const goBackQuestion6 = () =>{
  question[5].classList.remove("hide");
  question[6].classList.add("hide");
}
const goToQuestion7 = () =>{
  question[5].classList.add("hide");
  question[6].classList.remove("hide");
}
const goBackQuestion7 = () =>{
  question[6].classList.remove("hide");
  question[7].classList.add("hide");
}
const goToQuestion8 = () =>{
  question[6].classList.add("hide");
  question[7].classList.remove("hide");
}
const goBackQuestion8 = () =>{
  question[7].classList.remove("hide");
  question[8].classList.add("hide");
}
const goToQuestion9 = () =>{
  question[7].classList.add("hide");
  question[8].classList.remove("hide");
}
const goBackQuestion9 = () =>{
  question[8].classList.remove("hide");
  question[9].classList.add("hide");
}
const goToQuestion10 = () =>{
  question[8].classList.add("hide");
  question[9].classList.remove("hide");
}
