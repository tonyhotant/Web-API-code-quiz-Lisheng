var questionList = ["1 + 1 = ?", "2 + 2 = ?", "3 + 3 = ?", "4 + 4 = ?"];

var answerList = {
  answer1: {
    two: true,
    three: false,
    four: false,
    five: false
  },
  answer2: {
    four: true,
    five: false,
    six: false,
    seven: false
  },
  answer3: {
    a: false,
    b: false,
    c: false,
    six: true
  },
  answer4: {
    e: false,
    f: false,
    eight: true,
    k: false
  }
};

var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");


var questionCycle = 0;



function userClick() {
  answer.addEventListener("click", function(event) {
    event.preventDefault();
    questionCycle++;

    //determine answer true or false
    decideAnswer();

    //change question
    getQuestion();

    //change answer options
    getAnswer();
  });
}

function getQuestion() {
    var question = questionList[questionCycle + 1];
    question.text(questionList[questionCycle + 1]);
    return question;
    console.log("questioncycle is " + questionCycle);
    console.log("question is now " + question);
}

function getAnswer() {

}

function decideAnswer() {}

//preclass drill

// var displayCounter = 0;

// var questions = [
//   {
//     title: "somethint",
//     answer: {
//       name: "eggs",
//       isCorrect: true
//     }
//   },
//   {
//     title: "somethint",
//     answer: "feiaojfeoiaw"
//   },
//   {
//     title: "somethint",
//     answer: "feiaojfeoiaw"
//   },
//   {
//     title: "somethint",
//     answer: "feiaojfeoiaw"
//   }
// ];

// //show the first qs
// //user click on an answer
// //if correct we score up
// //move on

// function showquestion(questionIndex) {
//   // put the question in html
// }

// showquestion(displayCounter);

// for (var i = 0; i < questionList.length; i++) {
//   var question = questions[i];
//   var title = question.title;
//   $("#question").text(title);

//   var userSelect = $();

//   //for loop thru ans array
//   //compare user selection with name
//   //if user selection === quesiton.ans
//   //check question.ans
// }
