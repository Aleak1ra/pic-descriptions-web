const personagens = document.querySelectorAll('.personagem');
const imagemGrande = document.querySelector('.personagem-view .personagem-grande');
const nomePersonagem = document.querySelector('.personagem-view .nome-personagem');
const descricaoPersonagem = document.querySelector('.personagem-view .descricao-personagem');
let imagemAtual = "./src/imagens/card-ciclope.png"; // Variável para armazenar a imagem atual

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        personagem.classList.add('selecionado');

        const nome = personagem.id;
        const descricao = obterDescricaoPersonagem(nome);

        // Atualiza a imagemGrande para card-"nome do personagem que está selecionado"
        imagemGrande.src = `./src/imagens/card-${nome}.png`;
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
            descricao = 'Descrição do Ciclope';
            break;
        case 'jean-grey':
            descricao = 'Descrição da Jean Grey';
            break;
        case 'lince-negra':
            descricao = 'Descrição da Lince Negra';
            break;
        case 'tempestade':
            descricao = 'Descrição da Tempestade';
            break;
        case 'vampira':
            descricao = 'Descrição da Vampira';
            break;
        case 'wolverine':
            descricao = 'Descrição do Wolverine';
            break;
        case 'noturno':
            descricao = 'Descrição do Noturno';
            break;
        case 'magneto':
            descricao = 'Descrição do Magneto';
            break;
        default:
            descricao = 'Descrição do Personagem';
            break;
    }

    return descricao;
}
