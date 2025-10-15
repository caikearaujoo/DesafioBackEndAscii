🚀 ASCII Back-End Challenge — API de Produtos
<img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" width="100" align="right"/>

Bem-vindo ao meu projeto desenvolvido para o Processo Seletivo da Ascii Empresa Júnior (UFU)!
Este desafio consiste em criar uma API REST para gerenciamento de produtos, utilizando Node.js, Express, Prisma e PostgreSQL.

🧠 Sobre o Projeto

A proposta do desafio é desenvolver uma API RESTful capaz de realizar as principais operações CRUD sobre produtos, aplicando boas práticas de arquitetura, organização em camadas e integração com banco de dados relacional.

🧩 Funcionalidades

📦 Listar todos os produtos

🔍 Buscar produto por ID

📝 Cadastrar novo produto

✏️ Atualizar produto existente

🗑️ Excluir produto do sistema

🛠️ Tecnologias Utilizadas
Tecnologia	Descrição
Node.js	Ambiente de execução JavaScript no servidor
Express	Framework para construção da API REST
Prisma ORM	Manipulação do banco de dados com segurança e produtividade
PostgreSQL	Banco de dados relacional utilizado
JavaScript (ESM)	Linguagem principal do projeto
Dotenv	Gerenciamento de variáveis de ambiente
🧱 Estrutura do Projeto
ascii-backend/
├── src/
│   ├── controllers/      # Controladores das rotas
│   ├── services/         # Lógica de negócio
│   ├── dtos/             # DTOs (entrada e saída de dados)
│   ├── routes/           # Definição das rotas da API
│   ├── prisma/           # Conexão com o banco via Prisma
│   └── server.js         # Ponto de entrada do servidor
├── prisma/
│   └── schema.prisma     # Modelo de dados
├── .env                  # Configurações sensíveis (DATABASE_URL)
├── package.json
└── README.md

🗃️ Modelo do Banco de Dados
Tabela: Produto
Campo	Tipo	Descrição
id	UUID	Identificador único
nome	String	Nome do produto
preco	Decimal(10,2)	Preço do produto
categoria	String	Categoria do produto
createdAt	DateTime	Data de criação
updatedAt	DateTime	Atualizado automaticamente

⚙️ Como Rodar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/SEU_USUARIO/ascii-backend.git
cd ascii-backend

2️⃣ Instalar as dependências
npm install

3️⃣ Configurar o banco de dados

Crie um arquivo .env na raiz com:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/ascii_db?schema=public"

4️⃣ Rodar as migrations
npx prisma migrate dev

5️⃣ Iniciar o servidor
npm run dev


Servidor rodando em:
👉 http://localhost:3000

🧭 Endpoints da API
Método	Rota	Descrição
GET	/api/produtos	Lista todos os produtos
GET	/api/produtos/:id	Busca produto pelo ID
POST	/api/produtos	Cria novo produto
PUT	/api/produtos/:id	Atualiza produto existente
DELETE	/api/produtos/:id	Remove produto

🌟 Diferenciais Implementados

✅ Arquitetura em camadas (Controller, Service, DTO)
✅ ORM Prisma para manipulação de dados
✅ Estrutura limpa e modular
✅ Banco relacional PostgreSQL
✅ Uso de variáveis de ambiente

(Em breve: integração com Swagger e testes unitários)

👨‍💻 Autor

Feito com 💙 por Caike César Mota de Araújo
🎓 Estudante de Ciência da Computação — UFU
📧 caikecm.araujo@gmail.com

🌐 github.com/caikearaujoo

🧾 Licença

Este projeto foi desenvolvido exclusivamente para fins avaliativos do processo seletivo da Ascii Empresa Júnior.
