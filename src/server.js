import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { ProdutoController } from "./controllers/produtoController.js";
import apiKeyAuth from "./middleware/apiKeyAuth.js";
import cors from "cors";
import { swaggerSpec, swaggerUi } from "./config/swagger.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3001", // endereço frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "x-api-key"], // inclui x-api-key aqui
  })
);

app.use(express.json());

app.use("/produtos", apiKeyAuth);

// Rotas
app.post("/produtos", ProdutoController.criar);
app.get("/produtos", ProdutoController.listar);
app.get("/produtos/:id", ProdutoController.buscarPorId);
app.put("/produtos/:id", ProdutoController.atualizar);
app.delete("/produtos/:id", ProdutoController.deletar);

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
