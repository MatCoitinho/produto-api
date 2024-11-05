import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });


export class ProdutoRepository {
    pool;

    constructor() {
        this.pool = new Pool({
            user: process.env.BD_USER,
            host: process.env.BD_HOST,
            database: process.env.BD_DATABASE,
            password: process.env.BD_PASSWORD,
            port: process.env.BD_PORT
        });
    }
    
    async create(props) {
        const { id, descricao, preco, estoque, data } = props;
        try {
            const resultado = await this.pool.query(
                "INSERT INTO produto (Descricao, Preco, Estoque, Data) VALUES ($1, $2, $3, $4) RETURNING ID",[descricao, preco, estoque, data]
            );
            if (resultado.rows.length > 0) {
                return resultado.rows[0];
            }
        } catch (err) {
            console.error('Erro ao criar produto:', err);
            throw err;
        }
    }

    async delete(id) {
        try {
            const resultado = await this.pool.query(
                "DELETE FROM produto WHERE ID = $1",
                [id]
            );
            if (resultado.rowCount > 0) {
                return { message: "Produto excluído com sucesso." };
            }
        } catch (err) {
            console.error('Erro ao excluir produto:', err);
            throw err;
        }
    }

    async update(props) {
        const { id, descricao, preco, estoque, data } = props;
        try {
            const resultado = await this.pool.query(
                "UPDATE produto SET Descricao = $1, Preco = $2, Estoque = $3, Data = $4 WHERE ID = $5",
                [descricao, preco, estoque, data, id]
            );
            if (resultado.rowCount > 0) {
                return { message: "Produto atualizado com sucesso." };
            }
        } catch (err) {
            console.error('Erro ao atualizar produto:', err);
            throw err;
        }
    }

    async getAll() {
        try {
            const resultado = await this.pool.query("SELECT * FROM produto");
            if (resultado.rows.length > 0) {
                return resultado.rows;
            }
        } catch (err) {
            console.error('Erro ao obter todos os produtos:', err);
            throw err;
        }
    }

    async getOneById(id) {
        try {
            const resultado = await this.pool.query(
                "SELECT * FROM produto WHERE ID = $1",
                [id]
            );
            if (resultado.rows.length > 0) {
                return resultado.rows[0];
            }
        } catch (err) {
            console.error('Erro ao obter produto por ID:', err);
            throw err;
        }
    }
}