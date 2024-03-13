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
let timeInterval ;
let palabraH1 = document.querySelector("#randomWord");
let inputText = document.querySelector("#text");
let timeSpan = document.querySelector("#timeSpan");
let score = document.querySelector("#score");
let iniciarJuego = document.querySelector("#iniciar")
let reiniciarJuego = document.querySelector("#resetear")
let gameOver = document.querySelector("#end-game-container")




function randomWords() {
  let numRandom = Math.random() * words.length - 1;
  numRandom = Math.ceil(numRandom);
  palabraAleatoria = words[numRandom];

  return (palabraH1.innerHTML = palabraAleatoria);
}

function validarPalabra(palabra1, palabra2) {
  if (palabra1 === palabra2) {
    inputText.value = "";
    palabraIngresada = "";
    timeSpan.textContent = parseInt(timeSpan.textContent) + 3;
    score.textContent = parseInt(score.textContent) + 1;
    randomWords();
  }
}

function actualizarTiempo(){
    if( parseInt(timeSpan.textContent) > 0){
      timeSpan.textContent = parseInt(timeSpan.textContent)- 1
    }else{
      clearInterval(timeInterval);
      gameOver.textContent = `tu puntuacion fue de: ${score.textContent}`
    }
}

function jugar(){ 
  timeInterval =  setInterval(actualizarTiempo, 1000);
}

iniciarJuego.addEventListener("click", () =>{   
  reiniciarJuego.classList.toggle("oculto")
  iniciarJuego.classList.toggle("oculto")
  jugar() 
})

reiniciarJuego.addEventListener("click", () =>{
  gameOver.textContent = ""
  timeSpan.textContent = "10s"
  score.textContent = 0
})

inputText.addEventListener("keyup", () => {
  palabraIngresada = inputText.value;
  validarPalabra(palabraIngresada, palabraAleatoria);
});

randomWords();
