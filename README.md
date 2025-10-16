🚀 ASCII Back-End Challenge — API de Produtos
<img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" width="100" align="right"/>

API REST desenvolvida como parte do desafio técnico da **Ascii**, com foco em boas práticas de arquitetura, uso de ORM, documentação com Swagger e testes automatizados.  
O projeto implementa um CRUD completo para gerenciamento de produtos.

---

## 🚀 Tecnologias utilizadas

- **Node.js** + **Express** — para criação da API REST  
- **Prisma ORM** — para interação com o banco de dados
- **PostgresSQL** - sgbd utilizado para o banco de dados
- **Swagger** — para documentação automática das rotas  
- **Jest** + **Supertest** — para testes automatizados  
- **ES Modules** — padrão moderno de import/export  

---

## 📦 Estrutura do projeto
src/
├── config/
│ └── swagger.js # Configuração do Swagger
├── controllers/
│ └── produtoController.js # Controlador com rotas e documentação Swagger
├── dto/
│ └── produtoDTO.js # Data Transfer Objects
├── models/
│ └── produto.js # Model usando Prisma
├── prisma/
│ └── schema.prisma # Definição do banco
└── server.js # Ponto de entrada da aplicação
tests/
└── produtoController.test.js # Testes automatizados

---

## ⚙️ Como rodar o projeto localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/backendascii.git
cd backendascii
```

2️⃣ Instalar as dependências
```bash
npm install
```
3️⃣ Configurar o banco de dados com Prisma
Crie o arquivo .env na raiz do projeto com a URL de conexão do banco (exemplo usando SQLite):

```bash
DATABASE_URL="file:./dev.db"
```

Em seguida, execute:

```bash
npx prisma migrate dev --name init
```

4️⃣ Rodar o servidor
```bash
node src/server.js
```

O servidor estará disponível em:
👉 http://localhost:3000

📘 Documentação Swagger

Acesse a documentação interativa da API:
http://localhost:3000/docs

🧪 Executar os testes

Para rodar os testes unitários e de integração:
```bash
npm test
```

## 🧪 Endpoints testados

Os testes garantem o funcionamento dos principais endpoints da API:

- **Criar produto** — `POST /produtos`
- **Listar produtos** — `GET /produtos`
- **Buscar por ID** — `GET /produtos/:id`
- **Atualizar produto** — `PUT /produtos/:id`
- **Deletar produto** — `DELETE /produtos/:id`

---

## 🧠 Conceitos aplicados

- ✅ Boas práticas REST  
- 🧱 Arquitetura MVC simplificada  
- 🔄 Separação de responsabilidades  
- 🧩 Testes automatizados  
- 📨 Uso de DTOs  
- 📘 Documentação com Swagger  
- 🗃️ ORM moderno (Prisma)  

---

## 👨‍💻 Autor

**Caike Araújo**  
Estudante de Ciência da Computação na UFU | Desenvolvedor Full Stack  

💼 [LinkedIn](https://www.linkedin.com/in/caikearaujoo)  
📧 **caikecm.araujo@gmail.com**

---

> Projeto desenvolvido como parte do processo seletivo da **Ascii**, demonstrando domínio em backend, organização e boas práticas de desenvolvimento.
