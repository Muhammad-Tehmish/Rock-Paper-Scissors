
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
let lightModeIcon = document.querySelector("#lightModeIcon");
let darkModeIcon = document.querySelector("#darkModeIcon");
let body = document.querySelector("body");
let userNamePara = document.querySelector("#userName");

const clickSound = new Audio("assets/mouse-click-sound.mp3");

// let userName = prompt("Enter Your Username to Start the Game");
// if (!userName.trim()) { 
//   userNamePara.innerText = "You";
// } else {
//   userNamePara.innerText = userName;
// }

const toggleDarkMode = () => {
  lightModeIcon.addEventListener("click", () => {
    body.classList.add("darkMode");
    lightModeIcon.classList.add("hide"); 
    darkModeIcon.classList.remove("hide");
  });

  darkModeIcon.addEventListener("click", () => {
    body.classList.remove("darkMode");
    darkModeIcon.classList.add("hide"); 
    lightModeIcon.classList.remove("hide"); 
  });
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
  
    if (userChoice === compChoice) {
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        userWin = compChoice === "scissor" ? false : true;
      } else {
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);        
        clickSound.currentTime = 0;
        clickSound.play();
    })
})

const getCompChoice = () => {
    const compOptions = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return compOptions[randomIdx];
}

const drawGame = () => {
    msg.innerText = "Game Drawn!"
    msg.style.backgroundColor = "#DBA213";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
};

toggleDarkMode();