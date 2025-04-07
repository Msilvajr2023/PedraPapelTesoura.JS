document.getElementById("boraJogar").addEventListener("click", function() {
  let nome = prompt("Digite seu nome:");
  if (nome === null) {
      return;
  }

  alert("Olá, " + nome + "! Bem-vindo! Vamos Jogar Jokenpô!");

  let idade;

  do {
      idade = prompt(nome + " Digite sua idade:");

      if (idade === null) {
          return;
      }

      if (parseInt(idade) > 120) {
          alert("Idade inválida");
      }

  } while (!/^\d+$/.test(idade) || parseInt(idade) > 120);

  idade = parseFloat(idade);

  if (idade >= 18) {
      alert("Você é maior de idade!");

      let continuarJogando = true; // Variável para controlar o loop do jogo

      while (continuarJogando) {
          let jogador;

          do {
              jogador = prompt(nome + " Escolha 1-Pedra, 2-Papel, 3-Tesoura");

              if (jogador === null) {
                  return;
              }

              if (jogador !== '1' && jogador !== '2' && jogador !== '3') {
                  alert(nome + " Escolha inválida! Digite um número de 1 a 3");
              }

          } while (jogador !== '1' && jogador !== '2' && jogador !== '3');

          let maquina = Math.floor(Math.random() * 3) + 1;

          // Lógica para determinar o vencedor
          if (jogador === '1') {
              if (maquina === 1) {
                  alert(nome + " Deu empate");
              } else if (maquina === 2) {
                  alert(nome + " Você perdeu");
              } else if (maquina === 3) {
                  alert(nome + " Você ganhou");
              }
          } else if (jogador === '2') {
              if (maquina === 1) {
                  alert(nome + " Você ganhou");
              } else if (maquina === 2) {
                  alert(nome + " Deu empate");
              } else if (maquina === 3) {
                  alert(nome + " Você perdeu");
              }
          } else if (jogador === '3') {
              if (maquina === 1) {
                  alert(nome + " Você perdeu");
              } else if (maquina === 2) {
                  alert(nome + " Você ganhou");
              } else if (maquina === 3) {
                  alert(nome + " Deu empate");
              }
          }

          // Pergunta se o jogador deseja continuar jogando
          let resposta;
          do {
              resposta = prompt(nome + " Deseja continuar jogando? (sim/não)");

              if (resposta === null) {
                  return; // Se o usuário cancelar, sai da função
              }

              if (resposta.toLowerCase() !== 'sim' && resposta.toLowerCase() !== 'não') {
                  alert(nome + " Por favor, digite 'sim' ou 'não'.");
              }

          } while (resposta.toLowerCase() !== 'sim' && resposta.toLowerCase() !== 'não');

          // Define a variável continuarJogando com base na resposta
          continuarJogando = resposta.toLowerCase() === 'sim';
      }

  } else {
      alert("Você é menor de idade!");
  }
  
  alert("Obrigado por jogar, " + nome + "! Até a próxima!");
});