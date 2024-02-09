const perguntas = [
    {
      pergunta: "qual é o meu nome?",
      respostas: [
        "Nuno Saraiva miguel Pergentino",
        "Nuno Miguel Pergentino Saraiva",
        "Miguel nuno Pergentino sSaraiva",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o Real português da familia?",
      respostas: [
        "syja",
        "Nuno",
        "Paulo",
      ],
      correta: 2
    },
    {
      pergunta: "Eu terminei meu ensino medio em qual escola?",
      respostas: [
        "GEO",
        "Plenus",
        "Auxiladora",
      ],
      correta: 2
    },
    {
      pergunta: "Qual foi a data do dia que lhe pedi em namoro",
      respostas: [
        "07/01",
        "06/01",
        "12/01",
      ],
      correta: 1
    },
    {
      pergunta: "aonde foi nosso primeiro encontro?",
      respostas: [
        "calourada",
        "orla",
        "london-pub",
      ],
      correta: 2
    },
    {
      pergunta: "como eu te chamo?",
      respostas: [
        "kailane",
        "keliane",
        "amor",
      ],
      correta: 2
    },
    {
      pergunta: "qual é minha bebida favorita?",
      respostas: [
        "vodka",
        "cerveja",
        "cachaça",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o curso que eu faço?",
      respostas: [
        "engenharia mecânina",
        "engenharia elétrica",
        "engenharia cívil",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do projeto complemantar que faço parte ?",
      respostas: [
        "cactus",
        "fomula",
        "Baajatinga",
      ],
      correta: 2
    },
    {
      pergunta: "qual é o nome da minha cachorra?",
      respostas: [
        "xeide",
        "tequila ",
        "tequila-xeide",
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