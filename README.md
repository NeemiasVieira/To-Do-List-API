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

Função: Listar usuários cadastrados.
Rota: https://to-do-list-api-pink.vercel.app/users
Tipo de requisição: GET
Retorna todos os usuários cadastrados no bd.

Função: Criar usuário.
Rota: https://to-do-list-api-pink.vercel.app/users
Tipo de requisição: POST
Aguarda no corpo da requisição um objeto JSON contendo valores para as propiedades: name, username, email, password.
retorna um objeto JSON contendo: id, created_at, email, name, password, userid, username.
onde id é gerado pelo MongoDb

<strong>Rotas de Tarefas</strong>

Função: Criar tarefa.
Rota: https://to-do-list-api-pink.vercel.app/todos
Tipo de requisição: POST
Aguarda no corpo da requisição um objeto JSON contendo valores para as propiedades: description, deadline, done.
obs: deadline no formato (dd/mm/aaaa).
retorna um objeto JSON contendo: id, created_at, deadline, description, done, todoid, username.

Função: Listar tarefas por usuário.
Rota: https://to-do-list-api-pink.vercel.app/todos
Tipo de requisição: GET
Aguarda um Token Bearer
retorna Todas as tarefas criadas pelo usuário autenticado

Função: Deleta a tarefa pelo seu id.
Rota: https://to-do-list-api-pink.vercel.app/todos/:todoid
Tipo de requisição: DELETE
Aguarda um todoid nos parâmetros da requisição.
retorna um status 204 (No content).

Função: Marcar a tarefa como concluída.
Rota: https://to-do-list-api-pink.vercel.app/todos/:todoid
Tipo de requisição: PATCH
Aguarda um todoid nos parâmetros da requisição.
retorna um objeto JSON contendo as informações da tarefa já com o done atualizado para true.

Função: Atualizar tarefa pelo ID.
Rota: https://to-do-list-api-pink.vercel.app/todos/:todoid
Tipo de requisição: PUT
Aguarda um todoid nos parâmetros da requisição e as propiedades description e deadline no corpo da requisição.
retorna um objeto JSON contendo as informações da tarefa atualizadas.

<strong>Rotas de Autenticação</strong>

Função: Login com usuário e senha.
Rota: https://to-do-list-api-pink.vercel.app/sessions
Tipo de requisição: POST
Aguarda no corpo da requisição um objeto contendo username e password.
retorna o token de autenticação e as propiedades name, username e email do objeto user.






