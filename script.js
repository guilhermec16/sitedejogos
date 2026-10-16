function comprar(nomeJogo) {
  alert('Comprado: ' + nomeJogo);
}

function filtrarJogos() {
  var texto = document.getElementById('inputPesquisa').value;
  var jogos = document.querySelectorAll('.cartao-jogo');
  
  for (var i = 0; i < jogos.length; i++) {
    var titulo = jogos[i].querySelector('h3').innerText;
    if (titulo.indexOf(texto) > -1) {
      jogos[i].style.display = 'block';
    } else {
      jogos[i].style.display = 'none';
    }
  }
}

function adicionarJogo() {
  var nome = document.getElementById('novoNome').value;
  var preco = document.getElementById('novoPreco').value;
  var desc = document.getElementById('novaDescricao').value;

  if (nome == "" || preco == "") {
    alert("Preencha o nome e o preço!");
    return;
  }

  var htmlNovo = '<div class="cartao-jogo">' +
  '<img src="jogo1.jpg" alt="' + nome + '">' +
    '<h3>' + nome + '</h3>' +
    '<p>' + desc + '</p>' +
    '<div class="preco">R$ ' + preco + '</div>' +
    '<button class="butao-comprar" onclick="comprar(\'' + nome + '\')">Comprar</button>' +
    '</div>';

  document.getElementById('listaJogos').innerHTML += htmlNovo;
  document.getElementById('novoNome').value = '';
  document.getElementById('novoPreco').value = '';
  document.getElementById('novaDescricao').value = '';
}