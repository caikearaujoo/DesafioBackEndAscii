# 🚀 ASCII Back-End Challenge — API de Produtos com IA
<img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" width="100" align="right"/>

API REST desenvolvida para o desafio técnico da **Ascii**. O projeto implementa um CRUD completo para gerenciamento de produtos e vai além dos requisitos, integrando-se a um **frontend em React (Next.js)** e a um sistema de **geração de imagens por Inteligência Artificial**.

Ao criar ou atualizar um produto, a API dispara um processo assíncrono que gera uma imagem única para o produto usando a API do **Hugging Face** e faz o upload para o **Cloudinary**, atualizando o banco de dados com a URL da imagem.

---

## 🌟 Diferenciais (Indo Além do Desafio)

Este projeto implementa todos os requisitos obrigatórios e opcionais, e adiciona os seguintes diferenciais:

-   ✅ **Frontend Dedicado:** Uma aplicação completa em Next.js foi desenvolvida para consumir esta API. **[Clique aqui para ver o repositório do Frontend](https://github.com/seu-usuario/frontendascii)**.
-   ✅ **Geração de Imagem com IA:** Integração com a API do Hugging Face (`black-forest-labs/FLUX.1-dev`) para gerar imagens de produtos automaticamente com base no nome e categoria.
-   ✅ **Processamento Assíncrono:** A geração de IA não trava a resposta do usuário. A API responde imediatamente (`201 Created`) e processa a imagem em segundo plano, atualizando o banco de forma assíncrona.
-   ✅ **Hospedagem em Nuvem:** As imagens geradas são salvas na nuvem (Cloudinary) para disponibilidade global.
-   ✅ **Arquitetura em Camadas (MVC + S):** O projeto foi refatorado para incluir uma camada de **Serviço** (`Service`), separando as regras de negócio (como a lógica de IA) do Controller e do Model (`Controller -> Service -> Model`).

---

## 🚀 Tecnologias Utilizadas

-   **Node.js** + **Express** — Criação da API REST
-   **Prisma ORM** — Interação com o banco de dados
-   **PostgreSQL** — Banco de dados relacional
-   **Swagger** — Documentação interativa da API
-   **Jest** + **Supertest** — Testes automatizados da API
-   **Hugging Face API** — Geração de imagem por IA
-   **Cloudinary** — Hospedagem de imagens na nuvem
-   **Axios** — Cliente HTTP para chamadas de API externas
-   **ES Modules** — Padrão moderno de import/export

---

## 📦 Estrutura do Projeto

A estrutura foi atualizada para o padrão Controller -> Service -> Model para máxima separação de responsabilidades, com a lógica de negócio (incluindo a IA) isolada na camada de Serviço.

O `.env` e o `server.js` estão localizados dentro da pasta `src/`.

src/ ├── config/ │ └── swagger.js # Configuração do Swagger ├── controllers/ │ └── produtoController.js # Lida com (req, res) e chama o Service ├── dto/ │ └── produtoDTO.js # Data Transfer Objects (validação) ├── middleware/ │ └── apiKeyAuth.js # Autenticação da API ├── models/ │ └── produto.js # Camada de acesso ao banco (Prisma) ├── prisma/ │ ├── client.js # Cliente Prisma │ └── schema.prisma # Schema do banco (na raiz do projeto) ├── services/ │ └── produtoService.js # Regras de negócio (ex: lógica de IA) ├── .env # Arquivo de variáveis de ambiente (DENTRO DE SRC) └── server.js # Ponto de entrada da aplicação

tests/ └── produtoController.test.js # Testes de integração

---

## ⚙️ Como Rodar o Backend Localmente

Atenção: O ponto de entrada (`server.js`) e o `.env` estão localizados dentro da pasta `src/`. O processo de setup exige dois terminais rodando em pastas diferentes.

### 1. Clonar o Repositório

```bash
git clone [https://github.com/seu-usuario/backendascii.git](https://github.com/seu-usuario/backendascii.git)
cd backendascii
2. Instalar Dependências
Rode o npm install a partir da pasta raiz.

npm install
3. Configurar Variáveis de Ambiente
Crie um arquivo chamado .env dentro da pasta src/. Use o template abaixo:

# src/.env

# Banco de Dados (PostgreSQL)
# IMPORTANTE: Copie essa URL, você vai precisar dela no passo 4.
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public

# Chave da API (gere uma chave segura)
API_KEY=SUA_CHAVE_DE_API_SECRETA

# API de IA (Hugging Face)
# Crie um Access Token em: [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
HUGGINGFACE_TOKEN=hf_SEU_TOKEN_DO_HUGGING_FACE

# Hospedagem de Imagem (Cloudinary)
# Pegue as chaves do seu dashboard: [https://cloudinary.com/console](https://cloudinary.com/console)
CLOUDINARY_CLOUD_NAME=SEU_CLOUD_NAME
CLOUDINARY_API_KEY=SUA_API_KEY_CLOUDINARY
CLOUDINARY_API_SECRET=SEU_API_SECRET_CLOUDINARY
4. Rodar a Aplicação (Requer 2 Terminais)
Para rodar o projeto, você precisará de dois terminais abertos.

➡️ Terminal 1: Rodar as Migrações do Banco (Pasta Raiz)
O Prisma precisa ser executado da pasta-raiz (BackEndAscii) para encontrar o schema.prisma. Como o .env está em src/, vamos injetar a variável do banco manualmente.

Abra o primeiro terminal.

Certifique-se de que você está na pasta raiz (BackEndAscii).

Copie a DATABASE_URL de dentro do seu src/.env.

Execute o comando abaixo, colando a sua URL no lugar indicado:

# Estando na pasta-raiz (BackEndAscii):
DATABASE_URL="COLE_A_SUA_DATABASE_URL_COMPLETA_AQUI" npx prisma migrate dev --name init
➡️ Terminal 2: Rodar o Servidor (Pasta src/)
O servidor deve ser executado de dentro da pasta src/, onde o .env e o server.js estão.

Abra um novo terminal.

Entre na pasta src/:

cd src
Execute o servidor (este comando vai ler o .env automaticamente):

node --watch --env-file=.env server.js
O servidor estará disponível em: 👉 http://localhost:3000

📘 Documentação Swagger
Com o servidor rodando, acesse a documentação interativa da API: http://localhost:3000/docs

🧪 Executar os Testes
Para rodar os testes unitários e de integração (a partir da pasta raiz):

npm test
🔗 Frontend
Não se esqueça de conferir o Repositório do Frontend para ver a API em ação: https://github.com/caikearaujoo/FrontEndAscii

👨‍💻 Autor
Caike Araújo Estudante de Ciência da Computação na UFU | Desenvolvedor Full Stack

💼 LinkedIn: https://www.linkedin.com/in/caikearaujoo/

📧 Email: caikecm.araujo@gmail.com
