# QA Automation - Cypress + Cucumber

## Descrição

Projeto desenvolvido como teste técnico de automação utilizando Cypress, JavaScript e Cucumber.

O projeto contempla a automação de cenários Web e API seguindo o padrão BDD.

---

## Tecnologias

- JavaScript
- Cypress
- Cucumber (@badeball/cypress-cucumber-preprocessor)
- Node.js

---

## Estrutura do Projeto

```
cypress
├── e2e
│   ├── api
│   │   ├── trello.feature
│   │   └── trello.js
│   └── web
│       ├── login.feature
│       ├── search.feature
│       ├── cart.feature
│       ├── login.js
│       ├── search.js
│       └── cart.js
├── fixtures
│   └── user.json
├── pages
│   ├── CartPage.js
│   ├── LoginPage.js
│   └── SearchPage.js
├── services
│   └── TrelloService.js
├── support
└── utils
```

---

## Cenários Automatizados

### Web

- Login com usuário válido
- Pesquisa de produtos
- Inclusão de produto no carrinho
- Validação do produto na tela de checkout

### API

- Envio de requisição GET para a API do Trello
- Validação do Status Code (200)
- Exibição e validação do campo `data.list.name`

---

## Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

- Node.js (versão 18 ou superior)
- npm
- Git

---

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd qa-automation-cypress-cucumber
```

Instale as dependências:

```bash
npm install
```

---

## Executando os testes

### Executar todos os testes

```bash
npx cypress run
```

### Executar somente os testes Web

```bash
npx cypress run --spec "cypress/e2e/web/*.feature"
```

### Executar somente o teste da API

```bash
npx cypress run --spec cypress/e2e/api/trello.feature
```

### Executar em modo interativo

```bash
npx cypress open
```

---

## Padrões utilizados

- BDD com Cucumber
- Page Object Model para automação Web
- Service Layer para automação da API
- Fixtures para gerenciamento de dados
- Organização por Features

---

## Autor

Marcelo Bellato Momi