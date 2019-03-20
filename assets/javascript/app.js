//var questions = ["question1", "questions2", "question3", "question4", "questions5", "question6", "question7", "question8"];
//var questionsAsked = []; //push questions after asked
// var answer1 = ["a", "b", "c"]
// var answer2 = ["d", "e", "f"]
// var answer3 = ["g", "h", "i"]
var currentQuestion;
var questionTimer = 31;
//var timerRunning = false;

//create an object holding the questions with the answers?
var question = [
  {
    ask: "question1",
    answers : ["a", "b", "c"],
    correct : "a",
    imgUrl: "https://media.giphy.com/media/TE3ZlXmfr5psI/giphy.gif"
  },
  {
    ask: "question2",
    answers : ["d", "e", "f"],
    correct : "f"
  },
  {
    ask: "question3",
    answers : ["g", "h", "i"],
    correct : "g"
  }
]
//hide answer buttons
$("#answer1").prop("hidden", true);
$("#answer2").prop("hidden", true);
$("#answer3").prop("hidden", true);

$("#startButton").on("click", function startGame(){
  console.log("click");
  //hide the start button, start the timer and show "Time Remaining"
  $(this).prop("hidden",true);
  $("#timer-text").text("Time Remaining: ");
  intervalId = setInterval(count, 1000);
  
  //pick random question from questions array and display
  question.forEach(function(){
    var currentQuestion = question[Math.floor(Math.random() * question.length)];
    console.log("picked question", currentQuestion);
    $("#questions").text(currentQuestion.ask);
    $("#answer1").html(currentQuestion.answers[0]);
    $("#answer2").html(currentQuestion.answers[1]);
    $("#answer3").html(currentQuestion.answers[2]);
  });
  $("#answer1").prop("hidden", false);
  $("#answer2").prop("hidden", false);
  $("#answer3").prop("hidden", false);

});

function count() {
  // Decrease time by 1 sec at a time and display timer
  questionTimer--;
  $("#timeRemaining").text(questionTimer);
}


$(".answerBtn").click(function(event){
  console.log("answered selected", event);
  var userAnswer = event;

  //event is button with #answer1  BUT question.correct is a string "a"
  if(userAnswer === question.correct){
    console.log("correct")
  }
});

// $(".answerBtn").click(function answerCheck(answer){
//   console.log("answered selected", answer);
//   console.log(question[0].answer2);
//   //assign click to var?
  
//   if(answer === question[0].answer2){
//     console.log("winner");
//     //console.log(question[0].correct);
//   } else {
//     console.log("incorrect");
//   };
//       //console.log("You Win") //flash picture
//       //console.log("Incorrect") // show correct answer and picture
  
// });



