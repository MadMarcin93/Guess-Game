const minNumb = 1;
const maxNumb = 100;
let randomNumb = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;
let attempts = 0;

const guessField = document.querySelector(".guessField");
const message = document.getElementById("message");

guessField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const userGuess = Number(guessField.value);
    attempts++;

    if (userGuess < minNumb || userGuess > maxNumb) {
      message.textContent = `Por favor, elige un número entre ${minNumb} y ${maxNumb}.`;
    } else if (userGuess < randomNumb) {
      message.textContent = "Demasiado bajo. Intenta de nuevo.";
    } else if (userGuess > randomNumb) {
      message.textContent = "Demasiado alto. Intenta de nuevo.";
    } else {
      message.textContent = `¡Felicidades! Adivinaste el número ${randomNumb} en ${attempts} intentos.`;
      guessField.disabled = true;
    }

    guessField.value = "";
  }
});
guessField.focus(); // Coloca el cursor en el campo de entrada al cargar la página

// Reiniciar el juego al hacer clic en el mensaje de felicitaciones
message.addEventListener("click", function () {
  if (message.textContent.startsWith("¡Felicidades!")) {
    randomNumb = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;
    attempts = 0;
    message.textContent = "";
    guessField.disabled = false;
    guessField.value = "";
    guessField.focus();
  }
});
