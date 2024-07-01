// Selecionando os elementos dos containers e imagens dos carros
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const imgCar = document.querySelector(".img-car");
const imgCar2 = document.querySelector(".img-car2");
const imgCar3 = document.querySelector(".img-car3");

// Variáveis para controlar as imagens apresentadas e as posições iniciais e finais do arrasto
var imagemApresentada = 17;
var imagemApresentada2 = 1;
var imagemApresentada3 = 9;
var posicaoInicial = 0;
var posicaoInicial2 = 0;
var posicaoInicial3 = 0;
var posicaoFinal = 0;
var posicaoFinal2 = 0;
var posicaoFinal3 = 0;
var arrasto = 0;
var arrasto2 = 0;
var arrasto3 = 0;

/* Função para trocar a imagem do primeiro container de acordo com a direção do arrasto */
function atualizarImagem(direcao) {
    if (direcao > 0) {
        // Incrementa a imagem apresentada
        imagemApresentada++;
    }
    if (direcao < 0) {
        // Decrementa a imagem apresentada
        imagemApresentada--;
    }
    // Define os limites para as imagens
    if (imagemApresentada > 24) {
        imagemApresentada = 17;
    }
    if (imagemApresentada < 17) {
        imagemApresentada = 24;
    }
    console.log(imagemApresentada);
    imgCar.src = `${imagemApresentada}.png`;
}

// Calculando o valor de arrasto do primeiro container da direita para a esquerda e vice-versa
container.addEventListener("mousedown", (event) => {
    posicaoInicial = event.clientX;
});

container.addEventListener("mouseup", (event) => {
    posicaoFinal = event.clientX;
    arrasto = posicaoFinal - posicaoInicial;
    if (Math.abs(arrasto) > 50) {
        atualizarImagem(arrasto);
    }
});

/* Função para trocar a imagem do segundo container de acordo com a direção do arrasto */
function atualizarImagem2(direcao) {
    if (direcao > 0) {
        // Incrementa a imagem apresentada
        imagemApresentada2++;
    }
    if (direcao < 0) {
        // Decrementa a imagem apresentada
        imagemApresentada2--;
    }
    // Define os limites para as imagens
    if (imagemApresentada2 > 8) {
        imagemApresentada2 = 1;
    }
    if (imagemApresentada2 < 1) {
        imagemApresentada2 = 8;
    }
    console.log(imagemApresentada2);
    imgCar2.src = `${imagemApresentada2}.png`;
}

// Calculando o valor de arrasto do segundo container da direita para a esquerda e vice-versa
container2.addEventListener("mousedown", (event) => {
    posicaoInicial2 = event.clientX;
});

container2.addEventListener("mouseup", (event) => {
    posicaoFinal2 = event.clientX;
    arrasto2 = posicaoFinal2 - posicaoInicial2;
    if (Math.abs(arrasto2) > 50) {
        atualizarImagem2(arrasto2);
    }
});

/* Função para trocar a imagem do terceiro container de acordo com a direção do arrasto */
function atualizarImagem3(direcao) {
    if (direcao > 0) {
        // Incrementa a imagem apresentada
        imagemApresentada3++;
    }
    if (direcao < 0) {
        // Decrementa a imagem apresentada
        imagemApresentada3--;
    }
    // Define os limites para as imagens
    if (imagemApresentada3 > 16) {
        imagemApresentada3 = 9;
    }
    if (imagemApresentada3 < 9) {
        imagemApresentada3 = 16;
    }
    console.log(imagemApresentada3);
    imgCar3.src = `${imagemApresentada3}.png`;
}

// Calculando o valor de arrasto do terceiro container da direita para a esquerda e vice-versa
container3.addEventListener("mousedown", (event) => {
    posicaoInicial3 = event.clientX;
});

container3.addEventListener("mouseup", (event) => {
    posicaoFinal3 = event.clientX;
    arrasto3 = posicaoFinal3 - posicaoInicial3;
    if (Math.abs(arrasto3) > 50) {
        atualizarImagem3(arrasto3);
    }
});

/* Função para trocar a descrição e o título/nome de acordo com a direção do arrasto */
function changeDescription(container, descriptions, titles) {
    var imgContainer = container.querySelector(".img-container");
    var descricao = imgContainer.querySelector(".descricao");
    var titulo = imgContainer.querySelector(".nome");

    var indiceAtual = 0;
    var posicaoInicialX = 0;

    // Atualiza a descrição e o título/nome do Pokémon
    function updateDescription() {
        descricao.textContent = descriptions[indiceAtual];

        // Troca a cor do título/nome
        titulo.innerHTML = "<span style='color: " + getColor(titles[indiceAtual]) + ";'>" + titles[indiceAtual] + "</span>";
    }

    updateDescription();

    // Calculando o valor de arrasto da direita para a esquerda e vice-versa
    imgContainer.addEventListener('mousedown', function (event) {
        posicaoInicialX = event.clientX;
    });

    imgContainer.addEventListener("mouseup", (event) => {
        var posicaoFinalX = event.clientX;
        var deslocamentoX = posicaoFinalX - posicaoInicialX;

        if (Math.abs(deslocamentoX) > 50) {
            if (deslocamentoX > 0) {
                indiceAtual = (indiceAtual - 1 + descriptions.length) % descriptions.length;
            } else {
                indiceAtual = (indiceAtual + 1) % descriptions.length;
            }

            updateDescription();
        }
    });
}


/* Inicializa a mudança de descrição e título/nome para os três containers */
changeDescription(document.querySelector('.container'), [
    'Após o nascimento, suas costas incha e endurece formando uma concha. Ele espalha uma espuma potente pela boca.',
    'Tem o poder de esmagar grandes pedras em pedaços. Para descansar, enterra-se na lama do fundo de um rio.',
    'Uma membrana mucosa transparente cobre seu corpo. Tocá-lo com as mãos nuas causará uma dormência e formigamento.',
    'Um Pokémon patético e pouco poderoso. Pode saltar alto em raras ocasiões, mas nunca mais de dois metros.',
    'O redemoinho em sua barriga mostra seu interior aparecendo através da pele. Aparece mais claramente depois que Poliwag come.',
    'É constantemente assolado por uma dor de cabeça. Quando a dor de cabeça fica intensa, ela começa a usar poderes misteriosos.',
    'Se atacado - mesmo por um grande inimigo - Horsea nada sem esforço para um local seguro, utilizando sua barbatina dorsal bem desenvolvida.',
    'Suas mandíbulas poderosas e bem desenvolvidas são capazes de esmagar qualquer coisa. Até mesmo o seu Treinador deve ter cuidado.',
], [
    'Squirtle - Água',
    'Mudkip - Água',
    'Wooper - Água e Terra',
    'Magikarp - Água',
    'Poliwag - Água',
    'Psyduck - Água',
    'Horsea - Água',
    'Totodile - Água',
]);

changeDescription(document.querySelector('.container2'), [
    'Após o nascimento, ele se alimenta dos nutrientes da semente em seu dorso para crescer',
    'Não importa o que Bellsprout esteja fazendo, se detectar movimento próximo, ele reagirá imediatamente estendendo a mão com suas vinhas finas.',
    'Com ruídos que podem ser confundidos com chocalhos de maracas, ele cria um ritmo alegre, assustando os Pokémon pássaros e fazendo-os voar apressados.',
    'Ele atrai a presa com sua saliva de cheiro adocicado e depois a mastiga. Demora um dia inteiro para comer uma presa.',
    'A folha na cauda de Snivy gera energia quando exposta à luz solar, tornando Snivy mais rápido e adicionando vantagem aos seus movimentos.',
    'Prefere lugares úmidos. De dia permanece ainda na sombra da floresta. Ele libera pó tóxico de sua cabeça.',
    'Ele adora aproveitar a luz do sol. Ele usa a folha da cabeça para procurar lugares quentes.',
    'Escondido sob um emaranhado de vinhas que cresce sem parar mesmo que as vinhas sejam arrancadas, a verdadeira aparência deste Pokémon permanece um mistério.',
], [
    'Bulbasaur - Planta',
    'Bellsprout - Planta e Veneno',
    'Maractus - Planta',
    'Carnivine - Planta',
    'Snivy - Planta',
    'Shroomish - Planta',
    'Chikorita - Planta',
    'Tangela - Planta',
]);

changeDescription(document.querySelector('.container3'), [
    'A chama na cauda de Charmander reflete sua força vital. Se ele estiver fraco, a chama queimará fracamente.',
    'É mais ágil do que parece e usa sua velocidade para confundir seus inimigos. Ele lança rapidamente bolas de fogo de ambas as narinas.',
    'Torchic fica quentinho se você o abraça. Ele tem um saco de chamas dentro de sua barriga, e as chamas queimam continuamente enquanto Torchic tiver vida.',
    'Geralmente fica curvado. Se estiver com raiva ou surpreso, ele dispara chamas pelas costas.',
    'É muito ágil. Antes de dormir, apaga a chama da cauda para evitar incêndios.',
    'Cerca de uma hora após o nascimento, a crina e a cauda de Ponyta crescem, dando ao Pokémon uma aparência impressionante.',
    'Tem uma natureza corajosa e confiável. Ele enfrenta destemidamente inimigos maiores e mais fortes.',
    'Se for atacado por um inimigo mais forte que ele, ele finge estar ferido para enganar o inimigo e foge.',
], [
    'Charmander - Fogo',
    'Tepig - Fogo',
    'Torchic - Fogo',
    'Cyndaquil - Fogo',
    'Chimchar - Fogo',
    'Ponyta - Fogo',
    'Growlithe - Fogo',
    'Vulpix - Fogo',
]);

/* Função que seleciona e define a cor do título/nome */
function getColor(title) {
    switch (title) {
        case 'Squirtle - Água':
        case 'Totodile - Água':
        case 'Mudkip - Água':
        case 'Wooper - Água e Terra':
        case 'Magikarp - Água':
        case 'Poliwag - Água':
        case 'Psyduck - Água':
        case 'Horsea - Água':
            return '#0099ff';
        case 'Bulbasaur - Planta':
        case 'Bellsprout - Planta e Veneno':
        case 'Maractus - Planta':
        case 'Carnivine - Planta':
        case 'Snivy - Planta':
        case 'Shroomish - Planta':
        case 'Chikorita - Planta':
        case 'Tangela - Planta':
            return '#36bb38';
        case 'Charmander - Fogo':
        case 'Tepig - Fogo':
        case 'Torchic - Fogo':
        case 'Cyndaquil - Fogo':
        case 'Chimchar - Fogo':
        case 'Ponyta - Fogo':
        case 'Growlithe - Fogo':
        case 'Vulpix - Fogo':
            return '#ff9900';
        default:
            return 'black';
    }
}