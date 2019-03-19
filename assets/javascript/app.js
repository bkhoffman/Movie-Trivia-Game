//var questions = ["question1", "questions2", "question3", "question4", "questions5", "question6", "question7", "question8"];
var questionsAsked = []; //push questions after asked
// var answer1 = ["a", "b", "c"]
// var answer2 = ["d", "e", "f"]
// var answer3 = ["g", "h", "i"]

var questionTimer = 31;
//var timerRunning = false;

//create an object holding the questions with the answers?
var question = [
  {
    ask: "question1",
    answer1 : "a",
    answer2 : "b",
    answer3 : "c",
    correct : "2"
  },
  {
    ask: "question2",
    answer1 : "d",
    answer2 : "e",
    answer3 : "f",
    correct : "3"
  },
  {
    ask: "question3",
    answer1 : "g",
    answer2 : "h",
    answer3 : "i",
    correct : "1"
  }
]

$("#answer1").prop("hidden", true);
$("#answer2").prop("hidden", true);
$("#answer3").prop("hidden", true);

$("#startButton").on("click", function startGame(){
  console.log("click");
  //hide the start button, start the timer, show the questions and answers
  $(this).prop("hidden",true);
  $("#timer-text").html("Time Remaining: ");
  intervalId = setInterval(count, 1000);
  //pick random question from questions array and display
  //var startQuestion = questions[Math.floor(Math.random() * questions.length)];
  //$("#questions").text(startQuestion);

  $("#answer1").prop("hidden", false);
  $("#answer2").prop("hidden", false);
  $("#answer3").prop("hidden", false);

  question.forEach(function(){
    var startQuestion = question[Math.floor(Math.random() * question.length)];
    console.log("picked question", startQuestion);
    $("#questions").text(startQuestion.ask);
    $("#answer1").html(startQuestion.answer1);
    $("#answer2").html(startQuestion.answer2);
    $("#answer3").html(startQuestion.answer3);
  });
});

function count() {
  // Decrease time by 1 sec at a time
  questionTimer--;
  // Display the timer
  $("#timeRemaining").text(questionTimer);
}
//var answers = $("#answer1", "#answer2", "#answer3");
$("#answer1").click(function answerCheck(){
  console.log("answered!")
  //if (question[0] && answer2 || question[1] && answer1 || question[2] && answer3 ){
      //console.log("You Win") //flash picture
  //} else {
      //console.log("Incorrect") // show correct answer and picture
  // };
});



