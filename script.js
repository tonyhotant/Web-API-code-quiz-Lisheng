$(document).ready(function() {
  var counter = -1;
  var userChoice = [];
  var scores = 50;
  var userArr = [];

  function initializeGame() {
    $("#title").text("Coding Quiz Challenge");
    counter = -1;
    userChoice = [];
    scores = 50;
    $("#main").show();
    $("#back, #clear").hide();
  }

  $("#start-button").one("click", function() {
    $("p, #start-button").hide();
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
    //need refactor so just one click event
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

  // function displayMessage(type, message) {
  //   msgDiv.textContent = message;
  //   msgDiv.setAttribute("class", type);
  // }

  function getScores() {
    //save user's score to local storage
    $("#submit").on("click", function(event) {
      event.preventDefault();
      var user = {
        userName: $("#initial")
          .val()
          .trim(),
        userScore: scores
      };

      if (user.userName === "") {
        return;
      }

      //convert value to JSON string
      localStorage.setItem("user", JSON.stringify(userArr));

      userArr.push(user);
      user = {};
      userArr.sort();

      //not sure if it's working
      for (i = 0; i < userArr.length; i++) {
        var userList = JSON.parse(localStorage.getItem(userArr[i]));
        console.log(userList);

        $("#user-list").text(userList.userName + userList[i].userScore);
      }
      highScores();
    });
  }

  function gameOver() {
    $("#answers-button").hide();
    $("#title").text("All Done!");
    $("p")
      .show()
      .text("Your final score is " + scores);
    $("#input-form").show();
    getScores();

    //need append user info + result
    //sort user scores in order
  }

  $("#high-scores").on("click", function() {
    highScores();
  });

  function highScores() {
    $("#input-form, header, #main").hide();
    $("#title").text("Highscores");
    $("#back")
      .show()
      .text("Go Back")
      .on("click", function() {
        initializeGame();
      });
    $("#clear")
      .show()
      .text("Clear Highscores")
      .on("click", function() {
        $("#user-list").empty();
      });
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
  //build user score system
  //change button text color to white
  //negative scores handle
});
