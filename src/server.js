import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/produtos", async (req, res) => {
  await prisma.produto.create({
    data: {
      nome: req.body.nome,
      preco: req.body.preco,
      categoria: req.body.categoria,
    },
  });

  res.status(201).json(req.body);
});

app.get("/produtos", async (req, res) => {
  const produtos = await prisma.produto.findMany();

  res.status(200).json(produtos);
});

/*
    Agora, para deletar e editar, utilizaremos route Params para deletar/editar usuário específico
*/

app.put("/produtos/:id", async (req, res) => {
  await prisma.produto.update({
    where: {
      id: req.params.id,
    },
    data: {
      nome: req.body.nome,
      preco: req.body.preco,
      categoria: req.body.categoria,
    },
  });

  res.status(201).json(req.body);
});

app.delete("/produtos/:id", async (req, res) => {
  await prisma.produto.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Produto deletado com sucesso!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
