const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const curiosidade = document.getElementById("curiosidade");

let likes = Number(localStorage.getItem("likes")) || 0;

likeCount.textContent = likes;

const curiosidades = [
    "🎭 FNAF 2 é uma prequela do primeiro jogo, apesar de ter sido lançado depois.",
    "🐻 O Toy Freddy foi criado para ser mais amigável com as crianças.",
    "🎁 O Puppet é um dos personagens mais importantes da história da série.",
    "🔦 Em FNAF 2 não existem portas de segurança como no primeiro jogo.",
    "😱 A Máscara do Freddy engana alguns animatrônicos, mas não funciona com o Foxy.",
    "📦 A Caixa de Música deve ser mantida carregada para impedir o Puppet de atacar.",
    "👀 Balloon Boy não ataca diretamente, mas desliga sua lanterna.",
    "🎮 O jogo foi desenvolvido por Scott Cawthon em 2014.",
    "🤖 Mangle pode aparecer no teto do escritório.",
    "⭐ FNAF 2 possui mais de 10 animatrônicos diferentes."
];

likeBtn.addEventListener("click", () => {
    likes++;
    likeCount.textContent = likes;
    localStorage.setItem("likes", likes);

    const indice = Math.floor(Math.random() * curiosidades.length);
    curiosidade.textContent = curiosidades[indice];
});