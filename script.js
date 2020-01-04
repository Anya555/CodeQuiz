// grabbing values of all necessary html elements by using getElementById method
var startBtn = document.getElementById("start-btn");
var paragraph = document.getElementById("paragraph");
var questions = document.getElementById("question-area");




// adding an event listener to a start quiz button, 
//thus telling the browser to start the quiz once user cliks on it
startBtn.addEventListener("click", startQuiz);

// making a function that will hold the logic for when the user clicks on a start quiz button
function startQuiz(){
    // hiding all initial content and showing quiz content after user clicks on a start quiz button 
    // by using visibility property and display block property
    startBtn.style.visibility = "hidden";
    paragraph.style.visibility = "hidden";
    questions.style.display = "block";
    
}