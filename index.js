const readlineSync = require("readline-sync");
const chalk = require("chalk");
const score = 0;


const highScores = [{
        name: "Tanay",
        score: 3,
    },

    {
        name: "pravin",
        score: 2,
    },
]


const questions = [{
        question: "What was the first job he had?",
        answer: "no"

    }, {
        question: "Where is tanay pratap's hometown?",
        answer: " Bokaro"
    },
    {
        question: "Do you know when neogcamp is founded?",
        answer: " 2020"



    }, {
        question: "Do you know when neogcamp is founded?",
        answer: " 2020"
    }
];

function welcome() {
    const userName = readlineSync.question("What's your name? ");

    console.log("Welcome " + userName + "let's see if you know our Mentor Tanay Pratap");
}



function play(question, answer) {
    const userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("right!");
        score = score + 1;

    } else {
        console.log("wrong!");

    }

    console.log("current score: ", score);
    console.log("-------------")
}

function game() {
    for (const i = 0; i < questions.length; i++) {
        const currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer)
    }
}

function showScores() {
    console.log("YAY! You SCORED: ", score);

    console.log("Check out the high scores, if you should be there ping me and I'll update it");

    highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();