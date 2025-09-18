
let guessBtn = document.getElementById("guess");
let restBtn = document.getElementById("restart");

guessBtn.addEventListener("click", colorGame);
restBtn.addEventListener("click", resetGame);

function colorGame() {
  let randNum = Math.random().toFixed(1) * 10;
  let randColor = "color-" + randNum + ".png";
  let randImg = "images/" + randColor;
  let shownImg = document.querySelector("img").setAttribute("src", randImg);
  const guessInp = document.getElementById("guessInp").value;
  const dialogue = document.getElementById("dialogue");
  const dialogueM = document.getElementById("dialogue-message");
  const dialogueM2 = document.getElementById("dialogue-message2");

  // giving p a textContent and color
  if (randNum <= 3) {
    document.querySelector("p").textContent = "red".toUpperCase();
    document.querySelector("p").style.color = "red";
  } else if (randNum > 3 && randNum <= 6) {
    document.querySelector("p").textContent = "yellow".toUpperCase();
    document.querySelector("p").style.color = "yellow";
  } else {
    document.querySelector("P").textContent = "blue".toUpperCase();
    document.querySelector("p").style.color = "blue";
  }

  //To check whether you got it right or wrong
  if (guessInp.includes(randNum)) {
    dialogueM.innerText = "wow you guessed it right!!!";
    dialogueM2.innerText = "You Won hurray!!!!";
    document.getElementById("dialogue").classList.add("right");
    guessBtn.disabled = true;
    // to reset the game after few seconds
    setTimeout(() => {
      document.getElementById("dialogue").classList.remove("right");
      document.getElementById("guessInp").value = "";
    }, 4000);
  } else {
    dialogueM.innerText = "Sorry your guess was wrong!!!";
    dialogueM2.innerText = "Try Again...";
    document.getElementById("dialogue").classList.add("wrong");
  }

  document.querySelector("h2").textContent = "Guess the next color!!!";

  setTimeout(() => {
    dialogue.classList.remove("wrong");
  }, 2000);
}

function resetGame() {
  location.reload();
}
// colorGame();
