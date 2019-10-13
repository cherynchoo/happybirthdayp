//WHY ARE YOU LOOKING AT MY CODE.

// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg= document.getElementById("qImg");
const choiceA= document.getElementById("A");
const choiceB= document.getElementById("B");
const choiceC= document.getElementById("C");
const progress= document.getElementById("progress");
const scoreContainer= document.getElementById("scoreContainer");

//create questions
let questions = [
    {
        question : "Q1 When she can't decide between the chocolate cake or brownie, what do you say?",
        imgSrc : "img/questionChidi.jpg",
        choiceA : "Come, let me decide for you.",
        choiceB : "Hurry up.",
        choiceC : "Just choose one. ",   
        correct : "A",
    },{
        question : "Q2 When she tells you she's studying now, what do you say?",
        imgSrc : "img/questionChidi.jpg",
        choiceA : "Okay, you can do it, I have absolute faith in you.",
        choiceB : "k",
        choiceC : "I shall do work too, work hard for the family",
        correct : "A",
    },{
        question : "Q3 When she's late by 5 mins, what do you say?",
        imgSrc : "img/questionEleanor.jpg",
        choiceA : "This is going into the records.",
        choiceB : "You're late. AGAIN.",
        choiceC : "It's okay, I understand why you're late.",
        correct : "C",
    },{
        question : "Q4 When she thought the donut shop was called Krispy And Kreme, what do you say?",
        imgSrc : "img/questionEleanor.jpg",
        choiceA : "HAHAHAHA HAHAHAHA HAHAHA",
        choiceB : "It's Krispy Kreme.",
        choiceC : "It's Krispy Kreme, it's ok, many ppl thought it's Krispy And Kreme too",
        correct : "C",
    },{
        question : "Q5 When she's feeling dumb, what do you say?",
        imgSrc : "img/questionJason.jpg",
        choiceA : "Don't worry, everyone else are idiots",
        choiceB : "Don't worry, you are smart.",
        choiceC : "Don't worry, you are much much much more smarter than me.",
        correct : "C",
    },{
        question : "Q6 When she's listening to Jay Chou, what do you say?",
        imgSrc : "img/questionJason.jpg",
        choiceA : "Jay chou rox.",
        choiceB : "Jay chou is not cool.",
        choiceC : "JJ Lin rox.",
        correct : "B",
    },{
        question : "Q7 When she accidentally makes a typo, what do you say (or type)?",
        imgSrc : "img/questionJanet.jpg",
        choiceA : "(Ignore it)",
        choiceB : "Hey, you've got a typo there. But it's okay, humans make mistakes.",
        choiceC : "(Type her typo again)",
        correct : "B",
    },{
        question : "Q8 If you heard her fart, what do you say?",
        imgSrc : "img/questionJanet.jpg",
        choiceA : "(Ignore it)",
        choiceB : "That was melodious.",
        choiceC : "(Fart back)",
        correct : "C",
    },{
        question : "Q9 When she wore the same dress three times in two weeks, what do you say?",
        imgSrc : "img/questionTahani.jpg",
        choiceA : "You need more clothes.",
        choiceB : "You look absolutely gorgeous.",
        choiceC : "I prefer the fake skirt.",
        correct : "C",
    },{
        question : "Q10 When you saw your birthday present, what do you say?",
        imgSrc : "img/questionMichael.jpg",
        choiceA : "Thanks, I love it!",
        choiceB : "Thanks, You have great taste!",
        choiceC : "Thanks, I didn't see what was written on the package about its contents.",
        correct : "C",
    }
];

//create variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

//render question
function renderQuestion(){
    let q = questions[runningQuestion];
    console.log("runningQuestion" + runningQuestion);

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block"; 
    renderProgress();
}

//render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+qIndex +"></div>";
    }
}

//check answer
function checkAnswer(answer){
    if (answer == questions[runningQuestion].correct){
        //answer is correct
        score ++;
        //change progress color to green
        answerIsCorrect();
    }else{
        //answer is wrong
        //change progress color to red
        answerIsWrong();
    }
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else scoreRender();
}

//answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

//answer is wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

//score render
function scoreRender(){
    scoreContainer.style.display = "block";

    //calculate the amount of qn percentage answered by user
    let scorePercent = Math.round(100 * score/questions.length);

    //choose the image based on scorePercent
    let img =   (scorePercent >=80) ? "img/5.png":
                (scorePercent >=60) ? "img/4.png":
                (scorePercent >=40) ? "img/3.png":
                (scorePercent >=20) ? "img/2.png":
                "img/1.png";
    
    scoreContainer.innerHTML = "<img src=" + img +">";
    scoreContainer.innerHTML += "<p>"+ scorePercent + "%</p>";
}