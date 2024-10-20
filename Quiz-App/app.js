let option = document.querySelectorAll("li");
let choice = document.querySelectorAll(".options p");
let closeIcon = document.querySelectorAll(".close");
let checkIcon = document.querySelectorAll(".check");
let optionBtn = document.querySelectorAll(".options button");
let home = document.querySelector(".home");
let questionPage = document.querySelector(".question-page");
let question = document.querySelector(".question");
let timer = document.querySelector(".timer");
let timerCount = document.querySelector(".timer span");
let scoreDiv = document.querySelector(".score");
let score = document.querySelector(".score h1");
let questionCount = 0;
let scoreCount = 0;
let sec=59;
let min=4;

// object of questions ----------->
const questions = [
  {
    id: 1,
    question: "What does the typeof operator return when applied to an array?",
    a: "array",
    b: "object",
    c: "list",
    d: "collection",
    answer: "object",
  },
  {
    id: 2,
    question: "Which method can be used to combine two or more arrays?",
    a: "concat()",
    b: "join()",
    c: "merge()",
    d: "append()",
    answer: "append()",
  },
  {
    id: 3,
    question: "Which of the following is a feature of ES6 (ECMAScript 2015)?",
    a: "var keyword",
    b: "Arrow functions",
    c: "for loop",
    d: "function keyword",
    answer: "Arrow functions",
  },
  {
    id: 4,
    question:
      "Which keyword is used to declare a block-scoped variable in JavaScript?",
    a: "var",
    b: "let",
    c: "static",
    d: "block",
    answer: "let",
  },
  {
    id: 5,
    question: "What will happen if you try to reassign a const variable?",
    a: "It will be updated successfully",
    b: "It will throw a TypeError",
    c: "It will be ignored",
    d: "It will be converted to let",
    answer: "It will throw a TypeError",
  },
  {
    id: 6,
    question: "What does the setTimeout() function do?",
    a: "Executes a function after a specified delay",
    b: "Repeats a function at specified intervals",
    c: "Pauses execution of a function",
    d: "Cancels a function execution",
    answer: "Executes a function after a specified delay",
  },
  {
    id: 7,
    question: "What is the scope of a variable declared with let?",
    a: "Global scope",
    b: "Function scope",
    c: "None of the above",
    d: "Block scope",
    answer: "Block scope",
  },
  {
    id: 8,
    question: "What does the this keyword refer to in a regular function?",
    a: "The global object",
    b: "The function itself",
    c: "The object that the function is a method of",
    d: "None of the above",
    answer: "The object that the function is a method of",
  },
  {
    id: 9,
    question:
      "Which method would you use to add a new element at the start of an array?",
    a: "push()",
    b: "unshift()",
    c: "shift()",
    d: "splice()",
    answer: "unshift()",
  },
  {
    id: 10,
    question: "What is the correct way to declare a variable in JavaScript?",
    a: "x = 10",
    b: "var x = 10",
    c: "x = 10",
    d: "int x = 10",
    answer: "var x = 10",
  },
];

// Show score function ---------->
const showScore = () => {
  home.classList.add("hide");
  timer.classList.add("hide");
  questionPage.classList.add("hide");
  scoreDiv.classList.remove("hide");
  questionCount = 0;
  if(min<=0){
    score.innerHTML = `<h1>Your time is over</h1> <br/> <h2>score is ${scoreCount} out of 10</h2>`
  }else{
    score.innerHTML = `<h1>Your score is ${scoreCount} out of 10</h1>`
  }
};

// disable button ------------->
const disableBtn = () =>{
  for(let index = 0; index < 4; index++){
  optionBtn[index].setAttribute('disabled','true');
  }
} 

// enable button ------------->
const enableBtn = () =>{
  for(let index = 0; index < 4; index++){
  optionBtn[index].removeAttribute('disabled');
  }
} 



// answer checking function for each option --------->
const checkA = () => {
  choice[0].classList.remove("hide");
  if (option[0].innerText === questions[questionCount].answer) {
    optionBtn[0].style.borderColor = "#00FF9C";
    checkIcon[0].classList.remove("hide");
    scoreCount++;
  } else {
    optionBtn[0].style.borderColor = "#F5004F";
    closeIcon[0].classList.remove("hide");
    for (let index = 0; index < 4; index++) {
      if (option[index].innerText === questions[questionCount].answer) {
        checkIcon[index].classList.remove("hide");
        optionBtn[index].style.borderColor = "#00FF9C";
      }
    }
  }
  disableBtn();
};
const checkB = () => {
  choice[1].classList.remove("hide");
  if (option[1].innerText === questions[questionCount].answer) {
    optionBtn[1].style.borderColor = "#00FF9C";
    checkIcon[1].classList.remove("hide");
    scoreCount++;
  } else {
    optionBtn[1].style.borderColor = "#F5004F";
    closeIcon[1].classList.remove("hide");
    for (let index = 0; index < 4; index++) {
      if (option[index].innerText === questions[questionCount].answer) {
        checkIcon[index].classList.remove("hide");
        optionBtn[index].style.borderColor = "#00FF9C";
      }
    }
  }
  disableBtn();
};
const checkC = () => {
  choice[2].classList.remove("hide");
  if (option[2].innerText === questions[questionCount].answer) {
    optionBtn[2].style.borderColor = "#00FF9C";
    checkIcon[2].classList.remove("hide");
    scoreCount++;
  } else {
    optionBtn[2].style.borderColor = "#F5004F";
    closeIcon[2].classList.remove("hide");
    for (let index = 0; index < 4; index++) {
      if (option[index].innerText === questions[questionCount].answer) {
        checkIcon[index].classList.remove("hide");
        optionBtn[index].style.borderColor = "#00FF9C";
      }
    }
  }
  disableBtn();
};
const checkD = () => {
  choice[3].classList.remove("hide");
  if (option[3].innerText === questions[questionCount].answer) {
    optionBtn[3].style.borderColor = "#00FF9C";
    checkIcon[3].classList.remove("hide");
    scoreCount++;
  } else {
    optionBtn[3].style.borderColor = "#F5004F";
    closeIcon[3].classList.remove("hide");
    for (let index = 0; index < 4; index++) {
      if (option[index].innerText === questions[questionCount].answer) {
        checkIcon[index].classList.remove("hide");
        optionBtn[index].style.borderColor = "#00FF9C";
      }
    }
  }
  disableBtn();
};

// Reset answer function ------------->
const resetAnswer = () => {
  for (let index = 0; index < 4; index++) {
    optionBtn[index].style.borderColor = "#a8a8a8";
    choice[index].classList.add("hide");
    checkIcon[index].classList.add("hide");
    closeIcon[index].classList.add("hide");
  }
};

// question navigations function for start question----------->
const startQuestion = () => {
  home.classList.add("hide");
  questionPage.classList.remove("hide");
  timer.classList.remove("hide");
  scoreDiv.classList.add("hide");
  sec = 59;
  min = 4;
  resetAnswer();
  enableBtn();
  question.innerText = `${questions[questionCount].id}. ${questions[questionCount].question}`;
  option[0].innerText = questions[questionCount].a;
  option[1].innerText = questions[questionCount].b;
  option[2].innerText = questions[questionCount].c;
  option[3].innerText = questions[questionCount].d;
};

// question navigations function for next question----------->
const goToNextQuestion = () => {
  if (questionCount < 9) {
    questionCount++;
    question.innerText = `${questions[questionCount].id}. ${questions[questionCount].question}`;
    option[0].innerText = questions[questionCount].a;
    option[1].innerText = questions[questionCount].b;
    option[2].innerText = questions[questionCount].c;
    option[3].innerText = questions[questionCount].d;
    resetAnswer();
    enableBtn();
  } else {
    showScore();
  }
};

// question navigations function for previous question----------->
const goToPreviousQuestion = () => {
  if (questionCount > 0) questionCount--;
  question.innerText = `${questions[questionCount].id}. ${questions[questionCount].question}`;
  option[0].innerText = questions[questionCount].a;
  option[1].innerText = questions[questionCount].b;
  option[2].innerText = questions[questionCount].c;
  option[3].innerText = questions[questionCount].d;
  resetAnswer();
};

// Timer function ---------------->
let interval = setInterval(time, 1000);

function time() {
  timerCount.innerText = `${min} : ${sec}`;
  sec--;
  if (min >= 0) {
    if (sec <= 0) {
      min--;
      sec = 59;
    }
  } else {
    clearInterval(interval);
    showScore();
  }
}
