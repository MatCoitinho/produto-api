import { Produto } from "../../entities/Produto/Produto.js";

export class ProdutoService {
    constructor(produtoRepo) {
        this.produtoRepository = produtoRepo;
    }

    async create(descricao, preco, estoque, data) {
        const novoProduto = new Produto(null, descricao, preco, estoque, data);
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

    async update(id, descricao, preco, estoque, data, res) {
        try {
            await this.produtoRepository.update(id,descricao,preco,estoque,data);
            res.status(200).json({ message: 'Produto atualizado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualizar produto: ${error.message}` });
        }
    }

}
