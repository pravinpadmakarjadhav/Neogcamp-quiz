let readlineSync = require("readline-sync");

let score = 0;

let highScores = [{
        name: "Pravin",
        score: 3,
    },

    {
        name: "Akash",
        score: 2,
    },
]


let questions = [{
        question: "Who is the ceo of neogcamp?",
        answer: "tanvi priya"
    }, {
        question: "When is the neogcamp founded?",
        answer: "2020"
    },
    {
        question: "what is hometown of tanay pratap?",
        answer: "bokaro"
    }
];

function welcome() {
    let userName = readlineSync.question("What's your name? ");

    console.log("Welcome " + userName + " let's see if you know well neogcamp & our mentor Tanay Pratap!");
}



function play(question, answer) {
    let userAnswer = readlineSync.question(question);

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
    for (let i = 0; i < questions.length; i++) {
        let currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer)
    }
}

function showScores() {
    console.log("YAY! You SCORED: ", score);

    console.log("Check out the high scores.");

    highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();