import express from "express"
import dotenv from "dotenv"
import { route } from "./routes/index.js"
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
dotenv.config({path: ".env"})
import swaggerUI from 'swagger-ui-express';

const app = express();
app.use(cors());

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API de Produto',
        version: '1.0.0',
        description: 'API para gerenciamento de produtos',
      },
      servers: [
        {
            url: `http://localhost:${process.env.API_PORT}`
        }
      ]
    },
    apis: ['./src/routes/*/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(express.json());
app.use(route);

app.use((err, req, res, next) => {
    res.status(500).json({
        message: `Internal Server Error - ${err.message}`
    });
    next();
});

app.listen(process.env.API_PORT, () => {
    console.log(`API executando na porta ${process.env.API_PORT}`);
    console.log(`Testes: http://localhost:${process.env.API_PORT}/docs`);
});