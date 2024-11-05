import { Produto } from "../entities/produto.js";

export class ProdutoService {
    constructor(produtoRepo) {
        this.produtoRepository = produtoRepo;
    }

    async create(descricao, preco, estoque, data) {
        const novoProduto = new Produto({ descricao, preco, estoque, data });
        const resposta = await this.produtoRepository.create(novoProduto);
        const novoProdutoId = resposta.id;
        const buscaProduto = await this.produtoRepository.getOneById(novoProdutoId);
        return buscaProduto;
    }

    async delete(id) {
        const resposta = await this.produtoRepository.delete(id);
        return resposta;
    }

    async findAll() {
        const resposta = await this.produtoRepository.getAll();
        return resposta;
    }

    async findById(id) {
        const resposta = await this.produtoRepository.getOneById(id);
        return resposta;
    }

    async update(id, { _id, descricao, preco, estoque, data }) {
        const produtoEstadoAtual = await this.produtoRepository.getOneById(id);
        if (!produtoEstadoAtual) throw new Error("Produto não encontrado");

        const produto = new Produto({
            id,
            descricao: descricao || produtoEstadoAtual.descricao,
            preco: preco || produtoEstadoAtual.preco,
            estoque: estoque || produtoEstadoAtual.estoque,
            data: data || produtoEstadoAtual.data,
        });
        const resposta = await this.produtoRepository.update(produto.toJSON());
        return resposta;
    }
}
