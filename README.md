# Projeto Sistema de vendas API rest

projeto voltado para aprendizado em desenvolvimento de API rest com a utilizacao de tecnologias do mercado de node.js, bibliotecas terceiras e bancos de dados com conexao com o sistema.

## Índice

- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Configuração](#instalação-e-configuração)
- [Execução do Projeto](#execução-do-projeto)

## Tecnologias e Ferramentas Utilizadas

<br>
<div style="display: inline_block" align="center">

<img width="100" src="https://skillicons.dev/icons?i=typescript">
<img width="100" src="https://skillicons.dev/icons?i=nodejs">
<img width="100" width="120" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg">
<img width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg" />
<img width="100" src="https://skillicons.dev/icons?i=sqlite">
<img width="100" src="https://skillicons.dev/icons?i=postman">

</div>
<br>

- Node.js 
- TypeScript
- Fastify
- Vitest
- SQLite
- Postman

## Estrutura do Projeto
 
Toda a sua estrutura de projeto e suas rota forma documentadas na seguinte rota da aplicacao quando vc rodar a Aplicacao de forma local 

```bash
http://localhost:3333/api-docs/
```

## Pré-requisitos

Algums Pré-requisitos importantes para vc poder rodar o projeto na sua maquina local seria vc ter instalado as seguintes ferramentas que sao:

<br>
<div style="display: inline_block" align="center">

<img width="100" src="https://skillicons.dev/icons?i=nodejs">
<img width="100" src="https://skillicons.dev/icons?i=npm">
<img width="100" src="https://skillicons.dev/icons?i=yarn">
<img width="100" src="https://skillicons.dev/icons?i=postgres">

</div>
<br>

- **Node.js:** Versão 12 ou superior.
- **NPM** ou **Yarn:** Gerenciadores de pacotes.
- **PostgreSQL ou Outros:** Banco de dados relacional.

#### IDE (Ambiente de Desenvolvimento Integrado):

<br>
<div style="display: inline_block" align="center">

<img width="100" src="https://skillicons.dev/icons?i=vscode">
<img width="100" src="https://skillicons.dev/icons?i=webstorm">

</div>
<br>

- **VS Code** (com extensões para Node.js e JavaScript).
- **WebStorm**.

## Instalação e Configuração

Siga os passos abaixo para configurar e rodar o projeto em sua máquina:

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-repositorio/sistema-gerenciamento-escola.git
    ```

2. **Instalação das dependências:**

    - Se estiver usando NPM:

        ```bash
        npm install
        ```
    - Se estiver usando Yarn: 
        ```bash
        yarn install
        ```
3. **Configuração do banco de dados:**
    - Crie um banco de dados PostgreSQL.
    -Configure as credenciais de acesso ao banco no arquivo .env (se utilizando dotenv):

        ```javascript
            NODE_ENV=development
            DATABASE_URL= String
            DATABASE_CLIENTE= String
            PORT= Number
        ```


## Execução do Projeto

1. **Rodando a aplicação:**

    - Se estiver usando NPM:

        ```bash
            npm run dev
        ```
    - Se estiver usando NPM:

        ```bash
            yarn dev
        ```
2. **Acessando a aplicação:**

    <br>
    <div style="display: inline_block" align="center">

    <img width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" />

    </div>
    <br>

    - A aplicação estará rodando em ```http://localhost:8080``` por padrão, OBS :. veeja see na aplicacao nao ah alguma alteracao de porta padrao a ser rodada na aplicacao.

3. **Testando as rotas da API:**

    <br>
    <div style="display: inline_block" align="center">

    <img width="100" src="https://skillicons.dev/icons?i=postman">

    </div>
    <br>

    - Utilize o Postman para testar as requisições como GET, POST, PUT e DELETE.
