var questions = ["question1", "questions2", "question3", "question4", "questions5", "question6", "question7", "question8"];
var answer1 = ["a", "b", "c"]
var answer2 = ["d", "e", "f"]
var answer3 = ["g", "h", "i"]

var questionTimer = 30;
//var timerRunning = false;


$(".btn").on("click", function startGame(){
  console.log("click");
  $("#timer-text").html("Time Remaining: ");
  intervalId = setInterval(count, 1000);

  questions.forEach(function(){
    $("#answer1").html()
  });
});

function count() {
  // Decrease time by 1 sec at a time
  questionTimer--;
  // Display the timer
  $("#timeRemaining").text(questionTimer);
}


