//pesudocode:

//click on start button
//change title to question
//hide <p>
//change start button to answer options
//append 3 more answer options
$("#start-button").on("click", function() {
    $("#title").text(questions[0].title);
});




//view highscores page
$("#high-scores").on("click", function() {
    $("header").hide();
    $("p").hide();
    $("title").text("Highscores");
});

//create result id to print result to user
//create questions object include answers and true or false
var isCorrect = $("#result");
var questions = [
  {
    title: "i'm the question1",
    answer1: { name: "a. I'm answer1", isCorrect: true },
    answer2: { name: "b. I'm answer2", isCorrect: false },
    answer3: { name: "c. I'm answer3", isCorrect: false },
    answer4: { name: "d. I'm answer4", isCorrect: false }
  },
  {
    title: "i'm the question2",
    answer1: { name: "a. I'm answer5", isCorrect: true },
    answer2: { name: "b. I'm answer6", isCorrect: false },
    answer3: { name: "c. I'm answer7", isCorrect: false },
    answer4: { name: "d. I'm answer8", isCorrect: false }
  },
  {
    title: "i'm the question3",
    answer1: { name: "a. I'm answer9", isCorrect: true },
    answer2: { name: "b. I'm answer10", isCorrect: false },
    answer3: { name: "c. I'm answer11", isCorrect: false },
    answer4: { name: "d. I'm answer12", isCorrect: false }
  },
  {
    title: "i'm the question4",
    answer1: { name: "a. I'm answer13", isCorrect: true },
    answer2: { name: "b. I'm answer14", isCorrect: false },
    answer3: { name: "c. I'm answer15", isCorrect: false },
    answer4: { name: "d. I'm answer16", isCorrect: false }
  }
];