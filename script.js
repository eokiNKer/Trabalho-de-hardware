let currentQuestion = 0;
let score = 0;
let lives = 5;

const questions = [
    {
        question: "O computador desliga sozinho durante o uso.",
        options: {
            A: "Atualizar o antivírus",
            B: "Trocar o processador",
            C: "Reinstalar o Sistema Operacional",
            D: "Reiniciar a rede"
        },
        correctAnswer: 'A',
        correctText: "Correto! Atualizar o antivírus pode resolver o problema."
    },
    {
        question: "O computador não liga. Nenhum led acende.",
        options: {
            A: "Trocar a fonte de alimentação",
            B: "Trocar o processador",
            C: "Trocar a memória RAM",
            D: "Reinstalar o sistema operacional"
        },
        correctAnswer: 'A',
        correctText: "Correto! A fonte de alimentação pode estar queimada."
    },
    {
        question: "Aparece a mensagem 'HDD failure' ao ligar o PC.",
        options: {
            A: "Limpeza no HD",
            B: "Trocar a placa mãe",
            C: "Trocar o HD",
            D: "Trocar o processador"
        },
        correctAnswer: 'C',
        correctText: "Correto! O HD pode estar com defeito."
    },
    {
        question: "Tela azul ao tentar iniciar o Windows.",
        options: {
            A: "Verificar drivers",
            B: "Restaurar o sistema",
            C: "Trocar o processador",
            D: "Verificar a memória RAM"
        },
        correctAnswer: 'B',
        correctText: "Correto! Restaurar o sistema pode corrigir o erro."
    },
    {
        question: "Imagens distorcidas e barras verticais na tela.",
        options: {
            A: "Trocar a placa de vídeo",
            B: "Trocar o processador",
            C: "Reinstalar o sistema operacional",
            D: "Trocar a memória RAM"
        },
        correctAnswer: 'A',
        correctText: "Correto! O problema está na placa de vídeo."
    },
    {
        question: "O computador trava durante o uso de programas pesados.",
        options: {
            A: "Aumentar a memória RAM",
            B: "Trocar o processador",
            C: "Reinstalar o sistema operacional",
            D: "Trocar o HD"
        },
        correctAnswer: 'A',
        correctText: "Correto! Aumentar a memória RAM pode melhorar o desempenho."
    },
    {
        question: "O computador está superaquecendo.",
        options: {
            A: "Trocar o cooler",
            B: "Trocar a pasta térmica",
            C: "Trocar o processador",
            D: "Limpar os pentes de memória"
        },
        correctAnswer: 'B',
        correctText: "Correto! Trocar a pasta térmica pode evitar o superaquecimento."
    },
    {
        question: "O computador emite bips ao ligar.",
        options: {
            A: "Verificar a placa mãe",
            B: "Verificar a memória RAM",
            C: "Verificar o processador",
            D: "Verificar o teclado"
        },
        correctAnswer: 'B',
        correctText: "Correto! Bips podem indicar problemas na memória RAM."
    },
    {
        question: "O computador não reconhece o teclado.",
        options: {
            A: "Trocar o teclado",
            B: "Verificar os drivers",
            C: "Reinstalar o sistema operacional",
            D: "Trocar a placa mãe"
        },
        correctAnswer: 'A',
        correctText: "Correto! Se o teclado não estiver funcionando, ele deve ser trocado."
    },
    {
        question: "O computador não está conectando à internet.",
        options: {
            A: "Reiniciar o modem",
            B: "Trocar o roteador",
            C: "Reiniciar o computador",
            D: "Trocar o cabo Ethernet"
        },
        correctAnswer: 'A',
        correctText: "Correto! Reiniciar o modem pode resolver o problema de conexão."
    },
    // Adicionando mais 10 perguntas para aumentar o número total de perguntas
    {
        question: "O PC reinicia sozinho sem aviso.",
        options: {
            A: "Verificar superaquecimento",
            B: "Atualizar os drivers",
            C: "Substituir a fonte de alimentação",
            D: "Trocar a placa de vídeo"
        },
        correctAnswer: 'A',
        correctText: "Correto! O superaquecimento pode causar reinicializações inesperadas."
    },
    {
        question: "O monitor exibe 'Sem Sinal'.",
        options: {
            A: "Verificar os cabos",
            B: "Trocar o monitor",
            C: "Trocar a placa mãe",
            D: "Reinstalar o sistema operacional"
        },
        correctAnswer: 'A',
        correctText: "Correto! Cabos mal conectados podem causar esse problema."
    },
    {
        question: "O sistema operacional demora para iniciar.",
        options: {
            A: "Trocar o HD",
            B: "Limpar os arquivos temporários",
            C: "Atualizar a BIOS",
            D: "Verificar programas na inicialização"
        },
        correctAnswer: 'D',
        correctText: "Correto! Muitos programas na inicialização podem reduzir a velocidade do sistema."
    },
    {
        question: "Erro 'Disk Boot Failure'.",
        options: {
            A: "Trocar o disco rígido",
            B: "Verificar a sequência de boot",
            C: "Trocar o processador",
            D: "Atualizar o Windows"
        },
        correctAnswer: 'B',
        correctText: "Correto! Configurar a sequência de boot corretamente pode resolver o problema."
    },
    {
        question: "Ruído alto vindo do computador.",
        options: {
            A: "Limpar os coolers",
            B: "Trocar o HD",
            C: "Trocar a memória RAM",
            D: "Trocar a fonte de alimentação"
        },
        correctAnswer: 'A',
        correctText: "Correto! Coolers sujos ou com defeito podem fazer muito barulho."
    },
    {
        question: "Perda de desempenho no sistema.",
        options: {
            A: "Desfragmentar o disco",
            B: "Atualizar a placa mãe",
            C: "Trocar o monitor",
            D: "Reinstalar o sistema operacional"
        },
        correctAnswer: 'A',
        correctText: "Correto! A desfragmentação do disco pode melhorar o desempenho."
    },
    {
        question: "O sistema operacional não carrega.",
        options: {
            A: "Reparar o boot",
            B: "Trocar a fonte de alimentação",
            C: "Atualizar o BIOS",
            D: "Reinstalar os drivers"
        },
        correctAnswer: 'A',
        correctText: "Correto! Reparar o boot pode corrigir problemas no carregamento do sistema."
    },
    {
        question: "A tela do monitor pisca frequentemente.",
        options: {
            A: "Verificar os cabos",
            B: "Trocar o monitor",
            C: "Atualizar os drivers de vídeo",
            D: "Trocar a memória RAM"
        },
        correctAnswer: 'C',
        correctText: "Correto! Drivers desatualizados de vídeo podem causar esse problema."
    }
];

function loadQuestion() {
    if (lives === 0) {
        endGame();
        return;
    }

    const question = questions[currentQuestion];
    const questionContainer = document.getElementById('question');
    const result = document.getElementById('result');
    
    result.textContent = "";
    questionContainer.innerHTML = `
        <p><strong>Sintoma:</strong> ${question.question}</p>
        <p>Qual é a melhor solução?</p>
        <div class="options">
            <button onclick="checkAnswer('A')">${question.options.A}</button>
            <button onclick="checkAnswer('B')">${question.options.B}</button>
            <button onclick="checkAnswer('C')">${question.options.C}</button>
            <button onclick="checkAnswer('D')">${question.options.D}</button>
        </div>
    `;
}

function checkAnswer(answer) {
    const question = questions[currentQuestion];
    const result = document.getElementById('result');

    if (answer === question.correctAnswer) {
        result.textContent = question.correctText;
        result.style.color = "green";
        score += 10;
    } else {
        result.textContent = "Errou!";
        result.style.color = "red";
        lives--;
        updateLives();
    }

    document.getElementById('score').textContent = `Pontuação: ${score}`;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 1500);
    } else {
        setTimeout(endGame, 1500);
    }
}

function updateLives() {
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart, index) => {
        heart.textContent = index < lives ? "❤️" : "💔";
    });
}

function endGame() {
    document.getElementById('result').textContent = `Fim de jogo! Pontuação: ${score}`;
    document.getElementById('restart-button').style.display = "inline-block";
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    lives = 5;

    document.getElementById('score').textContent = "Pontuação: 0";
    document.getElementById('result').textContent = "";
    document.getElementById('restart-button').style.display = "none";
    updateLives();
    loadQuestion();
}

loadQuestion();
