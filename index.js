const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para comentários em JavaScript?",
      respostas: [
        "// Comentário A",
        "/* Comentário B */",
        "<!-- Comentário C -->",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable nomeVariavel = valor;",
        "var nomeVariavel = valor;",
        "let nomeVariavel = valor;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara dois valores para igualdade, sem verificar o tipo.",
        "Compara dois valores para igualdade, verificando o tipo.",
        "Compara dois valores para desigualdade, sem verificar o tipo.",
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreveria 'Hello World' em um alerta em JavaScript?",
      respostas: [
        "msgBox('Hello World');",
        "alert('Hello World');",
        "alertBox('Hello World');",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector()'?",
      respostas: [
        "Selecionar vários elementos com a mesma classe.",
        "Selecionar um elemento pelo seu ID.",
        "Selecionar um elemento pelo seu seletor CSS.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro",
      ],
      correta: 2
    },
    {
      pergunta: "Como você pode verificar o tipo de uma variável em JavaScript?",
      respostas: [
        "typeof variableName;",
        "typeOf(variableName);",
        "getType(variableName);",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()'?",
      respostas: [
        "Adicionar uma classe a um elemento HTML.",
        "Anexar um manipulador de eventos a um elemento HTML.",
        "Alterar o conteúdo de um elemento HTML.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída do código 'console.log(3 + 2 + '5');'?",
      respostas: [
        "10",
        "7",
        "Error",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "for (var i = 0; i <= 5; i++)",
        "for (let i = 0; i < 5; i++)",
      ],
      correta: 2
    }
  ];
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
  
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
    //loo ou laço de repetição    
    ///codigo da pergunta, ele pego o "molde" que foi feito no html e chama ele de templete,assim copiando o molde da     pertunta selencionando pelo h3 que é a funte da letra
    for(const item  of perguntas) {
      const quizitem = template.content.cloneNode(true)
      quizitem.querySelector('h3') . textContent = item.pergunta
      ////assim fazendo o mesmo nas perguntas só que nas perguntas o loop é feito 3 vezes,intendtificando o moolde pela tag dt,sendo dt filho de dl.assim  ele copia o molde junto com a as respstas 
     for(let resposta of item.respostas){
      const dt = quizitem . querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
      dt.querySelector('input').value=item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
       const estacorreta = event.target.value == item.correta
       corretas.delete(item)
       if(estacorreta) { 
         corretas.add (item)
       }
        mostrarTotal.textContent= corretas.size + ' de ' + totalDePerguntas
    } 
  
    quizitem.querySelector('dl').appendChild(dt)
    }
    ///esse codigo remove o molde de resposta A
    quizitem.querySelector('dl dt'). remove()
  
    //colocar a pergunta na tela 
    quiz.appendChild(quizitem)
  
    }