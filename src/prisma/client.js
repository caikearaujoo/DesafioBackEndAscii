import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export default prisma;

//define a conexão com o banco de dados e facilita o export para os outros arquivos
