
var currentQuestion;
var questionIndex =0;
var questionTimer;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timerRunning = false;

//create an object holding the questions with the answers?
var questions = [
  { ask: "What is the name of the character played by Johnny Depp in the Pirates of the Caribbean film series?",
    answers : ["Captain Black Beard", "Captain Jack Sparrow", "Captain Morgan"],
    correct : "Captain Jack Sparrow", 
    imgUrl: "https://media.giphy.com/media/TE3ZlXmfr5psI/giphy.gif"
  },
  { ask: "question2",
    answers : ["d", "e", "f"],
    correct : "d",
    imgUrl: " "
  },
  { ask: "question3",
    answers : ["g", "h", "i"],
    correct : "i",
    imgUrl: " "
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
  questionTimer = 10;
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
  
  

  //if one of the answer buttons is clicked: stop timer, assign button tex to userAnswer
  $(".answerBtn").click(function(event){
    console.log("answered selected", event);
    clearInterval(intervalId); //stop timer
    var userAnswer = event.target.textContent;
    console.log(userAnswer); 
    $(".answerBtn").prop("hidden", true);

    if (userAnswer === correct){
      $("#questions").text("The correct answer is: "+ correct);
      $("#questions").append("<h2>YOU ARE CORRECT!</h2>");
      $("#questions").append("<img class=answerImage src=" + questions[questionIndex].imgUrl +">");
      reset();
    } else {
      $("#questions").text("The correct answer is: "+ correct);
      $("#questions").append("<h2>YOU ARE INCORRECT!</h2>");
      $("#questions").append("<img class=loseImage src= https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif >");
      //reset();
    };
  });
};

function timer() {
  // Decrease time by 1 sec at a time and display timer
  questionTimer--;
  $("#timeRemaining").text("Time Remaining: " + questionTimer);
  if(questionTimer === 0){
    clearInterval(intervalId);
    $(".answerBtn").prop("hidden", true);
    $("#questions").text("The correct answer is: "+ correct);
    $("#questions").append("<h2>YOU RAN OUT OF TIME!</h2>");
    $("#questions").append("<img class=loseImage src= https://media.giphy.com/media/3oKIPobgyKr0nDmGwU/giphy.gif >");
    reset();
  }
}

function reset(){
  questionIndex++;
  //$("#questions").remove();
};




