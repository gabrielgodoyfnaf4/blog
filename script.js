const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const curiosidade = document.getElementById("curiosidade");

// Caso queira adicionar um som:
// const som = new Audio("click.mp3");

let likes = Number(localStorage.getItem("likes")) || 0;
likeCount.textContent = likes;

const curiosidades = [
    "🎭 FNAF 2 é uma prequela do primeiro jogo.",
    "👻 O Puppet é um dos personagens mais importantes da franquia.",
    "🤖 Existem mais de 10 animatrônicos diferentes no jogo.",
    "🔦 Em FNAF 2 você usa uma lanterna para afastar alguns inimigos.",
    "🎁 Balloon Boy pode impedir o uso da lanterna.",
    "🐻 Toy Freddy é uma versão moderna do Freddy Fazbear.",
    "📦 A Caixa de Música deve ser mantida carregada para impedir o ataque do Puppet.",
    "🦊 Mangle pode aparecer rastejando pelo teto do escritório.",
    "🎮 O jogo foi lançado em 2014 por Scott Cawthon.",
    "😱 Não existem portas de segurança como no primeiro jogo."
];

let ultimaCuriosidade = -1;

function mostrarCuriosidade() {

    let indice;

    do {
        indice = Math.floor(Math.random() * curiosidades.length);
    } while (indice === ultimaCuriosidade);

    ultimaCuriosidade = indice;

    curiosidade.style.opacity = "0";

    setTimeout(() => {

        curiosidade.textContent = curiosidades[indice];
        curiosidade.style.opacity = "1";

    }, 200);

}

function verificarMetas() {

    switch (likes) {

        case 10:
            alert("🎉 10 curtidas! Obrigado por apoiar o blog!");
            break;

        case 25:
            alert("⭐ 25 curtidas! Você é um verdadeiro fã de FNAF!");
            break;

        case 50:
            alert("🏆 50 curtidas! Freddy agradece sua visita!");
            break;

        case 100:
            alert("👑 100 curtidas! Você desbloqueou o nível de Super Fã!");
            break;
    }

}

function curtir() {

    likes++;

    likeCount.textContent = likes;

    localStorage.setItem("likes", likes);

    mostrarCuriosidade();

    verificarMetas();

    // Descomente se tiver um arquivo de som.
    // som.play();

    likeBtn.classList.add("clicou");

    setTimeout(() => {

        likeBtn.classList.remove("clicou");

    }, 300);

}

likeBtn.addEventListener("click", curtir);

document.addEventListener("keydown", (evento) => {

    if (evento.key.toLowerCase() === "l") {

        curtir();

    }

});