const express = require('express');
const path = require('path');
const app = express();

// Configura o EJS como motor de visualização (Views)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a pasta 'public' para arquivos estáticos (CSS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rota Principal
app.get('/', (req, res) => {
    // Em vez de res.send, usamos res.render para abrir um arquivo da pasta views
    res.render('index', { nomeLoja: "Minha Loja Tech" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Rodando em http://localhost:${PORT}`));