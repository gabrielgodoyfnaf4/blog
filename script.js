const curiosidades = [
    "Golden Freddy pode aparecer aleatoriamente e travar o jogo.",
    "Scott Cawthon criou FNAF em apenas alguns meses.",
    "Foxy é o único animatrônico que corre até o escritório.",
    "As mensagens do Phone Guy escondem pistas importantes da história.",
    "FNAF 1 foi lançado em agosto de 2014."
];

const botao = document.getElementById("btnCuriosidade");
const texto = document.getElementById("textoCuriosidade");

botao.addEventListener("click", () => {

    const indice = Math.floor(
        Math.random() * curiosidades.length
    );

    texto.textContent = curiosidades[indice];

});
