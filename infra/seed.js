import pkg from 'pg'; 
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const { BD_USER, BD_HOST, BD_DATABASE, BD_PASSWORD, BD_PORT } = process.env;

async function insertDB() {
    const dbPool = new Pool({
        user: BD_USER,
        host: BD_HOST,
        database: BD_DATABASE,
        password: BD_PASSWORD,
        port: BD_PORT,
    });

    try {
        await dbPool.query(`
            INSERT INTO produto (Descricao, Preco, Estoque) VALUES
            ('Produto 1', 49.90, 60),
            ('Produto 2', 30.90, 54),
            ('Produto 3', 9.90, 25),
            ('Produto 4', 199.90, 10),
            ('Produto 5', 0.90, 500)
        `);

        console.log('Foram inseridos 5 produtos no Banco de Dados.');
    } catch (err) {
        console.log(err)
        console.error('Ocorreu um erro ao tentar inserir os produtos no Banco de Dados');
    } finally {
        await dbPool.end();
    }
}

insertDB();