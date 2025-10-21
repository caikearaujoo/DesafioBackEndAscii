import { ProdutoService } from "../services/produtoService.js";

import { produtoRequestDTO, produtoResponseDTO } from "../dto/produtoDTO.js";

//O controller recebe as requisicoes HTTP e atua como um intermediário entre as rotas e o model.
//Ele valida os dados, chama o model e retorna a resposta.

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Endpoints para gerenciamento de produtos
 */

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   nome:
 *                     type: string
 *                   preco:
 *                     type: number
 *                   categoria:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Busca um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 nome:
 *                   type: string
 *                 preco:
 *                   type: number
 *                 categoria:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Produto não encontrado
 */

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               categoria:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 */

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               categoria:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       404:
 *         description: Produto não encontrado
 */

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     summary: Deleta um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 */

export const ProdutoController = {
  criar: async (req, res) => {
    try {
      const produto = await ProdutoService.criar(produtoRequestDTO(req.body));
      res.status(201).json(produtoResponseDTO(produto));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  listar: async (req, res) => {
    try {
      const produtos = await ProdutoService.listar();
      res.status(200).json(produtos.map(produtoResponseDTO));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  buscarPorId: async (req, res) => {
    try {
      const produto = await ProdutoService.buscarPorId(req.params.id);
      if (!produto)
        return res.status(404).json({ message: "Produto não encontrado" });
      res.status(200).json(produtoResponseDTO(produto));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  atualizar: async (req, res) => {
    try {
      const produto = await ProdutoService.atualizar(
        req.params.id,
        produtoRequestDTO(req.body)
      );
      res.status(200).json(produtoResponseDTO(produto));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deletar: async (req, res) => {
    try {
      await ProdutoService.deletar(req.params.id);
      res.status(200).json({ message: "Produto deletado com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
