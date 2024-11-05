import { Router } from "express"
import { ProdutoController } from "../../controllers/Produto/produtoController";

const Produto = Router()

const produtoController = new ProdutoController();

Produto.post('/produto', async(req, res) => {
    try{
        return await produtoController.create(req,res)
    } catch(erro){
        next(erro);
    }
})

Produto.get('/produto/:id', async (req, res) => {
    try {
        return await produtoController.getById(req,res)
    } catch (erro) {
        next(erro)
    }
});

Produto.get('/produtos', async (req, res) => {
    try {
        return await produtoController.getAll(req,res)
    } catch (erro) {
        next(erro)
    }
});

Produto.put('/produto/:id', async (req, res) => {
    try {
        return await produtoController.update(req,res)
    } catch (erro) {
        next(erro)
    }
});

Produto.delete('/produto/:id', async (req, res) => {
    try {
        return await produtoController.delete(req,res)
    } catch (error) {
        next(erro)
    }
});