import express from "express";
import { Produto } from "./Produto/produtoRoutes"
export const route = express.Router()

route.use('/', Produto);