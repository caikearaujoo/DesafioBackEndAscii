// jest.setup.js
import dotenv from "dotenv";
import path from "path";

// Garante que o Jest encontre o .env dentro da pasta src/
dotenv.config({ path: path.resolve(process.cwd(), "src/.env") });
