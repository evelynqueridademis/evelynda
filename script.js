let fontSize = 1;

function changeFontSize(step) {
  fontSize += step * 0.1;
  document.getElementById("content").style.fontSize = fontSize + "rem";
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

function readText() {
  const texto = document.getElementById("content").innerText;
  const msg = new SpeechSynthesisUtterance(texto);
  msg.lang = 'pt-BR';
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}