import request from "supertest";
import express from "express";
import { ProdutoController } from "../src/controllers/produtoController.js";

// Criando um servidor Express isolado para teste
const app = express();
app.use(express.json());

app.post("/produtos", ProdutoController.criar);
app.get("/produtos", ProdutoController.listar);
app.get("/produtos/:id", ProdutoController.buscarPorId);
app.put("/produtos/:id", ProdutoController.atualizar);
app.delete("/produtos/:id", ProdutoController.deletar);

describe("Testes do ProdutoController", () => {
  let produtoId;

  // Testa criação de produto
  it("Deve criar um produto", async () => {
    const res = await request(app)
      .post("/produtos")
      .send({ nome: "Produto Teste", preco: 12.5, categoria: "Teste" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.nome).toBe("Produto Teste");
    produtoId = res.body.id; // guardando ID para outros testes
  });

  // Testa listagem de produtos
  it("Deve listar todos os produtos", async () => {
    const res = await request(app).get("/produtos");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // Testa busca por ID
  it("Deve buscar produto pelo ID", async () => {
    const res = await request(app).get(`/produtos/${produtoId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(produtoId);
  });

  // Testa atualização de produto
  it("Deve atualizar produto", async () => {
    const res = await request(app)
      .put(`/produtos/${produtoId}`)
      .send({ nome: "Produto Atualizado", preco: 20, categoria: "Teste2" });

    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe("Produto Atualizado");
    expect(Number(res.body.preco)).toBe(20);
  });

  // Testa exclusão de produto
  it("Deve deletar produto", async () => {
    const res = await request(app).delete(`/produtos/${produtoId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Produto deletado com sucesso!");
  });

  // Testa busca de produto inexistente
  it("Deve retornar 404 para produto inexistente", async () => {
    const res = await request(app).get(`/produtos/${produtoId}`);
    expect(res.statusCode).toBe(404);
  });
});
