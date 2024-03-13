const words = [
  "californication",
  "plataforma5",
  "black",
  "summer",
  "flea",
  "aeroplane",
  "peppers",
  "unlimited",
  "arcadium",
  "love",
  "getaway",
  "stadium",
  "quixoticelixer",
  "quarter",
  "snow",
  "dylan",
  "zephyr",
  "funky",
  "chili",
];
let palabraAleatoria;
let palabraIngresada = "";
let palabraH1 = document.querySelector("#randomWord");
let inputText = document.querySelector("#text");
let timeSpan = document.querySelector("#timeSpan");
let score = document.querySelector("#score");

function randomWords() {
  let numRandom = Math.random() * words.length - 1;
  numRandom = Math.ceil(numRandom);
  palabraAleatoria = words[numRandom];

  return (palabraH1.innerHTML = palabraAleatoria);
}

function validarPalabra(palabra1, palabra2) {
  // console.log(palabra1 + " " + palabra2);
  if (palabra1 === palabra2) {
    inputText.value = "";
    palabraIngresada = "";
    timeSpan.textContent = parseInt(timeSpan.textContent) + 3 + "s";
    score.textContent = parseInt(score.textContent) + 1;
    randomWords();
  }
}

inputText.addEventListener("keyup", () => {
  palabraIngresada = inputText.value;
  validarPalabra(palabraIngresada, palabraAleatoria);
});

randomWords();
