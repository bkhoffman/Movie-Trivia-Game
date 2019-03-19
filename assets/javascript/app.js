var questions = ["question1", "questions2", "question3", "question4", "questions5", "question6", "question7", "question8"];
var answer1 = ["a", "b", "c"]
var answer2 = ["d", "e", "f"]
var answer3 = ["g", "h", "i"]

var questionTimer = 31;
//var timerRunning = false;

$("#answer1").prop("hidden", true);
$("#answer2").prop("hidden", true);
$("#answer3").prop("hidden", true);

$("#startButton").on("click", function startGame(){
  console.log("click");
  //hide the start button, start the timer, show the questions and answers
  $(this).prop("hidden",true);
  $("#timer-text").html("Time Remaining: ");
  intervalId = setInterval(count, 1000);



  questions.forEach(function(){
    $("#answer1").html(answer1[i]);
    $("#answer2").html(answer2[i]);
    $("#answer3").html(answer3[i]);
  });
});

function count() {
  // Decrease time by 1 sec at a time
  questionTimer--;
  // Display the timer
  $("#timeRemaining").text(questionTimer);
}


