import prisma from "../prisma/client.js";

//O model faz a comunicação direta com o banco de dados utilizando o Prisma Client
//Ele contém métodos para criar, listar, buscar por ID, atualizar e deletar produtos DIRETAMENTE no banco de dados

export const ProdutoModel = {
  criar: async (data) => prisma.produto.create({ data }),
  listar: async () => prisma.produto.findMany(),
  buscarPorId: async (id) => prisma.produto.findUnique({ where: { id } }),
  atualizar: async (id, data) => prisma.produto.update({ where: { id }, data }),
  deletar: async (id) => prisma.produto.delete({ where: { id } }),
};
