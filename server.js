import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

// Servir arquivos estáticos gerados pelo Vite (pasta dist)
app.use(express.static(distPath));

// Endpoint de verificação de saúde
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Fallback para SPA: envia index.html para qualquer rota não estática
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
