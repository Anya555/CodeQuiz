// selecting all necessary html elements by using getElementById method
var startBtn = document.getElementById("start-btn");
var paragraph = document.getElementById("paragraph");
var questionsArea = document.getElementById("question-area");
var qstn = document.getElementById("questionEl");
var answerButton = document.getElementById("answerEl");
var firstAnswer = document.getElementById("1st");
var secondAnswer = document.getElementById("2d");
var thirdAnswer = document.getElementById("3d");
var fourthAnswer = document.getElementById("4th");
var timer = document.getElementById("timer");

// storing questions as an array of objects

var quizElements = [
    {
        question: "What is the correct HTML element for inserting a line break?",
        choice1: "<li>",
        choice2: "<hr>",
        choice3: "<br>",
        choice4: "<break>",
        answer: "<br>", 
    },

    {
        question: "Which HTML tag is used to define an internal style sheet?",
        choice1: "<style>",
        choice2: "<css>",
        choice3: "<script>",
        choice4: "<html>",
        answer: "<style>", 
    },

    {
        question: "Which is the correct CSS syntax?",
        choice1: "body:color=black;",
        choice2: "{body;color:black;}",
        choice3: "body{color:black};",
        choice4: "body:{color=black;}",
        answer: "body{color:black};", 
    },

    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5??",
        choice1: "if i =! 5 then",
        choice2: "if(i != 5)",
        choice3: "if(i<>5)",
        choice4: "if i=>5",
        answer: "if(i != 5)", 
    },

    {
        question: "The Bootstrap grid system is based on how many columns?",
        choice1: "3",
        choice2: "8",
        choice3: "12",
        choice4: "1",
        answer: "12", 
    }
];


// adding an event listener to a start quiz button, 
//thus telling the browser to start the quiz once user cliks on it

startBtn.addEventListener("click", startQuiz);

// function that will hold the logic for when the user clicks on a start quiz button

function startQuiz() {
    // hiding all initial content and showing quiz content after user clicks on a start quiz button 
    // by using visibility property and display block property
    startBtn.style.visibility = "hidden";
    paragraph.style.visibility = "hidden";
    questionsArea.style.display = "block";
}

// declaring variables for index of first and last question in array
var currentQuestionIndex = 0;
var lastQuestionIndex = quizElements.length - 1;

// function that will display current question and choices
function displayQuestions() {
    var newQuestion = quizElements[currentQuestionIndex];

    qstn.innerText = newQuestion.question;
    firstAnswer.innerText = newQuestion.choice1;
    secondAnswer.innerText = newQuestion.choice2;
    thirdAnswer.innerText = newQuestion.choice3;
    fourthAnswer.innerText = newQuestion.choice4;
}

displayQuestions();

var secondsLeft = 15;
answer = true;

// function that will move user to the next question once user selects from choises given

answerButton.addEventListener("click", answer);
function renderNextQuestion (){

    if (answerButton = answer){
     currentQuestionIndex++;
     
    }
    displayQuestions();
    }
