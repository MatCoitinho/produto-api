import { Router } from "express";
import { ProdutoController } from "../../controllers/Produto/produtoController.js";

export const Produto = Router();
const produtoController = new ProdutoController();

/**
 * @swagger
 * /produto:
 *   post:
 *     summary: Cria um novo produto
 *     description: Adiciona um novo produto ao banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *               preco:
 *                 type: number
 *               estoque:
 *                 type: integer
 *               data:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Produto criado com sucesso.
 *       400:
 *         description: Erro na criação do produto.
 */
Produto.post('/produto', async (req, res, next) => {
    try {
        return await produtoController.create(req, res);
    } catch (erro) {
        next(erro);
    }
});

/**
 * @swagger
 * /produto/{id}:
 *   get:
 *     summary: Obtém um produto pelo ID
 *     description: Retorna os detalhes de um produto específico pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado.
 *       404:
 *         description: Produto não encontrado.
 */
Produto.get('/produto/:id', async (req, res, next) => {
    try {
        return await produtoController.getById(req, res);
    } catch (erro) {
        next(erro);
    }
});

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     description: Retorna uma lista de todos os produtos no banco de dados.
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso.
 */
Produto.get('/produtos', async (req, res, next) => {
    try {
        return await produtoController.getAll(req, res);
    } catch (erro) {
        next(erro);
    }
});

/**
 * @swagger
 * /produto/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     description: Atualiza as informações de um produto específico.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto a ser atualizado.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *               preco:
 *                 type: number
 *               estoque:
 *                 type: integer
 *               data:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso.
 *       400:
 *         description: Erro na atualização do produto.
 *       404:
 *         description: Produto não encontrado.
 */
Produto.put('/produto/:id', async (req, res, next) => {
    try {
        return await produtoController.update(req, res);
    } catch (erro) {
        next(erro);
    }
});

/**
 * @swagger
 * /produto/{id}:
 *   delete:
 *     summary: Deleta um produto pelo ID
 *     description: Remove um produto específico do banco de dados.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto a ser deletado.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso.
 *       404:
 *         description: Produto não encontrado.
 */
Produto.delete('/produto/:id', async (req, res, next) => {
    try {
        return await produtoController.delete(req, res);
    } catch (erro) {
        next(erro);
    }
});
