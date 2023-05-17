# To-Do-List-Api

Essa é minha primeira API em produção, que será utilizada futuramente numa aplicação Full Stack de Lista de Tarefas.

## 📦 Implantação

Implementado a partir da plataforma Vercel vinculada a este repositório no github em: (https://to-do-list-api-pink.vercel.app)

## 🛠️ Construído com

<strong>NodeJs (v18.16.0) e MongoDB</strong>

<strong>Dependências:</strong>

* [@prisma/client](https://www.npmjs.com/package/@prisma/client) - Utilizado para conexão ao Banco de Dados hospedado no MongoDB
* [express](https://www.npmjs.com/package/express) - Faz o papel de servidor.
* [express-async-errors](https://www.npmjs.com/package/express-async-errors) - Usado para execução de erros asíncronos.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Usada para gerar Tokens que auxiliam na autenticação de usuários.
* [uuid](https://www.npmjs.com/package/uuid) - Usada para gerar ID's aleatórios.
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Utilizado para criptografia de senhas.

<strong>Dependências de desenvolvimento:</strong>

* [nodemon](https://www.npmjs.com/package/nodemon) - Utilizado para reiniciar o servidor sempre que algum arquivo é alterado.
* [prisma](https://www.npmjs.com/package/prisma) - Utilizado para auxiliar a conexão com o banco de dados.

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](https://github.com/NeemiasVieira/To-Do-List-API/blob/master/LICENSE) para detalhes.

## ⚙️ Rotas disponíveis para testes da API.

<strong>Rotas de Usuários</strong>

Função: Listar usuários cadastrados.<br>
Rota: https://to-do-list-api-pink.vercel.app/users<br>
Tipo de requisição: GET<br>
Retorna todos os usuários cadastrados no bd.<br>
<br><br>
Função: Criar usuário.<br>
Rota: https://to-do-list-api-pink.vercel.app/users<br>
Tipo de requisição: POST<br>
Aguarda no corpo da requisição um objeto JSON contendo valores para as propiedades: name, username, email, password.<br>
retorna um objeto JSON contendo: id, created_at, email, name, password, userid, username.<br>
onde id é gerado pelo MongoDb<br>
<br><br>
<strong>Rotas de Tarefas</strong><br>
<br><br>
Função: Criar tarefa.<br>
Rota: https://to-do-list-api-pink.vercel.app/todos<br>
Tipo de requisição: POST<br>
Aguarda no corpo da requisição um objeto JSON contendo valores para as propiedades: description, deadline, done.<br>
obs: deadline no formato (dd/mm/aaaa).<br>
retorna um objeto JSON contendo: id, created_at, deadline, description, done, todoid, username.<br>
<br><br>
Função: Listar tarefas por usuário.<br>
Rota: https://to-do-list-api-pink.vercel.app/todos<br>
Tipo de requisição: GET<br>
Aguarda um Token Bearer<br>
retorna Todas as tarefas criadas pelo usuário autenticado<br>
<br><br>
Função: Deleta a tarefa pelo seu id.<br>
Rota: https://to-do-list-api-pink.vercel.app/todos/:todoid<br>
Tipo de requisição: DELETE<br>
Aguarda um todoid nos parâmetros da requisição.<br>
retorna um status 204 (No content).<br>
<br><br>
Função: Marcar a tarefa como concluída.<br>
Rota: https://to-do-list-api-pink.vercel.app/todos/:todoid<br>
Tipo de requisição: PATCH<br>
Aguarda um todoid nos parâmetros da requisição.<br>
retorna um objeto JSON contendo as informações da tarefa já com o done atualizado para true.<br>
<br><br>
Função: Atualizar tarefa pelo ID.<br>
Rota: https://to-do-list-api-pink.vercel.app/todos/:todoid<br>
Tipo de requisição: PUT<br>
Aguarda um todoid nos parâmetros da requisição e as propiedades description e deadline no corpo da requisição.<br>
retorna um objeto JSON contendo as informações da tarefa atualizadas.<br>
<br><br>
<strong>Rotas de Autenticação</strong><br>
<br><br>
Função: Login com usuário e senha.<br>
Rota: https://to-do-list-api-pink.vercel.app/sessions<br>
Tipo de requisição: POST<br>
Aguarda no corpo da requisição um objeto contendo username e password.<br>
retorna o token de autenticação e as propiedades name, username e email do objeto user.<br>
<br><br>





