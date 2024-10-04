// Seleciona a logo
let logo = document.querySelector(".logo img");

// Seleciona o botão
let botao = document.querySelector(".botao");

// Array com os caminhos de todas as logos
let logos = [
    "imagens/logo-01.png",
    "imagens/logo-02.png", 
    "imagens/logo-03.png" 
];

// Variável para acompanhar qual logo está sendo exibida
let indiceLogo = 0;

// Adiciona o evento de clique ao botão
botao.addEventListener('click', function() {
    // Atualiza a logo com o próximo item do array
    logo.src = logos[indiceLogo];

    // Incrementa o índice e verifica se deve voltar ao início do array
    indiceLogo++;
    if (indiceLogo >= logos.length) {
        indiceLogo = 0; // Reinicia o índice quando chegar ao fim
    }
});
