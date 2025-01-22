let amigos = [];

let amigo = document.getElementById('amigo');
let botao = document.getElementById('botao');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
  let amigoadd = amigo.value;
  amigos.push(amigoadd);
  resultado.textContent = "O amigo adicionado foi:" + amigos;
}

function adicionarAmigo() {
  let amigoadd = amigo.value.trim();
  if (amigoadd === '') {
   alert('Por favor, insira um valor.');
   return;
  } 

amigos.push(amigoadd);
resultado.textContent = "Você adicionou: " + amigoadd ;
}