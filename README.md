# REST API Sales System Project

Project focused on learning about REST API development using technologies from the Node.js market, third-party libraries and databases connected to the system.

## Index

- [Technologies and Tools Used](#technologies-and-tools-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation and Configuration](#installation-and-configuration)
- [Project Execution](#project-execution)

## Technologies and Tools Used

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

## Project Structure

Your entire project structure and routes are documented in the following application route when you run the Application in a local

```bash
http://localhost:3333/api-docs/
```

## Prerequisites

Some important prerequisites for you to be able to run the project on your local machine would be to have the following tools installed:

<br>
<div style="display: inline_block" align="center">

<img width="100" src="https://skillicons.dev/icons?i=nodejs">
<img width="100" src="https://skillicons.dev/icons?i=npm">
<img width="100" src="https://skillicons.dev/icons?i=yarn">
<img width="100" src="https://skillicons.dev/icons?i=postgres">

</div>
<br>

- **Node.js:** Version 12 or higher.
- **NPM** or **Yarn:** Package managers.
- **PostgreSQL or Others:** Relational database.

#### IDE (Integrated Development Environment):

<br>
<div style="display: inline_block" align="center">

<img width="100" src="https://skillicons.dev/icons?i=vscode">
<img width="100" src="https://skillicons.dev/icons?i=webstorm">

</div>
<br>

- **VS Code** (with extensions for Node.js and JavaScript).
- **WebStorm**.

## Installation and Configuration

Follow the steps below to configure and run the project on your machine:

1. **Clone the repository**:
```bash
git clone https://github.com/seu-repositorio/sistema-gerenciamento-escola.git
```

2. **Installing the dependencies:**

- If you are using NPM:

```bash
npm install
```
- If you are using Yarn:
```bash
yarn install
```
3. **Database configuration:**
- Create a PostgreSQL database. -Set the database access credentials in the .env file (if using dotenv):

```javascript
NODE_ENV=development
DATABASE_URL= String
DATABASE_CLIENT= String
PORT= Number
```

## Project Execution

1. **Running the application:**

- If using NPM:

```bash
npm run dev
```
- If using NPM:

```bash
yarn dev
```
2. **Accessing the application:**

<br>
<div style="display: inline_block" align="center">

<img width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" />

</div>
<br>

- The application will be running on ```http://localhost:8080``` by default, NOTE:. check if there is any change in the default port to be run in the application.

3. **Testing the API routes:**

<br>
<div style="display: inline_block" align="center">

<img width="100" src="https://skillicons.dev/icons?i=postman">

</div>
<br>

- Use Postman to test requests such as GET, POST, PUT and DELETE.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
