const personagens = document.querySelectorAll('.personagem');
const imagemGrande = document.querySelector('.personagem-view .personagem-grande');
const nomePersonagem = document.querySelector('.personagem-view .nome-personagem');
const descricaoPersonagem = document.querySelector('.personagem-view .descricao-personagem');
let imagemAtual = "./src/imagens/tenis-nike.png"; // Variável para armazenar a imagem atual

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        personagem.classList.add('selecionado');

        const nome = personagem.id;
        const descricao = obterDescricaoPersonagem(nome);

        // Atualiza a imagemGrande para card-"nome do personagem que está selecionado"
        imagemGrande.src = `./src/imagens/tenis-${nome}.png`;
        nomePersonagem.textContent = nome;
        descricaoPersonagem.textContent = descricao;

        // Atualiza a variável imagemAtual com o caminho da imagem atual
        imagemAtual = imagemGrande.src;
    });

    personagem.addEventListener('mouseleave', () => {
        personagem.classList.remove('selecionado');

        // Restaura a imagemGrande para a imagemAtual anterior
        imagemGrande.src = imagemAtual;
    });
});

function obterDescricaoPersonagem(personagemId) {
    let descricao = '';

    switch (personagemId) {
        case 'ciclope':
            descricao = 'Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, distinctio.';
            break;
        case 'jean-grey':
            descricao = 'Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, distinctio.';
            break;
        case 'lince-negra':
            descricao = 'Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, distinctio.';
            break;
        case 'tempestade':
            descricao = 'Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, distinctio.';
            break;
        case 'vampira':
            descricao = 'Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, distinctio.';
            break;
        case 'wolverine':
            descricao = 'Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, distinctio.';
            break;
        case 'noturno':
            descricao = 'Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, distinctio.';
            break;
        case 'magneto':
            descricao = 'Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, distinctio.';
            break;
        default:
            descricao = 'Descrição Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, distinctio.';
            break;
    }

    return descricao;
}
