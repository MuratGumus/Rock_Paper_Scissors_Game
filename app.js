//* ------ Selectors ------ *//
const selectionArticle = document.querySelector(".selection");

//? Secilen elemanlarin tayicilari
const yourChoiceDiv = document.getElementById("your-choice");

//* ------ Variables ------ *//
let userSelectImg = document.createElement("img");

//* ------ Even Listeners ------ *//

selectionArticle.addEventListener("click", (e) => {
    // console.log(e.target.id);
    if (e.target.id) {
        userSelectImg.src = `./assets/${e.target.id}.png`;
        userSelectImg.alt = e.target.id;
        yourChoiceDiv.appendChild(userSelectImg);
    }
});

// const rockImg = document.getElementById("rock");
// const paperImg = document.getElementById("paper");
// const scissorImg = document.getElementById("scissor");

// rockImg.addEventListener("click", () => {
//     image.src = "./assets/rock.png";
//     image.alt = "rock";
//     yourChoiceDiv.appendChild(image);
// });

// paperImg.addEventListener("click", () => {
//     image.src = "./assets/paper.png";
//     image.alt = "paper";
//     yourChoiceDiv.appendChild(image);
// });

// scissorImg.addEventListener("click", () => {
//     image.src = "./assets/scissor.png";
//     image.alt = "scissor";
//     yourChoiceDiv.appendChild(image);
// });

//* ------ Functions ------ *//
