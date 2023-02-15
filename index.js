import cipher from './cipher.js';

const caixa1 = document.querySelector("#caixa1");
const resultado = document.querySelector("#resultado");
const deslocamento = document.querySelector("#deslocamento");
const button = document.querySelector("#cifrar"); 

button.addEventListener("click",cifrar);

function cifrar() {
  const msgcriptografada = caixa1.value.toUpperCase();
  const offset = parseInt(deslocamento.value);
  resultado.value = cipher.encode(msgcriptografada, offset);
}

const button2 = document.querySelector("#decifrar");

button2.addEventListener("click",decifrar);

function decifrar() {
  const msgdescriptografada = caixa1.value.toUpperCase();
  const offset = parseInt(deslocamento.value);
  resultado.value = cipher.decode(msgdescriptografada, offset);
}














