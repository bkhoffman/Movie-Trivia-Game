
var currentQuestion;
var questionIndex = 0;
var questionTimer;
var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;
var correct;

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
  },
  { 
    ask: "Which actor played the fictional character Dr. Emmett Brown in the Back to the Future trilogy?",
    answers : ["Christopher Lloyd", "Steve Martin", "Richard Gere"],
    correct : "Christopher Lloyd",
    imgUrl: "https://media.giphy.com/media/hn45V8hBhRIpW/giphy.gif"
  },
  { 
    ask: "The song “Eye of the Tiger” by the band Survivor was the theme song for what movie released in 1982?",
    answers : ["Rocky", "Bloodsport", "Terminator"],
    correct : "Rocky",
    imgUrl: "https://media.giphy.com/media/11sN6nMjLT2INO/giphy.gif"
  },
  { 
    ask: "Actress Gal Gadot starred in what American superhero film released in the summer of 2017?",
    answers : ["Captain Marvel", "Wonder Woman", "Catwoman"],
    correct : "Wonder Woman",
    imgUrl: "https://media.giphy.com/media/26FPMoFGJlJQuwdzO/giphy.gif"
  },
  { 
    ask: "Who played the female lead in the dystopian political thriller “V for Vendetta”?",
    answers : ["Charlize Theron", "Natalie Portman", "Katie Holmes"],
    correct : "Natalie Portman",
    imgUrl: "https://media.giphy.com/media/cOpH5Jx0hjbzy/giphy.gif"
  }
]
//hide answer buttons
$(".answerBtn").prop("hidden", true);
//click start button to start the game
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
  $("#startButton").prop("hidden", true);
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
};

//if one of the answer buttons is clicked: stop timer, assign button tex to userAnswer
$(".answerBtn").click(function(event){
  console.log(event);
  clearInterval(intervalId); //stop timer
  var userAnswer = event.target.textContent;
  console.log(userAnswer); 
  $(".answerBtn").prop("hidden", true);
  checkGuess(userAnswer);
});

function checkGuess(userAnswer){
  if (userAnswer === correct){
    $("#questions").text("The correct answer is: "+ correct);
    $("#questions").append("<h2>YOU ARE CORRECT!</h2>");
    $("#questions").append("<img class=answerImage src=" + questions[questionIndex].imgUrl +">");
    correctAnswers++;
    reset();
  } else {
    $("#questions").text("The correct answer is: "+ correct);
    $("#questions").append("<h2>YOU ARE INCORRECT!</h2>");
    $("#questions").append("<img class = answerImage src= https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif>");
    incorrectAnswers++;
    reset();
  };
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
    }, 3000);
  } else {
    setTimeout(function(){
      $("#timeRemaining").prop("hidden", true)
      $("#questions").html("<h2>Results: </h2>");
      $("#questions").append("<h2>Correct Answers: " + correctAnswers + "</h2>");
      $("#questions").append("<h2>Incorrect Answers: " + incorrectAnswers + "</h2>");
      $("#questions").append("<h2>Unanswered: " + unansweredQuestions + "</h2>");
    }, 3000);
  };
};




