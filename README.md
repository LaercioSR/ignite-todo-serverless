<p align="center">
  <a href="https://www.rocketseat.com.br/">
    <img src="https://raw.githubusercontent.com/LaercioSR/ignite-todo-serverless/main/assets/rocketseat-logo.png" height="120" width="auto" alt="Rocketseat Logo" />
  </a>
</p>

Repository containing my solution to the challenge of creating an application using the serverless architecture of the Ignite track of Node.Js from [Rocketseat](https://www.rocketseat.com.br/).

<h4 align="center">
 ✅  Project Completed  ✅
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#how-to-run">How to Run</a> •
 <a href="#technologies">Technologies</a>
</p>

## About

Application for creating and listing all, being developed in Node.Js using serverless architecture.

Challenge Details Link:

[Challenge 01 - Building with serverless](https://www.notion.so/Desafio-01-Construindo-com-serverless-1fdde2c717a94f7aa077e746cb077bec1)

## How to Run

### Prerequisites

To run the project you need to have [NodeJs](https://nodejs.org/en/) and [Serverless](https://www.serverless.com/) installed on your machine.

### Running

```bash
# Clone this repository
$ git clone https://github.com/LaercioSR/ignite-todo-serverless

# Access the project folder in terminal/cmd
$ cd ignite-todo-serverless

# Install dependencies
$ npm install

# Install and run DynamoDB to run locally
$ npm run dynamodb:install
$ npm run dynamodb:start

# In another terminal run the application
$ npm run dev
# If everything is correct, the application will run on http://localhost:3000
```

## Technologies

The following tools were used in building the project:

- **[TypeScript](https://www.typescriptlang.org/)**
- **[NodeJs](https://nodejs.org/en/)**
- **[Serverless](https://www.serverless.com/)**
