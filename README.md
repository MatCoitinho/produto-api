# Produto API

API desenvolvida em JavaScript com Express e PostgreSQL, gerenciada via Docker. A API realiza operações CRUD (Create, Read, Update, Delete) para a classe `Produto`.

## Funcionalidades
- **POST /produto**: Cria um novo produto.
- **GET /produtos**: Lista todos os produtos.
- **GET /produto/:id**: Obtém um produto específico por ID.
- **PUT /produto/:id**: Atualiza um produto existente.
- **DELETE /produto/:id**: Remove um produto pelo ID.

## Pré-requisitos
- Node.js
- Docker

## Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MatCoitinho/produto-api.git
   cd produto-api

2. **Instale as dependências do projeto**
    ```bash
    npm install

3. **Configuração do banco de dados**
    ```bash
    npm run create

4. **Criação da tabela**
    ```bash
    npm run migration

5. **Seed do banco de dados**
    Adiciona 5 produtos no banco de dados
    ```bash
    npm run seed. 

6. **Crie um arquivo .env no formato:**
    ```bash
    API_PORT=
    BD_HOST=
    BD_DATABASE= 
    BD_USER= 
    BD_PASSWORD= 
    BD_PORT=

7. **Execute a API**
    ```bash
    npm run start:dev
