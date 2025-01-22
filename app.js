let amigos = [];
let amigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
  let novoAmigo = amigo.value.trim();

  // Verifica se o nome já existe na lista
  if (amigos.includes(novoAmigo)) {
    alert('Este nome já foi adicionado.');
    return;
  }

  // Adiciona o novo amigo à lista e à interface
  amigos.push(novoAmigo);
  const novoItem = document.createElement('li');
  novoItem.textContent = novoAmigo;
  listaAmigos.appendChild(novoItem);

  // Limpa o campo de entrada
  amigo.value = '';
}

//Função para sortear os amigos
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um nome para realizar o sorteio.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}
