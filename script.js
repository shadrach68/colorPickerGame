let guessBtn = document.getElementById("guess");
let restBtn = document.getElementById("restart");
let wins = 0;
let gamesplayed = 0;
const maxPlay = 5;

// Checking if the value of the input is a number and the number is not more than 10 or less than 1;
guessInp.addEventListener("input", function () {
  let value = parseInt(this.value);
  if (isNaN(value) || value < 1 || value > 10) {
    this.value = "";
  }
});

guessBtn.addEventListener("click", colorGame);
restBtn.addEventListener("click", resetGame);

function colorGame() {
  gamesplayed++;

  let randNum = Math.floor(Math.random() * 10);
  let randColor = "color-" + randNum + ".png";
  let randImg = "images/" + randColor;
  let shownImg = document.querySelector("img").setAttribute("src", randImg);
  const guessInp = document.getElementById("guessInp").value;
  const dialogue = document.getElementById("dialogue");
  const dialogueM = document.getElementById("dialogue-message");
  const dialogueM2 = document.getElementById("dialogue-message2");
  let pic = document.querySelector("img");
  pic.classList.add("size");

  // giving p a textContent and color
  switch (randNum) {
    case 1:
      document.querySelector("p").textContent = "red".toUpperCase();
      document.querySelector("p").style.color = "red";
      break;
    case 2:
      document.querySelector("p").textContent = "Green".toUpperCase();
      document.querySelector("p").style.color = "green";
      break;
    case 3:
      document.querySelector("p").textContent = "Pink".toUpperCase();
      document.querySelector("p").style.color = "pink";
      break;
    case 4:
      document.querySelector("p").textContent = "Yellow".toUpperCase();
      document.querySelector("p").style.color = "yellow";
      break;
    case 5:
      document.querySelector("p").textContent = "Orange".toUpperCase();
      document.querySelector("p").style.color = "orange";
      break;
    case 6:
      document.querySelector("p").textContent = "Purple".toUpperCase();
      document.querySelector("p").style.color = "purple";
      break;
    case 7:
      document.querySelector("p").textContent = "Blue".toUpperCase();
      document.querySelector("p").style.color = "blue";
      break;
    case 8:
      document.querySelector("p").textContent = "Black".toUpperCase();
      document.querySelector("p").style.color = "black";
      break;
    case 9:
      document.querySelector("p").textContent = "White".toUpperCase();
      document.querySelector("p").style.color = "white";
      break;
    case 10:
      document.querySelector("p").textContent = "Golden".toUpperCase();
      document.querySelector("p").style.color = "gold";
      break;

    default:
      break;
  }

  //To check whether you got it right or wrong
  if (guessInp.includes(randNum)) {
    wins++;
    dialogueM.innerText = "wow you guessed it right!!!";
    dialogueM2.innerText = "Keep going!!!";
    document.getElementById("dialogue").classList.add("right");
    document.querySelector("h2").innerText = "You're Amazing, keep going!";
    // to reset the game after few seconds
    setTimeout(() => {
      shownImg = document.querySelector("img").setAttribute("src", "");
      document.getElementById("dialogue").classList.remove("right");
      document.getElementById("guessInp").value = "";
      pic.classList.remove("size");
      document.querySelector("p").textContent = "";
      gameEnd();
    }, 4000);
  } else if (guessInp === "") {
    shownImg = document
      .querySelector("img")
      .setAttribute("src", "images/bad.png");
    document.querySelector("P").textContent = "Guess can't be empty!!";
    document.querySelector("P").style.color = "red";
    guessBtn.disabled = true;

    setTimeout(() => {
      shownImg = document.querySelector("img").setAttribute("src", "");
      document.querySelector("P").textContent = "";
      pic.classList.remove("size");
      guessBtn.disabled = false;
    }, 2000);
  } else {
    dialogueM.innerText = "Sorry your guess was wrong!!!";
    dialogueM2.innerText = "Try Again...";
    document.getElementById("dialogue").classList.add("wrong");
    document.querySelector("h2").textContent = "Guess Again!";
    guessBtn.disabled = true;
  }

  setTimeout(() => {
    dialogue.classList.remove("wrong");
    shownImg = document.querySelector("img").setAttribute("src", "");
    pic.classList.remove("size");
    document.querySelector("p").textContent = "";
    document.getElementById("guessInp").value = "";
    guessBtn.disabled = false;
    gameEnd();
  }, 2000);
}

function gameEnd() {
  if (gamesplayed >= maxPlay) {
    guessInp.disabled = true;
    guessBtn.disabled = true;
    document.querySelector("h2").innerText = "Reset to play again!";

    if (wins >= 3) {
      document.getElementById("dialogue-message").innerText =
        "Congratulations! you won the game!";
      document.getElementById("dialogue-message").innerText =
        "You guessed " + wins + " out of " + maxPlay + " correctly.";
      document.getElementById("dialogue").classList.add("right");
    } else {
      document.getElementById("dialogue-message").innerText =
        "Sorry! You didn't win the game.";
      document.getElementById("dialogue-message2").innerText =
        "You guessed " + wins + " out of " + maxPlay + " correctly.";
      document.getElementById("dialogue").classList.add("wrong");
      guessBtn.disabled = true;
    }
  } else {
  }
}

function resetGame() {
  location.reload();
}
