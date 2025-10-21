// src/middleware/apiKeyAuth.js

export default function apiKeyAuth(req, res, next) {
  // Mova a leitura da variável para DENTRO da função
  const EXPECTED_KEY = process.env.API_KEY;

  // Lê a chave do header x-api-key ou query param ?api_key=
  const key = req.header("x-api-key") || req.query.api_key;

  if (!EXPECTED_KEY) {
    console.error("API_KEY não configurada no backend (process.env.API_KEY).");
    return res.status(500).json({ error: "Server misconfigured" });
  }

  if (!key || key !== EXPECTED_KEY) {
    return res.status(401).json({ error: "Unauthorized: API key inválida" });
  }

  // ok
  next();
}
