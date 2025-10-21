import { ProdutoModel } from "../models/produto.js"; // importa o model
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";

// Configuração do Cloudinary para ler o .env automaticamente ---
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configuração da IA do Hugging Face
const IA_API_URL =
  "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell";
const IA_TOKEN = process.env.HUGGINGFACE_TOKEN;

// Funções Auxiliares de IA

async function gerarImagemBuffer(prompt) {
  try {
    const response = await axios.post(
      IA_API_URL,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${IA_TOKEN}`,
          Accept: "image/jpeg", // <--- ADICIONE ESTA LINHA
        },
        responseType: "arraybuffer",
      }
    );
    return response.data; // Retorna o buffer da imagem
  } catch (error) {
    console.error(
      "Erro na API de IA:",
      error.response?.data?.toString() || error.message
    );
    throw new Error("Falha ao gerar imagem na IA");
  }
}

async function fazerUploadImagem(buffer) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "image", folder: "ascii-produtos" },
      (error, result) => {
        if (error) return reject(new Error("Falha no upload para Cloudinary"));
        resolve(result.secure_url);
      }
    );
    uploadStream.end(buffer);
  });
}

async function processarImagemBackground(produtoId, nome, categoria) {
  try {
    console.log(`[IA] Iniciando geração para: ${nome}`);
    const prompt = `Foto de estúdio profissional de ${nome}, ${categoria}, fundo branco minimalista, 8k`;

    const bufferImagem = await gerarImagemBuffer(prompt);
    console.log(`[IA] Imagem gerada para: ${nome}`);

    const imageUrl = await fazerUploadImagem(bufferImagem);
    console.log(`[IA] Upload concluído para: ${nome}. URL: ${imageUrl}`);

    // Atualiza o banco usando o Model
    await ProdutoModel.atualizar(produtoId, { imagemUrl: imageUrl });

    console.log(`[IA] Produto ${produtoId} atualizado no banco.`);
  } catch (error) {
    console.error(
      `[IA] Falha no processo de background para ${produtoId}:`,
      error.message
    );
  }
}

//O Service que o Controller vai chamar
export const ProdutoService = {
  // O método 'criar' com a lógica de IA
  criar: async (dadosProduto) => {
    // 1. Cria o produto no banco IMEDIATAMENTE (usando o Model)
    const novoProduto = await ProdutoModel.criar({
      ...dadosProduto,
      imagemUrl: null, // Começa nulo pois espera ser gerada
    });

    // Dispara o processo de IA em SEGUNDO PLANO
    processarImagemBackground(
      novoProduto.id,
      novoProduto.nome,
      novoProduto.categoria
    );

    // retorna o produto para o usuário IMEDIATAMENTE
    return novoProduto;
  },
  atualizar: async (id, data) => {
    const updatedProduto = await ProdutoModel.atualizar(id, {
      ...data,
      imagemUrl: null,
    });

    processarImagemBackground(
      updatedProduto.id,
      updatedProduto.nome,
      updatedProduto.categoria
    );

    return updatedProduto;
  },
  listar: async () => ProdutoModel.listar(),
  buscarPorId: async (id) => ProdutoModel.buscarPorId(id),
  deletar: async (id) => ProdutoModel.deletar(id),
};
