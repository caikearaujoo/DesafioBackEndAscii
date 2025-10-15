import express from "express";
import { ProdutoController } from "./controllers/produtoController.js";
import { swaggerSpec, swaggerUi } from "./config/swagger.js";

const app = express();
app.use(express.json());

// Rotas
app.post("/produtos", ProdutoController.criar);
app.get("/produtos", ProdutoController.listar);
app.get("/produtos/:id", ProdutoController.buscarPorId);
app.put("/produtos/:id", ProdutoController.atualizar);
app.delete("/produtos/:id", ProdutoController.deletar);

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
