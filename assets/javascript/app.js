
var currentQuestion;
var questionIndex = 0;
var questionTimer;
var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;
var timerRunning = false;

//create an object holding the questions with the answers
var questions = [
  { 
    ask: "What is the name of the character played by Johnny Depp in the Pirates of the Caribbean film series?",
    answers : ["Captain Black Beard", "Captain Jack Sparrow", "Captain Morgan"],
    correct : "Captain Jack Sparrow", 
    imgUrl: "https://media.giphy.com/media/TE3ZlXmfr5psI/giphy.gif"
  },
  { 
    ask: "Which 1997 action thriller film stars Nicolas Cage, John Cusack, and John Malkovich?",
    answers : ["Con Air", "Faceoff", "Being John Malkovich"],
    correct : "Con Air",
    imgUrl: "https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
  },
  { 
    ask: "In the X-Men film franchise, Halle Berry played the role of which character?",
    answers : ["Rogue", "Mystique", "Storm"],
    correct : "Storm",
    imgUrl: "https://media.giphy.com/media/l41YuHALY8Zfa3OhO/giphy.gif"
  },
  { 
    ask: "Who directed the romantic comedy fantasy adventure film The Princess Bride?",
    answers : ["James Cameron", "Steven Spielberg", "Rob Reiner"],
    correct : "Rob Reiner",
    imgUrl: "https://media.giphy.com/media/CptgzXrClgwtG/giphy.gif"
  }
]
//hide answer buttons
$(".answerBtn").prop("hidden", true);

$("#startButton").on("click", function(){
  startGame();
});

function startGame(){
  //reset timer and vars
  questionTimer = 10;
  correctAnswers = 0;
  incorrectAnswers = 0;
  unansweredQuestions = 0;
  //hide the start button
  $("#startButton").remove();
  loadQuestions();
};
 
function loadQuestions(){
  console.log("question #: ", questionIndex);
  //set question/answers/correct answer starting a [0] position in object array
  currentQuestion = questions[questionIndex].ask;  //not sure i need this
  correct = questions[questionIndex].correct;
  console.log("picked question: ", currentQuestion);
  console.log("correct answer: ", correct);
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
    console.log(event);
    clearInterval(intervalId); //stop timer
    var userAnswer = event.target.textContent;
    console.log(userAnswer); 
    $(".answerBtn").prop("hidden", true);

    if (userAnswer === correct){
      $("#questions").text("The correct answer is: "+ correct);
      $("#questions").append("<h2>YOU ARE CORRECT!</h2>");
      $("#questions").append("<img class=answerImage src=" + questions[questionIndex].imgUrl +">");
      correctAnswers++;
      reset();
    } else {
      $("#questions").text("The correct answer is: "+ correct);
      $("#questions").append("<h2>YOU ARE INCORRECT!</h2>");
      $("#questions").append("<img class=answerImage src= https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif >");
      incorrectAnswers++;
      reset();
    };
  });
};

function timer() {
  // Decrease time by 1 sec at a time and display timer
  questionTimer--;
  $("#timeRemaining").text("Time Remaining: " + questionTimer);
  if(questionTimer === 0){
    clearInterval(intervalId);
    unansweredQuestions++;
    console.log("Unanswered Questions: ", unansweredQuestions);
    $(".answerBtn").prop("hidden", true);
    $("#questions").text("The correct answer is: "+ correct);
    $("#questions").append("<h2>YOU RAN OUT OF TIME!</h2>");
    $("#questions").append("<img class=answerImage src= https://media.giphy.com/media/3oKIPobgyKr0nDmGwU/giphy.gif >");
    reset();
  }
}

function reset(){
  questionIndex++;
  if(questionIndex < questions.length){
    setTimeout(function(){
      loadQuestions();
      questionTimer = 10;
    }, 5000);
  } else {
    setTimeout(function(){
      console.log("game over")
      $("#questions").text("Results")
      $("#questions").append("Correct Answers: "+ correctAnswers)
      $("#questions").append("Incorrect Answers: "+ incorrectAnswers)
      $("#questions").append("Unanswered: "+ unansweredQuestions)
    }, 3000);
  };
};




