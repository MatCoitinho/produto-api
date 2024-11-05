import { ProdutoRepository } from "../../repositories/Produto/produtoRepository.js";
import { ProdutoService } from "../../services/Produto/produtoServices.js";

export class ProdutoController {
    constructor() {
        const produtoRepository = new ProdutoRepository();
        this.produtoService = new ProdutoService(produtoRepository);
    }

    async create(req, res) {
        const { descricao, preco, estoque, data } = req.body;
        const novoProduto = await this.produtoService.create(descricao, preco, estoque, data);
        return res.status(201).json(novoProduto);
    }

    async delete(req, res) {
        const { id } = req.params;
        const resposta = await this.produtoService.delete(id);
        return res.status(200).send(resposta);
    }

    async getAll(req, res) {
        const resposta = await this.produtoService.findAll();
        return res.json(resposta);
    }

    async getById(req, res) {
        const { id } = req.params;
        const resposta = await this.produtoService.findById(id);
        return res.json(resposta);
    }

    async update(req, res) {
        const { descricao, preco, estoque, data } = req.body;
        const id = req.params.id;
        const produtoAtualizado = await this.produtoService.update(id, descricao, preco, estoque, data, res);
        return res.status(201).json(produtoAtualizado);
    }
}
