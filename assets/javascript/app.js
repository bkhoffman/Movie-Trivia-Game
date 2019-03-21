
var currentQuestion;
var questionIndex =0;
var questionTimer;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timerRunning = false;

//create an object holding the questions with the answers?
var questions = [
  {
    ask: "question1",
    answers : ["a", "b", "c"],
    correct : "b", 
    imgUrl: "https://media.giphy.com/media/TE3ZlXmfr5psI/giphy.gif"
  },
  {
    ask: "question2",
    answers : ["d", "e", "f"],
    correct : "answer3" //id of correct answer
  },
  {
    ask: "question3",
    answers : ["g", "h", "i"],
    correct : "answer1"
  }
]
//hide answer buttons
$(".answerBtn").prop("hidden", true);

$("#startButton").on("click", function(){
  console.log("click");
  startGame();
});

function startGame(){
  //reset timer and vars
  questionTimer = 30;
  correctAnswers = 0;
  incorrectAnswers = 0;
  unansweredQuestions = 0;
  //hide the start button
  $("#startButton").prop("hidden", true);
  loadQuestions();
};
 
function loadQuestions(){
  //set question/answers/correct answer starting a [0] position in object array
  currentQuestion = questions[questionIndex].ask;
  correct = questions[questionIndex].correct;
  console.log("picked question", currentQuestion);
  console.log("correct answer?", correct);
  $("#questions").text(currentQuestion);
  $("#answer1").html(questions[questionIndex].answers[0]);
  $("#answer2").html(questions[questionIndex].answers[1]);
  $("#answer3").html(questions[questionIndex].answers[2]);
  
  //show the answer buttons
  $(".answerBtn").prop("hidden", false);
  //start the timer
  intervalId = setInterval(timer, 1000);


  //if one of the answer buttons is clicked...do something
  $(".answerBtn").click(function(event){
    console.log("answered selected", event);
    clearInterval(intervalId); //stop timer
    var userAnswer = event.target.textContent;  //assign button ID to userAnser and check for correct
    console.log(userAnswer); 

    if(userAnswer === correct){
      console.log("correct", correct)
      $("#questions").text("The correct answer is: "+ correct);
    }else{
      console.log("incorrect")
    };
    //reset();
  });
};

function correctAnswer(){

};

function timer() {
  // Decrease time by 1 sec at a time and display timer
  questionTimer--;
  $("#timeRemaining").text("Time Remaining: " + questionTimer);
}

function reset(){
  //currentQuestion++;
};




