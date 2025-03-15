const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('HanakoBot está rodando!');
});

app.listen(port, () => {
  console.log(`Servidor web rodando na porta ${port}`);
});

// Iniciar o bot
require('./index.js');