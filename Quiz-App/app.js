let option = document.querySelectorAll("li");
let mark = document.querySelectorAll(".options img");
let choice = document.querySelectorAll(".options p");
let optionDiv = document.querySelectorAll(".options div");
let home = document.querySelector(".home");
let questionPage = document.querySelector(".question-page");
let question = document.querySelector(".question");
let timer = document.querySelector(".timer");
let timerCount = document.querySelector(".timer span");
let questionCount = 0;







const questions = [
  {
    id:1,
    question:"What does the typeof operator return when applied to an array?",
    a:"array",
    b:"object",
    c:"list",
    d:"collection",
    answer:"object"
  },
  {
    id:2,
    question:"Which method can be used to combine two or more arrays?",
    a:"concat()",
    b:"join()",
    c:"merge()",
    d:"append()",
    answer:"append()"
  },
  {
    id:3,
    question:"Which of the following is a feature of ES6 (ECMAScript 2015)?",
    a:"var keyword",
    b:"Arrow functions",
    c:"for loop",
    d:"function keyword",
    answer:"Arrow functions"
  },
  {
    id:4,
    question:"Which keyword is used to declare a block-scoped variable in JavaScript?",
    a:"var",
    b:"let",
    c:"static",
    d:"block",
    answer:"let"
  },
  {
    id:5,
    question:"What will happen if you try to reassign a const variable?",
    a:"It will be updated successfully",
    b:"It will throw a TypeError",
    c:"It will be ignored",
    d:"It will be converted to let",
    answer:"It will throw a TypeError"
  },
  {
    id:6,
    question:"What does the setTimeout() function do?",
    a:"Executes a function after a specified delay",
    b:"Repeats a function at specified intervals",
    c:"Pauses execution of a function",
    d:"Cancels a function execution",
    answer:"Executes a function after a specified delay"
  },
  {
    id:7,
    question:"What is the scope of a variable declared with let?",
    a:"Global scope",
    b:"Function scope",
    c:"None of the above",
    d:"Block scope",
    answer:"Block scope"
  },
  {
    id:8,
    question:"What does the this keyword refer to in a regular function?",
    a:"The global object",
    b:"The function itself",
    c:"The object that the function is a method of",
    d:"None of the above",
    answer:"The object that the function is a method of"
  },
  {
    id:9,
    question:"Which method would you use to add a new element at the start of an array?",
    a:"push()",
    b:"unshift()",
    c:"shift()",
    d:"splice()",
    answer:"unshift()"
  },
  {
    id:10,
    question:"What is the correct way to declare a variable in JavaScript?",
    a:"x = 10",
    b:"var x = 10",
    c:"x = 10",
    d:"int x = 10",
    answer:"var x = 10"
  }
]



// answer checking --------->
const checkA = () => {
  if(option[0].innerText === questions[0].answer){
    optionDiv[0].style.borderColor = "green"; 
  }else{
    optionDiv[0].style.borderColor = "red";
    for (let index = 0; index < 3; index++) {
      if(option[index].innerText===questions.answer){
        optionDiv[0].style.borderColor = "green";
      }else{
        console.log("not answer");
        
      }
    }
  }
  
};
const checkB = () => {
  console.log(questions);
  if(option[1].innerText === questions.answer){
    optionDiv[1].style.borderColor = "green"; 
  }else{
    optionDiv[1].style.borderColor = "red";
    for (let index = 0; index < 3; index++) {
      if(option[index].innerText===questions.answer){
        optionDiv[0].style.borderColor = "green";
      }else{
        console.log("not answer");
        
      }
    }
  }
};




// question navigations ----------->
const startQuestion = ()=>{
  home.classList.add("hide");
  questionPage.classList.remove("hide");
  timer.classList.remove("hide");
  question.innerText = `${questions[questionCount].id}. ${questions[questionCount].question}`;
    option[0].innerText = questions[questionCount].a;
    option[1].innerText = questions[questionCount].b;
    option[2].innerText = questions[questionCount].c;
    option[3].innerText = questions[questionCount].d;
}

const goToNextQuestion = () =>{
  if(questionCount<9) questionCount++
  question.innerText = `${questions[questionCount].id}. ${questions[questionCount].question}`
  option[0].innerText = questions[questionCount].a;
  option[1].innerText = questions[questionCount].b;
  option[2].innerText = questions[questionCount].c;
  option[3].innerText = questions[questionCount].d;
}

const goToPreviousQuestion = () =>{
  if(questionCount >0) questionCount--
  question.innerText = `${questions[questionCount].id}. ${questions[questionCount].question}`
  option[0].innerText = questions[questionCount].a;
  option[1].innerText = questions[questionCount].b;
  option[2].innerText = questions[questionCount].c;
  option[3].innerText = questions[questionCount].d; 
}


// Timer ---------------->
// let now = new Date();
// console.log(now.getSeconds());
let sec= 59;
let min = 9;
let interval = setInterval(time,1000)
function time (){
  timerCount.innerText = `${min} : ${sec}`;
  sec--
  if(min>0){
    if(sec<=0){
      min--;
      sec = 59;
    }
  } 
}



