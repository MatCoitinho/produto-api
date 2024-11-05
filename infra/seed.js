import pkg from 'pg'; 
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env;

async function insertDB() {
    const dbPool = new Pool({
        user: DB_USER,
        host: DB_HOST,
        database: DB_DATABASE,
        password: DB_PASSWORD,
        port: DB_PORT,
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
        console.error('Ocorreu um erro ao tentar inserir os produtos no Banco de Dados');
    } finally {
        await dbPool.end();
    }
}

insertDB();