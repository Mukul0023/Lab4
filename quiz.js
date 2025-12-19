// JavaScript Console Quiz Game

var quiz = [
    {
        question: "What is the capital of India?",
        answer: "Delhi"
    },
    {
        question:" What is 5+7 ?",
        answer:"12"
    },
    {
        question: "Which language is used for web styling?",
        answer: "css"
    },
    {
        question: "What keyword is used to declare a variable in JavaScript?",
        answer: "var"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answer: "//"
    }
];

var score = 0;

for (var i = 0; i < quiz.length; i++) {
    var userAnswer = prompt(quiz[i].question);

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quiz[i].answer) {
        alert("Correct! ");
        score++;
    } else {
        alert("Wrong \nCorrect answer is: " + quiz[i].answer);
    }
}

alert("Quiz Finished!\nYour Score: " + score + " out of " + quiz.length);
console.log("Final Score:", score, "/", quiz.length);

