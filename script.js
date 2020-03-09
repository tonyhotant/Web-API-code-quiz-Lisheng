$(document).ready(function() {
  //need a Reset function here for "go back" button
  //need some way to handle game refresh
  function reset() {
    var counter = -1;
    var userChoice = [];
    var scores = 30;
  }

  var counter = -1;
  var userChoice = [];
  var scores = 50;

  $("#start-button").one("click", function() {
    $("p").hide();
    $("#start-button").hide();
    $("#answers-button").show();
    gameStart();
    startTimer();
  });

  function gameStart() {
    if (counter === questions.length) {
      gameOver();
    } else if (scores <= 0) {
      scores = 0;
      gameOver();
    } else {
      counter++;
      showQuestions();
    }
  }

  function startTimer() {
    var timerInterval = setInterval(function() {
      scores--;
      $("#timer").text("Time: " + scores);
      if (counter === questions.length || scores <= 0) {
        clearInterval(timerInterval);
        gameOver();
      }
    }, 1000);
  }

  function showQuestions() {
    $("#title").text(questions[counter].title);
    $("#answer-1")
      .show()
      .text(questions[counter].answer1.name)
      .off("click")
      .one("click", function() {
        userChoice.push(questions[counter].answer1.isCorrect);
        getResult();
      });
    $("#answer-2")
      .show()
      .text(questions[counter].answer2.name)
      .off("click")
      .one("click", function() {
        userChoice.push(questions[counter].answer2.isCorrect);
        getResult();
      });
    $("#answer-3")
      .show()
      .text(questions[counter].answer3.name)
      .off("click")
      .one("click", function() {
        userChoice.push(questions[counter].answer3.isCorrect);
        getResult();
      });
    $("#answer-4")
      .show()
      .text(questions[counter].answer4.name)
      .off("click")
      .one("click", function() {
        userChoice.push(questions[counter].answer4.isCorrect);
        getResult();
      });
  }

  function getResult() {
    if (userChoice[counter]) {
      $("#result")
        .show()
        .text("Correct!");
      gameStart();
    } else {
      $("#result")
        .show()
        .text("Wrong!");
      scores -= 10;
      gameStart();
    }
    //need fadeout result
  }

  function getScores() {
    //save user's score to local storage
  }

  function gameOver() {
    $("#answers-button").hide();
    $("#title").text("All Done!");
    $("p")
      .show()
      .text("Your final score is " + scores);
    $("#input-form").show();
    getScores();

    //add click event to submit button
    //jump to highscore page
    //need append user info + result
    //sort user scores in order
  }

  $("#high-scores").on("click", function() {
    highScores();
  });

  function highScores() {
    $("header").hide();
    $("#main").hide();
    $("#title").text("Highscores");
    $("#back")
      .show()
      .text("Go Back");
    //need add click event here to go back
    $("#clear")
      .show()
      .text("Clear Highscores");
    //need add click event here to empty score
  }

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
      answer1: { name: "a. I'm answer5", isCorrect: false },
      answer2: { name: "b. I'm answer6", isCorrect: true },
      answer3: { name: "c. I'm answer7", isCorrect: false },
      answer4: { name: "d. I'm answer8", isCorrect: false }
    },
    {
      title: "i'm the question3",
      answer1: { name: "a. I'm answer9", isCorrect: false },
      answer2: { name: "b. I'm answer10", isCorrect: false },
      answer3: { name: "c. I'm answer11", isCorrect: true },
      answer4: { name: "d. I'm answer12", isCorrect: false }
    },
    {
      title: "i'm the question4",
      answer1: { name: "a. I'm answer13", isCorrect: false },
      answer2: { name: "b. I'm answer14", isCorrect: false },
      answer3: { name: "c. I'm answer15", isCorrect: false },
      answer4: { name: "d. I'm answer16", isCorrect: true }
    },
    {
      title: "i'm the question5",
      answer1: { name: "a. I'm answer17", isCorrect: true },
      answer2: { name: "b. I'm answer18", isCorrect: false },
      answer3: { name: "c. I'm answer19", isCorrect: false },
      answer4: { name: "d. I'm answer20", isCorrect: false }
    },
    {
      title: "i'm the question6",
      answer1: { name: "a. I'm answer21", isCorrect: false },
      answer2: { name: "b. I'm answer22", isCorrect: false },
      answer3: { name: "c. I'm answer23", isCorrect: true },
      answer4: { name: "d. I'm answer24", isCorrect: false }
    }
  ];

  //TO DO:
  //add coundown timer
  //build user score system
  //build user input form page
  //change button text color to white
});
