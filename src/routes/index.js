import express from "express";
import { Produto } from "./Produto/produtoRoutes.js"
export const route = express.Router()

route.use('/', Produto);