# cypress-WEB



npm init -y

Instalar o Cypress na versão 3.6.0
npm install cypress@3.6.0

Iniciar o Cypress
./node_modules/.bin/cypress open


Em package.json

alterar a linha:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cypress:open": "cypress open"