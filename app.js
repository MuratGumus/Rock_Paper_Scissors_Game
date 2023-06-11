//* ------ Selectors ------ *//
const selectionArticle = document.querySelector(".selection");

//? Secilen elemanlarin tayicilari
const yourChoiceDiv = document.getElementById("your-choice");

const messagePar = document.querySelector(".message");

const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")

//* ------ Variables ------ *//
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
let pcRandom;

const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//* ------ Even Listeners ------ *//

selectionArticle.addEventListener("click", (e) => {
    if (e.target.id) {
        userSelectImg.src = `./assets/${e.target.id}.png`;
        userSelectImg.alt = e.target.id;
        yourChoiceDiv.appendChild(userSelectImg);
        createPcSelection();
    }
});

//* ------ Functions ------ *//

const createPcSelection = () => {
    const pcArr = ["rock", "paper", "scissor"];
    pcRandom = pcArr[Math.floor(Math.random() * 3)];
    pcSelectImg.src = `./assets/${pcRandom}.png`;
    pcSelectImg.alt = pcRandom;
    yourChoiceDiv.appendChild(pcSelectImg);
    calculateResult();
};

const calculateResult = () => {
    // console.log(userSelectImg.alt);
    // console.log(pcSelectImg.alt);
    if (userSelectImg.alt === pcRandom) {
        draw();
    } else {
        if (userSelectImg.alt === "rock") {
            pcRandom === "paper" ? youLost() : youWin();
        } else if (userSelectImg.alt === "scissor") {
            pcRandom === "rock" ? youLost() : youWin();
        } else if (userSelectImg.alt === "paper") {
            pcRandom === "scissor" ? youLost() : youWin();
        }
    }
};

const draw = () => {
    messagePar.textContent = "Its a draw";
    scoreCardSection.style.color = YELLOW;
    messagePar.style.backgroundColor = YELLOW;
};

const youLost = () => {
    messagePar.textContent = "You Lost";
    scoreCardSection.style.color = RED;
    messagePar.style.backgroundColor = RED;
    pcScoreSpan.textContent++
};

const youWin = () => {
    messagePar.textContent = "You Win";
    scoreCardSection.style.color = GREEN;
    messagePar.style.backgroundColor = GREEN;
    yourScoreSpan.textContent++;
};
