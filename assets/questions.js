// Questões autorais sobre os assuntos de Fundamentos de Programação (linguagem C).
// Cada alternativa traz uma explicação própria para apoiar a revisão.
export const exams = [
  {
    "id": "simulado-1",
    "number": 1,
    "subject": "Lógica e fluxograma",
    "subtitle": "Algoritmo, fluxograma, teste de mesa e contador.",
    "questions": [
      {
        "id": "s1-q1",
        "topics": [
          "algoritmo"
        ],
        "context": "Uma receita de suco de laranja traz, como último passo, o texto: \"Coe o suco e adoce a gosto.\"",
        "prompt": "Qual característica de um bom algoritmo esse passo deixa de cumprir?",
        "options": [
          {
            "text": "Finitude, porque o passo não tem um fim definido.",
            "explanation": "Finitude diz que o algoritmo termina depois de um número finito de passos. Esse passo não impede isso."
          },
          {
            "text": "Saída, porque o suco não é exibido como resultado.",
            "explanation": "Saída é o resultado produzido. A receita já produz o suco; o passo não deixa de produzir algo."
          },
          {
            "text": "Definição, porque \"a gosto\" muda de pessoa para pessoa.",
            "explanation": "Correta. Cada passo precisa ter um único sentido. \"A gosto\" deixa a quantidade em aberto, então duas pessoas adoçariam de jeitos diferentes. Um passo definido seria \"adoce com duas colheres de sopa de açúcar\"."
          },
          {
            "text": "Nenhuma, porque a receita tem começo e fim.",
            "explanation": "Ter começo e fim não garante que todas as características sejam cumpridas. A imprecisão do passo continua existindo."
          },
          {
            "text": "Ordem, porque coar não pode vir antes de adoçar.",
            "explanation": "Não há violação de ordem aqui: coar e depois adoçar é uma sequência válida."
          }
        ],
        "correct": 2,
        "explanation": "Um algoritmo precisa ser definido: cada passo deve ter uma única interpretação. \"A gosto\" é subjetivo, e por isso o passo não se executa de forma padronizada. Ao reescrever, troque o termo vago por uma quantidade concreta.",
        "tip": "Se duas pessoas poderiam executar o passo de jeitos diferentes, ele não está definido."
      },
      {
        "id": "s1-q2",
        "topics": [
          "fluxograma"
        ],
        "context": "Um fluxograma recebe a idade de uma pessoa e precisa decidir se ela é maior de idade (18 anos ou mais) ou menor de idade.",
        "prompt": "Qual símbolo representa essa decisão e quantas saídas ele tem?",
        "options": [
          {
            "text": "Retângulo, com uma única saída.",
            "explanation": "Retângulo representa processamento, como um cálculo ou uma atribuição. Ele não decide nada."
          },
          {
            "text": "Losango, com três saídas, uma para cada faixa etária possível.",
            "explanation": "A pergunta \"idade >= 18?\" tem duas respostas. Três saídas exigiria outra pergunta, como \"idade >= 65?\", que não está no enunciado."
          },
          {
            "text": "Paralelogramo, com duas saídas.",
            "explanation": "Paralelogramo representa entrada ou saída de dados. Ele não decide entre caminhos."
          },
          {
            "text": "Losango, com duas saídas: sim e não.",
            "explanation": "Correta. O losango representa a decisão, e a pergunta \"idade >= 18?\" tem exatamente duas respostas possíveis."
          },
          {
            "text": "Círculo, com uma saída que aponta para o fim.",
            "explanation": "Círculo, quando usado, marca um conector entre partes do fluxograma. Ele não representa a decisão."
          }
        ],
        "correct": 3,
        "explanation": "No losango, a linha que sai depende da resposta (verdadeiro ou falso). Em pseudocódigo, isso vira um se/senão. O número de saídas depende de quantas respostas a pergunta admite, não do número de faixas do problema.",
        "tip": "Losango é decisão; retângulo é processamento; paralelogramo é entrada e saída."
      },
      {
        "id": "s1-q3",
        "topics": [
          "contador",
          "teste-mesa"
        ],
        "context": "Um professor escreveu um trecho para somar os números de 1 até 3, e pediu aos alunos que fizessem o teste de mesa.",
        "code": "int i, soma;\nsoma = 0;\nfor(i = 1; i <= 3; i++){\n    soma = soma + i;\n}",
        "prompt": "Qual é o valor de soma quando o laço termina?",
        "options": [
          {
            "text": "3",
            "explanation": "Esse seria só o último valor de i. O acumulador guarda a soma de todas as voltas, não apenas a última."
          },
          {
            "text": "5",
            "explanation": "5 seria a soma de 2 e 3, o que ignora a primeira volta, em que i vale 1."
          },
          {
            "text": "6",
            "explanation": "Correta. Volta 1: soma = 0 + 1 = 1. Volta 2: soma = 1 + 2 = 3. Volta 3: soma = 3 + 3 = 6. Quando i vale 4, o teste i <= 3 dá falso e o laço para."
          },
          {
            "text": "4",
            "explanation": "4 é o valor de i depois que o laço termina, não o de soma. Quem guarda o resultado acumulado é soma."
          },
          {
            "text": "10",
            "explanation": "10 é a soma de 1 a 4. O laço para antes de i chegar a 4, então esse valor não entra."
          }
        ],
        "correct": 2,
        "explanation": "Esse é o padrão de acumulador: uma variável começa com um valor neutro (0 para soma) e recebe o valor da volta a cada iteração. No teste de mesa, você anota i e soma em cada linha, até o teste falhar.",
        "tip": "O acumulador começa no neutro da operação: 0 para soma, 1 para produto."
      },
      {
        "id": "s1-q4",
        "topics": [
          "contador",
          "teste-mesa"
        ],
        "context": "Um aluno quer calcular o fatorial de 4, multiplicando os números de 1 a 4. Ele escreveu o trecho abaixo.",
        "code": "int n, produto;\nproduto = 1;\nn = 1;\nwhile(n <= 4){\n    produto = produto * n;\n    n = n + 1;\n}",
        "prompt": "Quais são os valores de n e de produto quando o laço termina?",
        "options": [
          {
            "text": "n = 4 e produto = 24",
            "explanation": "n = 4 é o último valor que entrou no produto, mas o teste acontece com n antes de cada volta. Quando n <= 4 dá falso, n já vale 5."
          },
          {
            "text": "n = 5 e produto = 10",
            "explanation": "10 é a soma de 1 a 4, não o produto. O acumulador usa multiplicação, então o resultado é 24."
          },
          {
            "text": "n = 5 e produto = 24",
            "explanation": "Correta. produto passa por 1, 2, 6 e 24, uma volta por número. Como n é incrementado no fim de cada volta, ao sair do laço ele vale 5."
          },
          {
            "text": "n = 5 e produto = 4",
            "explanation": "produto = 4 aconteceria se a variável fosse sobrescrita a cada volta, em vez de acumulada. Aqui cada volta usa o valor anterior de produto."
          },
          {
            "text": "n = 4 e produto = 10",
            "explanation": "Além de usar soma no lugar de multiplicação, o valor de n também está errado: ao terminar, n é 5."
          }
        ],
        "correct": 2,
        "explanation": "O acumulador de produto começa em 1, o elemento neutro da multiplicação. Se começasse em 0, todo o resultado ficaria 0. O contador n é incrementado depois de cada volta, por isso ele sai do laço com o valor que falhou no teste.",
        "tip": "Acumulador de multiplicação começa em 1; começar em 0 zera tudo."
      },
      {
        "id": "s1-q5",
        "topics": [
          "fluxograma",
          "condicional"
        ],
        "context": "Um fluxograma classifica uma nota de 0 a 10 em A, B ou C. A primeira decisão pergunta \"nota >= 9?\". Se a resposta for não, a segunda pergunta é \"nota >= 7?\". Se essa também for não, o fluxo vai para C.",
        "prompt": "Qual afirmação sobre esse fluxograma está correta?",
        "options": [
          {
            "text": "Os dois losangos formam uma decisão com três caminhos, e a ordem em que os testes aparecem importa.",
            "explanation": "Correta. A primeira decisão separa A; a segunda separa B e C. Se a ordem fosse trocada, uma nota 9 cairia em B, pois também satisfaz nota >= 7."
          },
          {
            "text": "A ordem dos losangos não importa, porque cada um testa uma faixa diferente.",
            "explanation": "A ordem importa, porque as faixas são encadeadas: nota 9 também satisfaz nota >= 7."
          },
          {
            "text": "O segundo losango nunca é executado, porque o primeiro já cobre todas as notas.",
            "explanation": "O primeiro losango só separa a faixa de 9 para cima. Todas as notas abaixo de 9 chegam ao segundo."
          },
          {
            "text": "O fluxograma precisa de dois símbolos de fim, um para cada losango.",
            "explanation": "Vários caminhos podem terminar no mesmo símbolo de Fim. Losangos não exigem símbolos de fim extras."
          },
          {
            "text": "O losango não pode ter uma saída \"não\", então a estrutura está errada.",
            "explanation": "Losango tem duas saídas, sim e não, e é exatamente isso que o fluxo usa. A estrutura está correta."
          }
        ],
        "correct": 0,
        "explanation": "Quando há mais de duas opções, o fluxo usa losangos em sequência, cada um refinando a faixa que sobrou. Por isso a ordem dos testes muda o resultado: o teste mais restritivo (9) precisa vir primeiro.",
        "tip": "Em faixas encadeadas, teste primeiro a faixa mais restritiva."
      },
      {
        "id": "s1-q6",
        "topics": [
          "tres-formas",
          "contador"
        ],
        "context": "Um algoritmo deve ler 10 números inteiros e escrever quantos deles são pares.",
        "prompt": "Quais formas de organizar um algoritmo são necessárias, e como elas se combinam?",
        "options": [
          {
            "text": "Apenas sequência, porque ler e contar são passos em ordem.",
            "explanation": "Sequência executa passos em ordem, mas não repete nem escolhe. Sem repetição, o algoritmo leria só um número."
          },
          {
            "text": "Apenas repetição, porque ler 10 números exige um laço, e a contagem não precisa de decisão.",
            "explanation": "A repetição resolve as 10 leituras, mas o algoritmo precisa testar cada número para saber se ele é par. Isso é uma decisão."
          },
          {
            "text": "Apenas decisão, porque cada número precisa ser testado.",
            "explanation": "A decisão testa cada número, mas sem repetição o algoritmo só testaria um."
          },
          {
            "text": "Decisão e repetição, sem sequência, porque o contador é iniciado dentro do laço.",
            "explanation": "Iniciar o contador dentro do laço faria ele zerar a cada volta. O valor inicial pertence à sequência, antes do laço."
          },
          {
            "text": "Sequência, decisão e repetição, com a decisão dentro da repetição.",
            "explanation": "Correta. A sequência inicia o contador e escreve o resultado no fim; a repetição faz as 10 leituras; e, dentro dela, a decisão verifica se cada número é par."
          }
        ],
        "correct": 4,
        "explanation": "Quase todo algoritmo útil combina as três formas: sequência para preparar e concluir, repetição para percorrer os dados e decisão para tratar cada caso. A combinação aninhada é o que permite resolver problemas com muitos dados.",
        "tip": "Contar algo em um conjunto de dados quase sempre = sequência + repetição + decisão."
      }
    ]
  },
  {
    "id": "simulado-2",
    "number": 2,
    "subject": "Entrada, variáveis e saída",
    "subtitle": "scanf, printf, tipos, divisão e formatação.",
    "questions": [
      {
        "id": "s2-q1",
        "topics": [
          "tipos",
          "divisao",
          "saida"
        ],
        "context": "Uma equipe quer dividir 100 reais igualmente entre 3 pessoas. O programa abaixo faz a conta e mostra o valor de cada uma.",
        "code": "int total, pessoas, valorPorPessoa;\ntotal = 100;\npessoas = 3;\nvalorPorPessoa = total / pessoas;\nprintf(\"%i\\n\", valorPorPessoa);",
        "prompt": "O que aparece na tela?",
        "options": [
          {
            "text": "33.33",
            "explanation": "Esse valor exigiria divisão com ponto flutuante. Como total e pessoas são int, a divisão é inteira e a parte decimal é descartada."
          },
          {
            "text": "34",
            "explanation": "34 seria arredondamento para cima. Em C, a divisão entre inteiros não arredonda: ela trunca o resultado."
          },
          {
            "text": "33.00",
            "explanation": "O printf usa %i, que não mostra casas decimais. Além disso, o valor guardado já é inteiro."
          },
          {
            "text": "33",
            "explanation": "Correta. 100 / 3 é 33,33..., mas a divisão entre dois int resulta em int, descartando a parte decimal. O valor 33 é então guardado em valorPorPessoa."
          },
          {
            "text": "33.3",
            "explanation": "Igual ao caso 33.33: exigiria que a divisão fosse feita com float ou double antes da atribuição."
          }
        ],
        "correct": 3,
        "explanation": "A divisão é feita antes da atribuição. Quando os dois operandos são int, a operação é inteira e o resultado já chega truncado. A variável que recebe o valor não muda isso.",
        "tip": "Para ter casas decimais, pelo menos um dos operandos precisa ser float ou double."
      },
      {
        "id": "s2-q2",
        "topics": [
          "divisao",
          "tipos",
          "saida"
        ],
        "context": "Um programa calcula a média de bolachas por caixa. São 50 bolachas distribuídas em 4 caixas, e o resultado é guardado numa variável float.",
        "code": "int caixas, bolachas;\nfloat media;\nbolachas = 50;\ncaixas = 4;\nmedia = bolachas / caixas;\nprintf(\"Media: %.2f\\n\", media);",
        "prompt": "O que aparece na tela?",
        "options": [
          {
            "text": "Media: 12.50",
            "explanation": "O valor 12,50 exigiria divisão de float. Aqui bolachas e caixas são int, então a divisão é inteira antes de chegar a media."
          },
          {
            "text": "Media: 12.5",
            "explanation": "O formato %.2f sempre mostra duas casas decimais, então 12.5 não pode aparecer."
          },
          {
            "text": "Media: 13.00",
            "explanation": "A divisão inteira trunca, não arredonda. 13 exigiria arredondamento para cima, que o C não faz nessa operação."
          },
          {
            "text": "Media: 12.00",
            "explanation": "Correta. 50 / 4 dá 12 na divisão inteira, e 12 é guardado em media, mostrado como 12.00."
          },
          {
            "text": "Media: 12",
            "explanation": "O printf usa %.2f, que sempre imprime o ponto e duas casas decimais. A saída nunca fica só com 12."
          }
        ],
        "correct": 3,
        "explanation": "O tipo da variável que recebe o resultado não muda a conta. A divisão acontece entre dois int, então o C calcula 12 e só depois atribui o valor à variável float. Para obter 12.50, um dos operandos precisa ser float: media = bolachas / (float) caixas.",
        "tip": "A conversão de tipo precisa acontecer dentro da expressão, não na variável que recebe o valor."
      },
      {
        "id": "s2-q3",
        "topics": [
          "entrada",
          "formato",
          "tipos"
        ],
        "context": "Um aluno escreveu o trecho abaixo para ler a idade (inteira) e a altura (decimal) de uma pessoa.",
        "code": "int idade;\nfloat altura;\nprintf(\"Idade: \");\nscanf(\"%f\", &idade);\nprintf(\"Altura: \");\nscanf(\"%f\", altura);",
        "prompt": "Quais erros esse trecho tem?",
        "options": [
          {
            "text": "Só altura está errada, porque idade é int e o scanf aceita qualquer ponteiro.",
            "explanation": "idade também está errada: o especificador %f não combina com int, mesmo com o & presente."
          },
          {
            "text": "Só idade está errada; altura é float, e %f lê float sem problema.",
            "explanation": "altura é lida com %f corretamente, mas falta o & nela. Dizer que só idade está errada ignora o segundo erro."
          },
          {
            "text": "idade é lida com %f, quando deveria ser %i; e altura é lida sem &.",
            "explanation": "Correta. Os dois problemas são graves: %f grava o inteiro no formato errado, e sem & o scanf recebe o valor de altura como endereço, o que costuma travar o programa."
          },
          {
            "text": "Nenhum: o scanf aceita qualquer especificador desde que o nome da variável esteja correto.",
            "explanation": "O especificador precisa combinar com o tipo da variável. Com %f, o scanf grava 4 bytes no formato de float, e isso não é o inteiro digitado."
          },
          {
            "text": "Os erros estão nos printf, que deveriam ter \\n no fim de cada mensagem.",
            "explanation": "O \\n só muda a quebra de linha. Não causa erro de leitura nem trava o programa."
          }
        ],
        "correct": 2,
        "explanation": "O scanf usa o especificador para saber quantos bytes gravar e em que formato. Por isso o tipo da variável e o especificador precisam bater. Para variáveis que não são vetores (int, float, char), o & é obrigatório, porque o scanf precisa do endereço onde gravar. Um vetor de char, como char nome[20], já é um endereço.",
        "tip": "Especificador e tipo batem: %i para int, %f para float, %c para char. E & sempre, exceto em vetores."
      },
      {
        "id": "s2-q4",
        "topics": [
          "char-string",
          "entrada"
        ],
        "context": "Um caixa de cinema usa o programa abaixo para guardar o nome do cliente. O operador digitou Maria Clara e apertou Enter.",
        "code": "char nome[20];\nprintf(\"Nome: \");\nscanf(\"%s\", nome);\nprintf(\"Ola, %s\\n\", nome);",
        "prompt": "Qual saída aparece na tela?",
        "options": [
          {
            "text": "Ola, Maria",
            "explanation": "Correta. O especificador %s lê uma palavra e para no primeiro espaço. O Clara fica no buffer de entrada e não é lido por essa chamada."
          },
          {
            "text": "Ola, Maria Clara",
            "explanation": "Esse seria o resultado com fgets ou com scanf(\"%[^\\n]\"). Com %s, o scanf para no primeiro espaço."
          },
          {
            "text": "Ola, M",
            "explanation": "M seria a leitura de um char. Com %s, o vetor recebe uma sequência de caracteres até o espaço."
          },
          {
            "text": "Erro de compilação, porque nome precisa de & no scanf.",
            "explanation": "Vetor já é um endereço, então o scanf não precisa do &. O código compila e roda normalmente."
          },
          {
            "text": "Nada, porque o programa trava no scanf.",
            "explanation": "Não trava. Ao encontrar o espaço, o scanf encerra a leitura normalmente e o programa segue."
          }
        ],
        "correct": 0,
        "explanation": "O scanf com %s lê caracteres até encontrar espaço, tabulação ou Enter. Como o vetor recebe apenas a primeira palavra, o nome completo exige outra estratégia, como fgets ou a leitura com %[^\\n].",
        "tip": "scanf com %s para no primeiro espaço. Para frases, use fgets."
      },
      {
        "id": "s2-q5",
        "topics": [
          "saida",
          "formato",
          "tipos"
        ],
        "context": "O trecho abaixo mostra uma linha de recibo.",
        "code": "int quantidade;\nfloat preco;\nquantidade = 3;\npreco = 2.5;\nprintf(\"%i x %.2f = %.2f\\n\", quantidade, preco, quantidade * preco);",
        "prompt": "Qual linha aparece na tela?",
        "options": [
          {
            "text": "3 x 2.5 = 7.50",
            "explanation": "Com %.2f, o preço sempre sai com duas casas: 2.50, não 2.5."
          },
          {
            "text": "3 x 2.50 = 7.50",
            "explanation": "Correta. O primeiro %i recebe 3; o %.2f recebe 2.5 e mostra 2.50; o terceiro recebe 3 * 2.5 = 7.5 e mostra 7.50."
          },
          {
            "text": "3 x 2.50 = 7",
            "explanation": "O formato %.2f sempre mostra duas casas decimais. A saída nunca fica sem o ponto decimal."
          },
          {
            "text": "3 x 2.50 = 7.5",
            "explanation": "O %.2f força duas casas decimais, então 7.5 aparece como 7.50."
          },
          {
            "text": "3 x 2.50 = 8.00",
            "explanation": "3 * 2.5 é 7.5, não 8. O printf não arredonda para cima um valor que já tem casas decimais exatas."
          }
        ],
        "correct": 1,
        "explanation": "O printf substitui cada especificador pelo argumento correspondente, na ordem. O que muda a aparência do número é o formato: %i não tem casas decimais e %.2f sempre tem duas. A conta é feita antes da chamada, e o printf só formata o resultado.",
        "tip": "A ordem dos argumentos no printf precisa bater com a ordem dos especificadores."
      },
      {
        "id": "s2-q6",
        "topics": [
          "divisao",
          "modulo"
        ],
        "context": "Um aplicativo recebe a duração de uma aula em minutos, sempre como número inteiro, e precisa mostrar horas e minutos separadamente. Para 135 minutos, o programa usa: horas = minutos / 60; e restante = minutos % 60;.",
        "prompt": "Quais valores aparecem em horas e restante?",
        "options": [
          {
            "text": "2 e 15",
            "explanation": "Correta. 135 / 60 é 2 na divisão inteira, e 135 % 60 é o resto, 15. Juntos, 2 * 60 + 15 reconstroem os 135 minutos."
          },
          {
            "text": "2 e 75",
            "explanation": "75 seria 135 - 60, o que tira só uma hora. A divisão inteira com % pega o resto da divisão, que é 15."
          },
          {
            "text": "2.25 e 15",
            "explanation": "2.25 é 135 / 60 com casas decimais, mas as horas devem ser inteiras. Com int, a divisão já vem sem parte decimal."
          },
          {
            "text": "3 e 0",
            "explanation": "3 e 0 seria o resultado de arredondar para cima. A divisão inteira trunca, então horas vale 2."
          },
          {
            "text": "2 e 135",
            "explanation": "O % não devolve o dividendo. Ele devolve o resto da divisão, que aqui é 15."
          }
        ],
        "correct": 0,
        "explanation": "O operador / entre dois inteiros trunca o resultado, e % devolve o resto da mesma divisão. Essa combinação é uma das formas mais comuns de separar um valor em unidades maiores e menores, como horas e minutos.",
        "tip": "Divisão inteira com / e resto com % formam um par: juntos reconstroem o número original."
      }
    ]
  },
  {
    "id": "simulado-3",
    "number": 3,
    "subject": "Decisões",
    "subtitle": "if, else if, operadores lógicos e switch.",
    "questions": [
      {
        "id": "s3-q1",
        "topics": [
          "condicional"
        ],
        "context": "Um clube aceita visitantes de qualquer idade, mas só deixa entrar menores de idade se estiverem com carteirinha. O programa abaixo decide a entrada.",
        "code": "int idade, carteirinha;\nidade = 17;\ncarteirinha = 1;\nif(idade >= 18){\n    printf(\"Entrada liberada\\n\");\n} else if(carteirinha == 1){\n    printf(\"Entrada com carteirinha\\n\");\n} else {\n    printf(\"Entrada negada\\n\");\n}",
        "prompt": "Qual linha aparece na tela?",
        "options": [
          {
            "text": "Entrada liberada",
            "explanation": "Essa mensagem sai apenas se idade >= 18. Com idade 17, a condição é falsa e o programa pula para o próximo teste."
          },
          {
            "text": "Entrada negada",
            "explanation": "O else final só é executado se as duas condições anteriores forem falsas. Como carteirinha == 1 é verdadeiro, esse bloco não roda."
          },
          {
            "text": "Entrada liberada e Entrada com carteirinha",
            "explanation": "Com else if, só um dos blocos é executado. A cadeia para no primeiro teste verdadeiro."
          },
          {
            "text": "Entrada com carteirinha",
            "explanation": "Correta. idade >= 18 é falso, então o programa testa carteirinha == 1, que é verdadeiro, e mostra a mensagem correspondente."
          },
          {
            "text": "Nenhuma linha, porque o else if precisa de um else no final.",
            "explanation": "O else final é opcional. A cadeia executa o primeiro bloco cuja condição for verdadeira, sem exigir outro."
          }
        ],
        "correct": 3,
        "explanation": "Em uma cadeia if / else if / else, apenas um bloco é executado: o primeiro cuja condição for verdadeira. Por isso a ordem dos testes importa, e o else final só pega o caso em que nenhum dos anteriores é verdadeiro.",
        "tip": "Em else if, o primeiro teste verdadeiro vence; os demais não são avaliados."
      },
      {
        "id": "s3-q2",
        "topics": [
          "condicional"
        ],
        "context": "Um professor quer mostrar \"Aprovado\" para notas a partir de 5 e \"Destaque\" para notas a partir de 7. Escreveu o trecho abaixo, com nota = 8.",
        "code": "int nota;\nnota = 8;\nif(nota >= 5){\n    printf(\"Aprovado\\n\");\n}\nif(nota >= 7){\n    printf(\"Destaque\\n\");\n}",
        "prompt": "Qual é a saída desse trecho?",
        "options": [
          {
            "text": "Aprovado",
            "explanation": "Mostraria só a primeira mensagem. O segundo if é testado separadamente e também é verdadeiro para nota 8."
          },
          {
            "text": "Destaque",
            "explanation": "Mostraria só a segunda. O primeiro if é avaliado antes e também é verdadeiro."
          },
          {
            "text": "Aprovado e Destaque, em duas linhas",
            "explanation": "Correta. Dois ifs seguidos, sem else, são testados um depois do outro. Como nota 8 satisfaz as duas condições, as duas mensagens aparecem."
          },
          {
            "text": "Destaque, porque o último if sobrescreve o primeiro.",
            "explanation": "Em C, um if não sobrescreve a saída de outro. Cada printf que for executado aparece na tela."
          },
          {
            "text": "Nada, porque os dois ifs se excluem mutuamente.",
            "explanation": "Exclusão mútua é o comportamento de else if, não de dois ifs separados. Aqui os dois são independentes."
          }
        ],
        "correct": 2,
        "explanation": "Dois if separados são independentes: cada um é avaliado sozinho. Para que apenas uma mensagem apareça, a segunda condição precisaria estar dentro de um else if. Sem isso, as faixas se sobrepõem e as duas mensagens podem aparecer juntas.",
        "tip": "Se os blocos devem ser exclusivos, use else if; se são testes independentes, use ifs separados."
      },
      {
        "id": "s3-q3",
        "topics": [
          "logicos"
        ],
        "context": "Um sistema de cadastro aceita números de 1 a 100, incluindo os dois limites. Qualquer outro valor deve ser recusado.",
        "prompt": "Qual condição aceita o valor x apenas quando ele está dentro da faixa?",
        "options": [
          {
            "text": "x > 1 && x < 100",
            "explanation": "Essa condição exclui os limites 1 e 100. Como a faixa é fechada, esses valores precisam passar."
          },
          {
            "text": "x >= 1 || x <= 100",
            "explanation": "Com ||, basta uma das condições ser verdadeira. Qualquer número é maior ou igual a 1 ou menor ou igual a 100, então essa condição aceita tudo."
          },
          {
            "text": "x >= 1 && x <= 100",
            "explanation": "Correta. Com &&, as duas condições precisam ser verdadeiras, e os operadores >= e <= incluem os limites."
          },
          {
            "text": "x >= 1 && x >= 100",
            "explanation": "Esse teste exige que x seja maior ou igual a 100. Só os valores a partir de 100 passam."
          },
          {
            "text": "x < 1 || x > 100",
            "explanation": "Essa é a condição de rejeição. Ela é verdadeira para os valores que devem ser recusados, então para aceitar é preciso negá-la."
          }
        ],
        "correct": 2,
        "explanation": "Uma faixa fechada, de a até b, é a interseção de duas condições: x >= a e x <= b, por isso se usa &&. O || aparece na rejeição: x < a ou x > b. Negar a condição de rejeição dá a condição de aceitação (De Morgan).",
        "tip": "Faixa aceita = &&; faixa recusada = ||."
      },
      {
        "id": "s3-q4",
        "topics": [
          "switch"
        ],
        "context": "Um programa recebe o número de um dia da semana, em que 1 é domingo, e mostra o nome do dia. O programa abaixo foi escrito pelo estagiário.",
        "code": "int dia;\ndia = 1;\nswitch(dia){\n    case 1:\n        printf(\"Domingo\\n\");\n    case 2:\n        printf(\"Segunda\\n\");\n    case 3:\n        printf(\"Terca\\n\");\n        break;\n    default:\n        printf(\"Outro\\n\");\n}",
        "prompt": "Qual é a saída para dia = 1?",
        "options": [
          {
            "text": "Domingo",
            "explanation": "Esse seria o resultado com um break após o printf de Domingo. Sem ele, a execução continua no próximo case."
          },
          {
            "text": "Terca",
            "explanation": "Terca é impressa, mas só depois de Domingo e Segunda. O switch começa no case 1 e segue dali."
          },
          {
            "text": "Outro",
            "explanation": "O default só é executado quando nenhum case combina com o valor. Aqui o case 1 combina."
          },
          {
            "text": "Domingo, Segunda e Terca, em três linhas",
            "explanation": "Correta. Sem break, a execução cai no case 2 e depois no case 3, e só para no break do case 3. Os três printf rodam."
          },
          {
            "text": "Domingo e Segunda, em duas linhas",
            "explanation": "Falta o case 3 ser executado. Sem break, a execução segue até encontrar um break, que está no case 3."
          }
        ],
        "correct": 3,
        "explanation": "O switch compara o valor com cada case e começa a execução no case que combina. O break é o que encerra o switch. Sem ele, a execução continua pelos cases seguintes, mesmo que o valor não combine com eles. Esse comportamento de queda é um erro comum.",
        "tip": "Cada case que termina sem break deixa a execução cair no seguinte."
      },
      {
        "id": "s3-q5",
        "topics": [
          "switch",
          "condicional"
        ],
        "context": "Um programador precisa escolher qual mensagem mostrar com base na nota do aluno, de 0 a 10, com casas decimais. Ele está pensando se deve usar switch ou if.",
        "prompt": "Qual dessas situações é melhor resolvida com if?",
        "options": [
          {
            "text": "Testar se a nota está entre 7 e 10 para mostrar uma mensagem.",
            "explanation": "Correta. switch compara igualdade com valores fixos. Testar faixas, como nota >= 7, exige operadores relacionais, e isso é papel do if."
          },
          {
            "text": "Escolher entre as opções 1, 2 e 3 digitadas num menu.",
            "explanation": "Valores fixos e inteiros são o caso típico de switch. Um switch aqui deixaria o código direto."
          },
          {
            "text": "Escolher um tamanho entre as letras P, M e G.",
            "explanation": "Letras fixas são o caso típico de switch, com um case para cada uma."
          },
          {
            "text": "Mostrar o nome do mês correspondente ao número de 1 a 12.",
            "explanation": "Números inteiros fixos e um valor para cada opção são o caso típico de switch."
          },
          {
            "text": "Escolher entre quatro operações: soma, subtração, multiplicação e divisão.",
            "explanation": "Um código para cada operação, com valores fixos, funciona bem com switch."
          }
        ],
        "correct": 0,
        "explanation": "O switch testa igualdade entre a expressão e cada case. Ele não sabe testar faixas. Quando a decisão depende de intervalos ou de condições compostas, o if é a estrutura correta. Quando a decisão é uma escolha entre valores fixos, o switch deixa o código mais limpo.",
        "tip": "switch é para igualdade com valores fixos; if é para faixas e condições compostas."
      },
      {
        "id": "s3-q6",
        "topics": [
          "switch",
          "tipos"
        ],
        "context": "Um estudante escreveu o trecho abaixo para mostrar o conceito de uma nota de 0 a 10, com casas decimais.",
        "code": "float nota;\nscanf(\"%f\", &nota);\nswitch(nota){\n    case 10:\n        printf(\"Conceito A\\n\");\n        break;\n    default:\n        printf(\"Outro conceito\\n\");\n}",
        "prompt": "O que acontece ao compilar esse trecho, e qual é a correção?",
        "options": [
          {
            "text": "Compila sem problema; o switch aceita float desde que o default exista.",
            "explanation": "O switch exige expressão inteira ou de caractere. Com float, o compilador recusa o código, mesmo com default."
          },
          {
            "text": "Erro de compilação, porque switch só aceita expressão inteira ou char; para faixas de nota, use if, else if e else.",
            "explanation": "Correta. O case precisa ser constante inteira ou char. Como nota é float e as decisões seriam por faixas, a estrutura correta é uma cadeia de if."
          },
          {
            "text": "Erro de compilação, porque falta um break depois do default.",
            "explanation": "O break no default não é obrigatório. A recusa do compilador é pelo tipo da expressão do switch."
          },
          {
            "text": "Compila, mas nunca mostra Conceito A, porque float não pode ser comparado com inteiro.",
            "explanation": "A comparação entre float e inteiro é permitida. O problema é o tipo da expressão do switch, que o compilador recusa."
          },
          {
            "text": "Erro de compilação, porque o scanf exige %i para ler float.",
            "explanation": "O problema não está no scanf. %f é o especificador correto para float."
          }
        ],
        "correct": 1,
        "explanation": "O switch só funciona com expressões de tipo inteiro (incluindo char). Esse é o limite estrutural da estrutura: ela compara igualdade com constantes inteiras. Para decisões com valores reais ou faixas, o if é a ferramenta certa.",
        "tip": "switch é para inteiros e char; para float ou faixas, use if."
      }
    ]
  },
  {
    "id": "simulado-4",
    "number": 4,
    "subject": "Repetição",
    "subtitle": "for, while, do while e laços aninhados.",
    "questions": [
      {
        "id": "s4-q1",
        "topics": [
          "repeticao",
          "contador",
          "teste-mesa"
        ],
        "context": "Um programador escreveu um laço para somar os valores que a variável i assume.",
        "code": "int i, soma;\nsoma = 0;\nfor(i = 10; i > 0; i = i - 3){\n    soma = soma + i;\n}",
        "prompt": "Qual é o valor final de soma?",
        "options": [
          {
            "text": "10",
            "explanation": "Esse seria só o valor inicial de i. O laço roda mais de uma vez, e cada volta soma um valor ao acumulador."
          },
          {
            "text": "22",
            "explanation": "Correta. i assume 10, 7, 4 e 1. Quando i chega a -2, o teste i > 0 falha, e -2 não entra na soma. 10 + 7 + 4 + 1 = 22."
          },
          {
            "text": "21",
            "explanation": "21 é 10 + 7 + 4, o que deixa de fora a última volta, em que i vale 1. Essa volta existe porque 1 ainda é maior que 0."
          },
          {
            "text": "26",
            "explanation": "26 não corresponde a nenhuma soma dos valores de i. Refaça o teste de mesa linha por linha para achar o valor certo."
          },
          {
            "text": "-2",
            "explanation": "-2 é o valor de i que faz a condição falhar. Ele não entra na soma, porque o laço para antes de executar a soma com ele."
          }
        ],
        "correct": 1,
        "explanation": "Em um for, o teste acontece antes de cada volta e o incremento depois. Quando o teste falha, o laço para sem executar o corpo. O valor que quebra o teste nunca é somado. O teste de mesa, com uma linha por volta, mostra isso com clareza.",
        "tip": "Anote o valor de i antes de cada teste, e não depois, para não contar uma volta a mais."
      },
      {
        "id": "s4-q2",
        "topics": [
          "repeticao",
          "contador"
        ],
        "context": "Um programa deve ler notas de alunos até o professor digitar -1, e depois mostrar a média das notas lidas. O -1 não é nota, apenas o sinal de parada.",
        "prompt": "Qual estrutura e cuidado tornam o programa correto?",
        "options": [
          {
            "text": "for com número fixo de voltas, sem nenhuma verificação antes da divisão.",
            "explanation": "Um for exige que a quantidade de voltas seja conhecida antes. Aqui ela só é conhecida no fim, e a divisão por zero continuaria possível."
          },
          {
            "text": "while com a primeira leitura antes do laço e, antes de dividir, verificar se a quantidade de notas é maior que zero.",
            "explanation": "Correta. A leitura antes do while permite testar o -1 logo de início. A verificação do contador evita dividir por zero quando o professor digita -1 de primeira."
          },
          {
            "text": "while sem leitura antes do laço, porque a variável nota pode começar com qualquer valor e isso não importa.",
            "explanation": "O valor inicial importa: se nota não foi lida, a condição testa um valor sem sentido e pode encerrar ou repetir errado."
          },
          {
            "text": "do while, sem verificação, porque o -1 sempre é o último valor digitado.",
            "explanation": "O -1 é o último valor lido, mas a divisão ainda pode acontecer sem nenhuma nota. Sem verificação, a divisão por zero é possível."
          },
          {
            "text": "while, com a divisão feita dentro do laço, a cada nota lida.",
            "explanation": "Dividir dentro do laço não produz a média. A média só existe depois que todas as notas foram somadas."
          }
        ],
        "correct": 1,
        "explanation": "Quando o número de voltas não é conhecido, while é o laço adequado. Ele precisa de uma leitura inicial para que o teste de parada tenha um valor real. Como a média divide pelo contador, a verificação de contador > 0 é obrigatória para evitar divisão por zero.",
        "tip": "Laço de sentinela: leia antes do while, e confira o divisor antes de dividir."
      },
      {
        "id": "s4-q3",
        "topics": [
          "entrada",
          "repeticao",
          "char-string"
        ],
        "context": "Um programa pergunta ao usuário se ele quer continuar, e repete a pergunta enquanto a resposta for s. O trecho abaixo tem uma falha de leitura.",
        "code": "char resposta;\ndo{\n    printf(\"Continuar? (s/n): \");\n    scanf(\"%c\", &resposta);\n} while(resposta == 's');",
        "prompt": "O usuário digita s, aperta Enter, e depois digita n e aperta Enter. Quantas vezes a pergunta aparece, e por quê?",
        "options": [
          {
            "text": "Uma vez; o s faz o laço parar.",
            "explanation": "O while testa se a resposta é s. Com s, a condição é verdadeira, e o laço continua."
          },
          {
            "text": "Duas vezes; o n é lido na segunda leitura e encerra o laço.",
            "explanation": "Essa leitura pega o \\n que sobrou do Enter, não o n. Por isso o n nunca é processado."
          },
          {
            "text": "O laço nunca termina, porque o %c nunca retorna.",
            "explanation": "%c retorna logo depois de ler um caractere. Não há espera infinita aqui."
          },
          {
            "text": "Três vezes; uma para cada tecla digitada, incluindo o n.",
            "explanation": "O %c lê um caractere por vez, mas o Enter também é um caractere. O n nunca é lido porque o laço termina antes."
          },
          {
            "text": "Duas vezes; a segunda leitura pega o Enter que ficou no buffer, que não é s, e o laço termina.",
            "explanation": "Correta. O primeiro %c lê o s e deixa o \\n no buffer. A segunda chamada lê esse \\n, e não o n digitado, então a condição falha e a pergunta não aparece uma terceira vez."
          }
        ],
        "correct": 4,
        "explanation": "O scanf com %c não pula espaços nem quebras de linha. Ao digitar s e Enter, o buffer recebe s e \\n; o %c lê apenas o s. Na segunda volta, o %c lê o \\n. Para pular os espaços em branco antes da leitura, use scanf(\" %c\", &resposta).",
        "tip": "Use scanf(\" %c\", ...) com espaço antes do %c para pular o Enter que ficou no buffer."
      },
      {
        "id": "s4-q4",
        "topics": [
          "repeticao",
          "teste-mesa"
        ],
        "context": "Um professor escreveu um laço para mostrar os valores ímpares de x entre 1 e 4, e quer saber o valor de x quando o laço termina.",
        "code": "int x;\nfor(x = 1; x < 5; x = x + 2){\n    printf(\"%i \", x);\n}",
        "prompt": "Qual é a saída e o valor final de x, depois do for?",
        "options": [
          {
            "text": "1 3 e x vale 5",
            "explanation": "Correta. O laço imprime 1 e 3. Depois do incremento, x vale 5, e o teste x < 5 falha."
          },
          {
            "text": "1 3 5 e x vale 5",
            "explanation": "O valor 5 nunca entra no corpo, porque o teste x < 5 é falso quando x é 5."
          },
          {
            "text": "1 3 e x vale 3",
            "explanation": "x vale 3 só durante a segunda volta. Depois do incremento, x vira 5 antes do teste."
          },
          {
            "text": "1 2 3 4 e x vale 5",
            "explanation": "O incremento é de 2, não de 1. Os valores pares não aparecem."
          },
          {
            "text": "1 3 e x vale 4",
            "explanation": "4 não é um valor que x assume, porque o incremento é de 2 a partir de 1."
          }
        ],
        "correct": 0,
        "explanation": "Em um for, o teste acontece antes de cada volta. O incremento x = x + 2 roda depois do corpo, então o último valor de x é o que falha no teste, e não o último valor impresso. Por isso x termina em 5, e não em 3.",
        "tip": "O valor final de uma variável de for é o que falha no teste, nunca o último que entrou no corpo."
      },
      {
        "id": "s4-q5",
        "topics": [
          "repeticao",
          "saida"
        ],
        "context": "Uma confeitaria monta uma vitrine em linhas: a primeira linha tem 1 brigadeiro, a segunda tem 2 e a terceira tem 3. Um estudante escreveu o programa abaixo para desenhar a vitrine.",
        "code": "int i, j;\nfor(i = 1; i <= 3; i++){\n    for(j = 1; j <= i; j++){\n        printf(\"%i\", j);\n    }\n    printf(\"\\n\");\n}",
        "prompt": "Qual é a saída desse programa?",
        "options": [
          {
            "text": "1 / 2 / 3, cada um em uma linha",
            "explanation": "Esse seria o resultado sem o laço interno. O laço interno imprime uma sequência de números em cada linha."
          },
          {
            "text": "123 / 123 / 123",
            "explanation": "Isso ocorreria se o laço interno sempre fosse até 3. Aqui o limite é i, que muda a cada linha."
          },
          {
            "text": "111 / 222 / 333",
            "explanation": "O printf imprime j, que é a variável do laço interno, e não i. Os números não se repetem na mesma linha."
          },
          {
            "text": "12 / 123 / 1234",
            "explanation": "O laço externo vai só até 3, então não existe uma quarta linha."
          },
          {
            "text": "1 / 12 / 123",
            "explanation": "Correta. Na linha de i = 1, o laço interno imprime 1; na de i = 2, imprime 12; na de i = 3, imprime 123. O printf(\"\\n\") fica fora do laço interno e fecha cada linha."
          }
        ],
        "correct": 4,
        "explanation": "Laço dentro de laço: o interno roda completo a cada volta do externo. Como o limite do interno é i, o número de caracteres por linha cresce. O printf(\"\\n\") precisa ficar fora do laço interno, senão a quebra de linha sairia a cada número.",
        "tip": "Desenhe o laço externo como linhas e o interno como colunas."
      },
      {
        "id": "s4-q6",
        "topics": [
          "maior-menor",
          "repeticao"
        ],
        "context": "Um programa lê 5 temperaturas de uma câmara e precisa mostrar a maior delas. O trecho abaixo foi escrito por um estagiário.",
        "code": "float temp, maior;\nint i;\nmaior = 0;\nfor(i = 1; i <= 5; i++){\n    scanf(\"%f\", &temp);\n    if(temp > maior){\n        maior = temp;\n    }\n}",
        "prompt": "Qual é a falha desse trecho?",
        "options": [
          {
            "text": "Nenhuma; 0 é o menor valor possível, então serve de ponto de partida.",
            "explanation": "Zero só serve de ponto de partida se alguma leitura for maior ou igual a zero. Com todas as temperaturas abaixo de zero, o programa mostraria 0, valor que nunca foi lido."
          },
          {
            "text": "Se o laço tiver uma leitura exatamente 0, ele entra em loop infinito.",
            "explanation": "O laço for tem contador fixo e sempre termina após 5 voltas. Uma leitura de 0 não causa loop infinito."
          },
          {
            "text": "Trocar maior = 0 por maior = 1 resolve, porque todas as temperaturas são positivas.",
            "explanation": "Essa troca tem o mesmo problema: temperaturas negativas continuam sendo ignoradas."
          },
          {
            "text": "Se todas as temperaturas forem negativas, maior fica 0, e o programa mostra um valor que nunca foi lido.",
            "explanation": "Correta. Com todas as leituras abaixo de zero, nenhuma passa do teste temp > maior, e maior continua 0. O valor de referência precisa ser uma leitura real, como a primeira."
          },
          {
            "text": "O erro está no for, que deveria ser um while para ler as cinco temperaturas.",
            "explanation": "O for é adequado porque a quantidade de voltas é conhecida: cinco. O problema está na inicialização de maior."
          }
        ],
        "correct": 3,
        "explanation": "Para encontrar o maior valor, a variável de referência deve começar com uma leitura real, normalmente a primeira, ou com o menor valor possível do tipo. Inicializar com 0 supõe que existe ao menos um valor não negativo, o que nem sempre é verdadeiro.",
        "tip": "Para maior ou menor, comece com a primeira leitura. Zero é uma suposição."
      }
    ]
  },
  {
    "id": "simulado-5",
    "number": 5,
    "subject": "Vetores e matrizes",
    "subtitle": "Índices, limites, strings e matrizes.",
    "questions": [
      {
        "id": "s5-q1",
        "topics": [
          "vetores",
          "indice"
        ],
        "context": "Um programa guarda quatro valores em um vetor, usando o trecho abaixo.",
        "code": "int notas[4];\nint i;\nfor(i = 0; i < 4; i++){\n    notas[i] = i * 2;\n}\nprintf(\"%i\\n\", notas[3]);",
        "prompt": "O que aparece na tela?",
        "options": [
          {
            "text": "8",
            "explanation": "8 seria notas[4], que não existe, pois o vetor tem posições de 0 a 3."
          },
          {
            "text": "6",
            "explanation": "Correta. notas[3] recebe 3 * 2 = 6, na última volta do laço. Os índices vão de 0 a 3 em um vetor de 4 posições."
          },
          {
            "text": "4",
            "explanation": "4 é o valor de notas[2], que é 2 * 2. Como os índices começam em 0, o quarto elemento tem índice 3."
          },
          {
            "text": "0",
            "explanation": "0 é o valor de notas[0], que é 0 * 2. Esse valor não corresponde à posição 3."
          },
          {
            "text": "Erro de compilação, porque notas[3] está fora do vetor.",
            "explanation": "Índice 3 é válido em um vetor de 4 posições. O código compila e roda."
          }
        ],
        "correct": 1,
        "explanation": "Um vetor de n posições tem índices de 0 a n - 1. Acessar notas[n] é um erro de limite, e o C não avisa em tempo de execução. Por isso o último elemento de um vetor de 4 posições fica em notas[3].",
        "tip": "Em um vetor de n posições, o último índice é n - 1."
      },
      {
        "id": "s5-q2",
        "topics": [
          "vetores",
          "indice"
        ],
        "context": "Um programador quer preencher um vetor com cinco valores, para depois exibi-los.",
        "code": "int vet[5];\nint i;\nfor(i = 0; i <= 5; i++){\n    vet[i] = i;\n}",
        "prompt": "Qual é o problema desse trecho?",
        "options": [
          {
            "text": "Nenhum; i <= 5 percorre todas as posições do vetor.",
            "explanation": "O vetor tem 5 posições, de 0 a 4. Com i <= 5, o laço também tenta acessar a posição 5, que não existe."
          },
          {
            "text": "O laço deveria começar em 1, não em 0, porque vetores começam na posição 1.",
            "explanation": "Em C, vetores começam em 0. Começar em 1 deixaria a posição 0 sem valor."
          },
          {
            "text": "O erro está em vet[i] = i, porque atribuir int a um vetor é proibido.",
            "explanation": "Atribuir um int a um elemento de vetor de int é permitido. O problema está no índice."
          },
          {
            "text": "Falta o & antes de vet, porque vetores precisam de endereço.",
            "explanation": "Vetores já são endereços. Esse trecho não faz leitura, então nenhum & é necessário."
          },
          {
            "text": "O laço acessa vet[5], posição que não existe; o correto seria i < 5.",
            "explanation": "Correta. A condição i <= 5 deixa a última volta com i = 5, fora do vetor. O C não verifica esse limite, e o efeito é imprevisível."
          }
        ],
        "correct": 1,
        "explanation": "Um vetor de tamanho n tem posições de 0 a n - 1. O erro de limite (off-by-one) é um dos mais comuns, e o C não avisa: ele apenas escreve em memória fora do vetor, o que pode corromper outras variáveis ou travar o programa.",
        "tip": "Use i < tamanho em laços sobre vetores, nunca i <= tamanho."
      },
      {
        "id": "s5-q3",
        "topics": [
          "vetores",
          "indice"
        ],
        "context": "Um mercado guarda o nome e o preço de três produtos em duas estruturas separadas, como mostrado abaixo.",
        "code": "char nome[3][10];\nfloat preco[3];",
        "prompt": "Como o programa sabe qual preço pertence a qual nome?",
        "options": [
          {
            "text": "Pelo índice: nome[i] e preco[i] pertencem ao mesmo produto, e a posição precisa ser mantida em todas as leituras.",
            "explanation": "Correta. Vetores paralelos ligam dados pelo mesmo índice. Se a ordem de preenchimento mudar em um dos vetores e não no outro, os dados ficam trocados."
          },
          {
            "text": "Não sabe: são vetores independentes, então é preciso uma struct para ligar os dados.",
            "explanation": "Uma struct é uma forma de agrupar, mas não é a única. Vetores paralelos também resolvem, desde que a relação seja mantida pelo índice."
          },
          {
            "text": "Pelo tipo: nome guarda textos e preco guarda números, então cada um se liga ao seu.",
            "explanation": "O tipo separa os vetores, mas não liga um nome a um preço. Essa ligação é feita pelo índice."
          },
          {
            "text": "Só o primeiro elemento de cada vetor é usado, porque os outros são reservados.",
            "explanation": "Todas as posições são usadas. Cada índice guarda um produto diferente."
          },
          {
            "text": "nome[i] é o preço e preco[i] é o nome, porque o float vem antes na memória.",
            "explanation": "O tipo de cada vetor é o que foi declarado. Não há inversão automática."
          }
        ],
        "correct": 0,
        "explanation": "Vetores paralelos são um jeito de agrupar dados relacionados usando o mesmo índice. Eles funcionam, mas exigem disciplina: qualquer operação, como ordenar, precisa mexer nos dois vetores na mesma posição.",
        "tip": "Vetores paralelos se ligam pelo índice; ordenar um exige mexer nos dois."
      },
      {
        "id": "s5-q4",
        "topics": [
          "char-string",
          "vetores",
          "entrada"
        ],
        "context": "Um programa lê uma palavra digitada pelo usuário e a guarda num vetor de caracteres. O programa foi testado com a palavra casa.",
        "code": "char palavra[4];\nscanf(\"%s\", palavra);",
        "prompt": "Qual é o problema, e qual deveria ser o tamanho mínimo do vetor?",
        "options": [
          {
            "text": "Não há problema; o vetor de 4 posições guarda casa, porque a palavra tem 4 letras.",
            "explanation": "A palavra ocupa 4 posições, mas o C também grava o caractere nulo \\0 no fim de cada string. Esse byte extra não cabe."
          },
          {
            "text": "Há estouro: o vetor precisa de 8 posições, porque o scanf sempre reserva o dobro.",
            "explanation": "O scanf não reserva memória. Basta o vetor ter o tamanho da palavra mais o terminador, que é 5."
          },
          {
            "text": "Não há estouro, desde que o vetor tenha ao menos 3 posições, porque o último caractere é descartado.",
            "explanation": "O scanf não descarta caracteres; ele grava todos, e o \\0 também. O vetor precisa de 5 posições."
          },
          {
            "text": "Erro de compilação, porque scanf com %s não aceita vetor de char.",
            "explanation": "%s aceita vetor de char. Esse é o uso padrão do especificador de string."
          },
          {
            "text": "Há estouro: a palavra precisa de 5 posições, 4 letras e o caractere nulo \\0.",
            "explanation": "Correta. Strings em C terminam com \\0. Com 4 letras e mais o terminador, são 5 posições. Gravar além do limite do vetor é comportamento indefinido."
          }
        ],
        "correct": 4,
        "explanation": "A string em C é uma sequência de caracteres seguida de \\0. A palavra casa ocupa 5 posições: c, a, s, a e \\0. Como o scanf não verifica o tamanho, o estouro não gera erro na hora: ele corrompe a memória ao lado do vetor, e o programa pode falhar depois, longe da causa.",
        "tip": "Tamanho de string = letras + 1 para o \\0."
      },
      {
        "id": "s5-q5",
        "topics": [
          "char-string",
          "condicional"
        ],
        "context": "Um programa lê uma senha digitada pelo usuário e compara com a senha correta, \"abc123\".",
        "code": "char digitada[20];\nscanf(\"%s\", digitada);\nif(digitada == \"abc123\"){\n    printf(\"Acesso liberado\\n\");\n}else{\n    printf(\"Senha incorreta\\n\");\n}",
        "prompt": "O usuário digita abc123, e o programa mostra Senha incorreta. Qual é a causa?",
        "options": [
          {
            "text": "O scanf não lê números, então digitada fica vazio.",
            "explanation": "O %s lê qualquer sequência de caracteres sem espaço, inclusive números. digitada recebe abc123 sem problema."
          },
          {
            "text": "Falta o & antes de digitada no if.",
            "explanation": "Em comparações de vetores, o & não resolve nada. O problema é a comparação com ==, que não compara texto."
          },
          {
            "text": "O if exige que a string tenha 6 posições exatas, e digitada tem 20.",
            "explanation": "O tamanho do vetor não entra na comparação. A conta é entre endereços."
          },
          {
            "text": "O printf precisa de %i para mostrar a senha correta.",
            "explanation": "A mensagem não depende do especificador. O problema está antes, na comparação."
          },
          {
            "text": "Porque == compara os endereços de memória de digitada e do texto, não o conteúdo; para comparar strings, use strcmp, com #include <string.h>.",
            "explanation": "Correta. digitada é um endereço, e \"abc123\" é outro. == compara esses endereços, que nunca são iguais. strcmp(digitada, \"abc123\") == 0 compara o conteúdo."
          }
        ],
        "correct": 4,
        "explanation": "Em C, strings são vetores de char, e o nome de um vetor é o endereço do primeiro caractere. O operador == compara endereços, então duas strings com o mesmo texto em lugares diferentes da memória resultam em falso. A função strcmp compara o conteúdo caractere por caractere e retorna 0 quando são iguais.",
        "tip": "Para comparar texto, use strcmp e não ==."
      },
      {
        "id": "s5-q6",
        "topics": [
          "matrizes",
          "indice"
        ],
        "context": "Um programador preenche uma matriz 2 por 3 com o trecho abaixo, em que cada posição recebe a soma dos seus índices.",
        "code": "int m[2][3];\nint i, j;\nfor(i = 0; i < 2; i++){\n    for(j = 0; j < 3; j++){\n        m[i][j] = i + j;\n    }\n}",
        "prompt": "Qual é o valor de m[1][2]?",
        "options": [
          {
            "text": "2",
            "explanation": "2 é o valor de m[0][2], em que i = 0 e j = 2. Na linha 1, a soma é 1 + 2."
          },
          {
            "text": "4",
            "explanation": "4 seria a soma com i = 2, o que não existe nesta matriz, que tem apenas as linhas 0 e 1."
          },
          {
            "text": "0",
            "explanation": "0 é o valor de m[0][0]. A posição m[1][2] é outra."
          },
          {
            "text": "Erro, porque m[1][2] está fora da matriz.",
            "explanation": "A matriz tem 2 linhas (0 e 1) e 3 colunas (0, 1 e 2). Então m[1][2] existe."
          },
          {
            "text": "3",
            "explanation": "Correta. m[1][2] tem i = 1 e j = 2, então m[1][2] = 1 + 2 = 3. O primeiro índice é a linha, e o segundo, a coluna."
          }
        ],
        "correct": 4,
        "explanation": "Em uma matriz, o primeiro índice é a linha e o segundo é a coluna. Um laço externo e outro interno percorrem todas as posições, e cada m[i][j] recebe o valor correspondente. Para uma matriz de 2 por 3, os índices válidos vão de 0 a 1 na linha e de 0 a 2 na coluna.",
        "tip": "Matriz [linhas][colunas]: o primeiro índice é sempre a linha."
      }
    ]
  }
];
