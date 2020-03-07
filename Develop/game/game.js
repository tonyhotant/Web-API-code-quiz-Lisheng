
var questionList = [ 
    "1 + 1 = ?",
    "2 + 2 = ?",
    "3 + 3 = ?",
    "4 + 4 = ?",
];

var answerList = {
    answer1: {
        two: true,
        three: false,
        four: false,
        five: false,
    },
    answer2: {
        four: true,
        five: false,
        six: false,
        seven: false,
    },
    answer3: {
        a: false,
        b: false,
        c: false,
        six: true,
    },
    answer4: {
        e: false,
        f: false,
        eight: true,
        k: false,
    },
};

var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var questionCycle = 0;



answer.addEventListener("click", function(event) {
    event.preventDefault();
    questionCycle ++ ;
    //determine answer true or false
    //change question
    question.textContent = 
    //change answer options
    answer.textContent = 
}); 


function getQuestion() {
    for (i = 0; i < questionList.length; i++) {
        question.textContent = questionList[i];
    }
}

function getAnswer() {

}

function decideAnswer() {

}

