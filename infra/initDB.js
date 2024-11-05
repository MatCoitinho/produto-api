import pkg from 'pg'; 
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const { BD_USER, BD_HOST, BD_DATABASE, BD_PASSWORD, BD_PORT } = process.env;

const pool = new Pool({
    user: BD_USER,
    host: BD_HOST,
    database: 'postgres',
    password: BD_PASSWORD,
    port: BD_PORT,
});

async function createDB() {
    try {
        await pool.query(`CREATE DATABASE ${BD_DATABASE}`);
        console.log(`Banco de Dados criado com sucesso.`);
    } catch (erro) {
        console.log(erro)
        console.error('Ocorreu um erro ao criar o Banco de Dados');
    }
    const dbPool = new Pool({
        user: BD_USER,
        host: BD_HOST,
        database: BD_DATABASE,
        password: BD_PASSWORD,
        port: BD_PORT,
    });
    try {
        await dbPool.query(`
            CREATE TABLE IF NOT EXISTS produto (
                ID SERIAL PRIMARY KEY,
                DESCRICAO VARCHAR(255),
                PRECO NUMERIC(10, 2),
                ESTOQUE INTEGER,
                DATA DATE DEFAULT CURRENT_DATE)
        `);

        console.log('Tabela "produto" criada com sucesso.');
    } catch (err) {
        console.log(err);
        console.error('Erro ao tentar criar tabela do produto');
    }
    await dbPool.end();
    await pool.end(); 
}

createDB();