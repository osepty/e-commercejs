const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ESSA LINHA É FUNDAMENTAL: Serve os arquivos da pasta public (CSS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// IMPORTANDO AS ROTAS
const rotaProdutos = require('./routes/produtos'); // Certifique-se que o caminho está certo
app.use('/produtos', rotaProdutos); // Aqui você diz: "Tudo que começar com /produtos, mande para aquele arquivo"

app.get('/', (req, res) => {
    res.render('index', { nomeLoja: "TechLoja Pro" });
});

app.listen(3000, () => console.log("Servidor on em http://localhost:3000"));