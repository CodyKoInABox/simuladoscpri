# Fundamentos em C · Simulados

Plataforma de estudo em português para revisar os cinco primeiros assuntos de Fundamentos de Programação com a linguagem C. Feita com HTML, CSS e JavaScript, sem servidor de aplicação ou etapa de compilação.

## O que você encontra

- Cinco simulados, um por assunto, com seis questões e cinco alternativas por questão.
- Questões com situação, código em C quando necessário e uma explicação para cada alternativa.
- Resultado com nota, melhor desempenho, assuntos para revisar e filtro das questões erradas.
- Progresso salvo automaticamente neste navegador, com retomada de tentativas.
- Possibilidade de refazer os simulados mantendo o histórico de notas.

Os assuntos:

1. Lógica de programação e fluxograma
2. Entrada de dados, variáveis e saída de dados
3. Estrutura condicional e estrutura de seleção
4. Estrutura de repetição
5. Vetores e matrizes

As questões são autorais. Os assuntos seguem o material de Fundamentos de Programação de Manfred Heil Junior, disponível em [escalada.dev](https://escalada.dev).

## Executar localmente

Na pasta do projeto, execute:

```sh
python -m http.server 4173
```

Abra [http://localhost:4173](http://localhost:4173). Como os scripts usam módulos JavaScript, utilize um servidor HTTP em vez de abrir o HTML diretamente como arquivo. Se você usa Node.js, `npm run dev` inicia o mesmo servidor Python, restrito a `127.0.0.1`.

## Verificar o projeto

Para instalar as ferramentas de desenvolvimento, é necessário Node.js com npm:

```sh
npm ci
npm test
```

Os testes unitários verificam o banco de questões e a lógica de correção e persistência. Para os testes de navegação no navegador:

```sh
npx playwright install chromium
npm run test:e2e
```

## Publicar no GitHub Pages

O workflow em [`.github/workflows/pages.yml`](.github/workflows/pages.yml) verifica a sintaxe dos scripts e executa os testes antes de publicar a cada push na branch `main`. Ele também pode ser iniciado manualmente pela aba **Actions**.

Para ativar: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

Endereço esperado após a primeira publicação:

[https://codykoinabox.github.io/simuladoscpri/](https://codykoinabox.github.io/simuladoscpri/)

O site usa caminhos relativos para funcionar no subdiretório do repositório. Não há dependências de produção nem chaves de API para configurar.

## Fonte do conteúdo

Assuntos baseados em [Fundamentos de Programação, de Manfred Heil Junior (MT - Manfred Tecnologia)](https://escalada.dev/modelos/fundamentos-de-programacao/revisao-do-ciclo/). As questões e explicações são originais.
