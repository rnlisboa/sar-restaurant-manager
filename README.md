# sar-restaurant-manager
Sistema para administração de restaurante. Com ele, você terá controle total sobre seu negócio. O sistema contará com fluxo de caixa, controle de vendas, controle de estoque, sistema de pedidos, gráficos de gasto etc.

<h1 align="center">
  <a href="http://itnc.cnat.ifrn.edu.br"><img width=30% src="./.github/readme/ecosmart.png"></a>
</h1>

<h4 align="center">Um projeto de avaliação ambiental para empresas incubadas no IFRN - Natal Central</h4>

<div align="center">

 ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
 ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
 ![NestJS](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
 ![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
</div>

<p align="center">
  <a href="#descrição">Descrição</a> •
  <a href="#estrutura-do-projeto">Estrutura do projeto</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#branches">Branches</a> •
  <a href="#documentação">Documentação</a> •
  <a href="#contribuidores">Contribuidores</a>
</p>

### Descrição

Sistema para administração de restaurante. Com ele, você terá controle total sobre seu negócio. O sistema contará com fluxo de caixa, controle de vendas, controle de estoque, sistema de pedidos, gráficos de gasto etc.

[Saiba mais](./docs/usecases/documento_de_visao.md)

### Estrutura do projeto

```sh
├── .github/            # Configuração de pipelines do Github Actions 
├── backend/            # Projeto backend escrito em NodeJs com Express.js
├── docs/               # Documentação do projeto (casos de usos, cronograma, ...)
├── frontend/           # Projeto frontend escrito em Next.js (framework React.js)
└── README.md           # Descrição do diretório raiz e do projeto como um todo
```

É utilizado uma convenção para a padronização das mensagens de commits.

[Saiba mais](https://www.conventionalcommits.org/en/v1.0.0/)

### Tecnologias

Para o projeto foram utilizadas tecnologias Front-end e Back-end.

- [Front-end](./frontend/)
- [Back-end](./backend/README.md)

### Branches

- **main**: Branch de produção
- **develop**: Branch de desenvolvimento (features em teste, não finalizadas, ...)
- **feature/pedidos**: Branch específica para mudanças ou implementações (branches com vida muito curta - de dias no máximo)

Saiba mais no [Git Workflow](./docs/guidelines/git_workflow.md)

### Documentação

- [Casos de usos](./docs/usecases/)
- [Diagramas](./docs/diagrams/)
- [Como contribuir](./docs/guidelines/how_to_contribute.md)

### Contribuidores

<p align="center">
  <a href="https://github.com/rnlisboa" target="_blank">
    <img src="https://gitgub.com/rnlisboa.png" width="75px" />
  </a>
  
</p>


### Initialize Prisma configuration
npx prisma init

### Run Prisma migrations in development environment
yarn prisma migrate dev
