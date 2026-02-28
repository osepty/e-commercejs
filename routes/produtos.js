const express = require('express');
const router = express.Router();

// Nossa "tabela" de produtos (usando emojis para simular as fotos por enquanto)
const produtos = [
    { id: 1, nome: "Teclado Mecânico RGB", preco: 250.00, imagem: "⌨️" },
    { id: 2, nome: "Mouse Gamer Pro", preco: 150.00, imagem: "🖱️" },
    { id: 3, nome: "Headset 7.1 Surround", preco: 320.00, imagem: "🎧" },
    { id: 4, nome: "Monitor Ultrawide 29\"", preco: 1200.00, imagem: "🖥️" },
    { id: 5, nome: "Cadeira Ergonômica", preco: 850.00, imagem: "💺" },
    { id: 6, nome: "Webcam Full HD", preco: 199.90, imagem: "📷" }
];

// Rota principal de produtos
router.get('/', (req, res) => {
    // Pega o que o usuário digitou na URL (ex: ?q=mouse)
    const termoBusca = req.query.q; 
    let produtosFiltrados = produtos;

    // Se ele pesquisou algo, a gente filtra a lista
    if (termoBusca) {
        produtosFiltrados = produtos.filter(produto => 
            produto.nome.toLowerCase().includes(termoBusca.toLowerCase())
        );
    }

    // Manda a lista filtrada (ou completa) e o termo pesquisado para a tela
    res.render('produtos', { 
        lista: produtosFiltrados, 
        busca: termoBusca || '' 
    });
});

module.exports = router;