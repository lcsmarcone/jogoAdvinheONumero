'use strict';

let numeroSecreto = Math.trunc(Math.random() * 20) + 1;
let pontos = 20;
let recorde = 0;

const mostrarMensagem = function (mensagem) {
  document.querySelector('.mensagem').textContent = mensagem;
};

// Essa função serve para quando o valor for inserir no input o button possa checar o valor inserido
document.querySelector('.confira').addEventListener('click', function () {
  const advinhe = Number(document.querySelector('.advinhe').value);
  console.log(advinhe, typeof advinhe);

  document.querySelector('.numero').textContent = numeroSecreto;

  // Quando não há valor inserido
  if (!advinhe) {
    mostrarMensagem('🛑 Insira um número!');

    // Quando o jogador vence
    // Mostra a  mensagem, mostra o valor escondido, troca o background e aumenta o tamanho da caixa
  } else if (advinhe === numeroSecreto) {
    mostrarMensagem('🎊 Número correto!');
    document.querySelector('.numero').textContent = numeroSecreto;

    // Para selecionar um elemento CSS que tem nome composto deve-se substituir o hífen pela letra maiúscula da próxima palavra
    // Deve-se colocar as informações dentro de aspas
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.numero').style.width = '30rem';

    // Esse statement serve para inserir o valor da pontuação ao record
    // Se o valor dos pontos na rodada seguinte for maior que o recorde, esse valor é reescrito
    if (pontos > recorde) {
      recorde = pontos;
      document.querySelector('.recorde').textContent = recorde;
    }

    // Quando o jogador erra a tentativa
  } else if (advinhe !== numeroSecreto) {
    // Statement que mostra se o valor diferente é mais baixo ou mais alto
    // Vai reduzir o valor da pontuacao a cada tentativa
    // Se o valor chegar a zero mostra a mensagem que o jogador perdeu o jogo
    if (pontos > 1) {
      mostrarMensagem(
        advinhe > numeroSecreto ? '📈 Muito alto!' : '📉 Muito baixo!'
      );
      pontos--; // pontos = pontos - 1
      document.querySelector('.pontos').textContent = pontos;
    } else {
      mostrarMensagem('🤯 Você perdeu o jogo!');
      document.querySelector('.pontos').textContent = 0;
    }
  }
});

document.querySelector('.novamente').addEventListener('click', function () {
  pontos = 20;
  numeroSecreto = Math.trunc(Math.random() * 20) + 1;

  mostrarMensagem('Comece advinhando...');
  document.querySelector('.pontos').textContent = pontos;
  document.querySelector('.numero').textContent = '?';
  document.querySelector('.advinhe').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.numero').style.width = '15rem';
});
