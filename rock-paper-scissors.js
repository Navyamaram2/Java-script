const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscore");
const computerscoredisplay = document.getElementById("computerscore");

let playerscore = 0;
let computerscore = 0;

function playergame(playerchoice) {
    // Generate computer's choice
    const computerchoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (playerchoice === computerchoice) {
        result = "It's a tie";
    } else {
        switch (playerchoice) {
            case "rock":
                if (computerchoice === "scissors") {
                    result = "You win";
                    playerscore++;
                } else {
                    result = "Computer wins";
                    computerscore++;
                }
                break;
            case "paper":
                if (computerchoice === "rock") {
                    result = "You win";
                    playerscore++;
                } else {
                    result = "Computer wins";
                    computerscore++;
                }
                break;
            case "scissors":
                if (computerchoice === "paper") {
                    result = "You win";
                    playerscore++;
                } else {
                    result = "Computer wins";
                    computerscore++;
                }
                break;
        }
    }

    // Update the display elements
    playerdisplay.textContent = `Player: ${playerchoice}`;
    computerdisplay.textContent = `Computer: ${computerchoice}`;
    resultdisplay.textContent = result;

    // Update the score display
    playerscoredisplay.textContent = `Player Score: ${playerscore}`;
    computerscoredisplay.textContent = `Computer Score: ${computerscore}`;
}
