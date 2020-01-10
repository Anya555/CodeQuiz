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
var messageBox = document.getElementById("message-box");
var timer = document.getElementById("timer");
var score = document.getElementById("score");
var scorePage = document.getElementById("score-page");
var userInitials = document.getElementById("initials");
var startPage = document.getElementById("main");
var timerCount = 15;
var gameTime = 75;
var currQuestionTimer;
var highScore = 0;
var questionsAnswered = 0;

var allInitials = [];
var allScores = [];

// storing final score and initials into local storage

var initials = ["GT", "AB", "CD"];
var finalScores = [20, 45, 100];


// This runs when the page loads
var getFromLocalStorage = function(){
    var init = JSON.parse(localStorage.getItem("initials"));
    var scores = JSON.parse(localStorage.getItem("scores"));

    if( init && init.length ){
        allInitials = init;
    }

    if( scores && scores.length ){
        allScores = scores;
    }
}

var saveToLocalStorage = function(){
    localStorage.setItem("initials", JSON.stringify(allInitials));
    localStorage.setItem("scores", allScores);
}

var saveGame = function(initials){
    var initialIdx = allInitials.indexOf(initials);

    if( initialIdx > -1 ){
        var currPlayerHighScore = allScores[initialIdx];
    }

    if( initialIdx === -1 ){
        allInitials.push(initials);
        allScores.push(highScore);
    } else {
        if( highScore > currPlayerHighScore ){
            allScores[initialIdx] = highScore;
        } 
    }

    saveToLocalStorage();
}

var init = localStorage.getItem("initials");

if (init){
    initials = JSON.parse(init);
}
var updateLocalStorage = function (){
    localStorage.setItem("initials", JSON.stringify(initials));
}


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
var currentQuestionIndex;

function startQuiz() {
    // hiding all initial content and showing quiz content after user clicks on a start quiz button 
    // by using visibility property and display block property
    currentQuestionIndex = 0;
    questionsAnswered = 0;
    startBtn.style.visibility = "hidden";
    paragraph.style.visibility = "hidden";
    questionsArea.style.display = "block";
    displayQuestions();
}

// declaring variables for index of first and last question in array
// var currentQuestionIndex = 0;
var lastQuestionIndex = quizElements.length - 1;

// function that will display current question and choices
function displayQuestions() {
    if( currentQuestionIndex < quizElements.length ){
        var newQuestion = quizElements[currentQuestionIndex];
        qstn.innerText = newQuestion.question;
        firstAnswer.innerText = newQuestion.choice1;
        secondAnswer.innerText = newQuestion.choice2;
        thirdAnswer.innerText = newQuestion.choice3;
        fourthAnswer.innerText = newQuestion.choice4;
        startTimer();
    }
}

// Runs every second when a question is loaded
function checkForAnswer() {
    console.log(timerCount);
    gameTime--;
    timer.textContent = "Seconds left" + ": " + gameTime;
    if (timerCount === 0) {
        clearInterval(currQuestionTimer);
        currentQuestionIndex++;
        timerCount = 15;
        displayQuestions();
    }

    showScores();
}

// function that will show 'wrong' or 'correct' message every time question is answered and removing a 
// message after 1 second
var secondsMessageShown = 1;

function showMessage(msg) {
    messageBox.textContent = "";
    messageBox.textContent = msg;
    
    setTimeout(function(){
        messageBox.textContent = "";
    }, 1000);

    // moving to a new question right after current question has been answered by clearing interval
    var timerInterval = setInterval(function () {
        secondsMessageShown--;

        if (secondsMessageShown === 0)
            clearInterval(timerInterval);
    }, 1000);
}



// function that starts a new timer once a question has been answered
function startTimer() {
    currQuestionTimer = setInterval(checkForAnswer, 1000);
}


// function that will move user to the next question once user selects from choises given,and collects score

document.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.classList.contains("answer-btn")) {
        questionsAnswered++;
        var answerButton = event.target;
        if (answerButton.textContent == quizElements[currentQuestionIndex].answer) {
            showMessage("Correct!");
            highScore = highScore + timerCount;
            score.innerHTML += highScore;
        }

        else {
            showMessage("Wrong!");
        }

        clearInterval(currQuestionTimer);
        showScores();
        currentQuestionIndex++;
        displayQuestions();
    }
});


// function that will move to score screen once all questions are answered

function showScores() {
    if (questionsAnswered == quizElements.length || gameTime === 0)  {
        questionsArea.style.display = "none";
        scorePage.style.display = "block";
        timer.style.display = "none";
    }
    return 
}

// When saving a game
// 1. Get index of the initials entered in the initials array
// 2. If the initials have an index > -1
// 3. Update finalScores[index] == new highscore

//saving initials
var saveBtn = document.getElementById("save-initials");
saveBtn.addEventListener("click", function(e){
    e.preventDefault();
    var initialsEntered = document.getElementById("initials-field").value;
    console.log(initialsEntered);
    saveGame(initialsEntered);""
    
    // going back to start quiz page after user clicks submit button
    scorePage.style.display = "none";
    startBtn.style.visibility = "visible";
    paragraph.style.visibility = "visible";
    
})

getFromLocalStorage();


