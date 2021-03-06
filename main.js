const updateGreeting = () => {
    const greeting = document.querySelector('.greeting');

    if (horas >= 0 && horas < 5) {
        greeting.textContent = `boa madrugada, flor da madrugada`;
    } else if (horas >= 5 && horas < 12) {
        greeting.textContent = `bom dia, flor do dia`;
    } else if (horas >= 12 && horas < 18) {
        greeting.textContent = `boa tarde, flor da tarde`;
    } else {
        greeting.textContent = `boa noite, flor da noite`;
    }
}

const getApelido = () => {
    const apelido = apelidos[mes][dia];

    if (apelido) {
        localStorage.setItem('apelidoAtual', apelido);
        return apelido;
    }
    
    return localStorage.getItem('apelidoAtual');
}
const updateApelido = () => {
    const apelidoBox = document.querySelector('#apelido');
    const apelidoContent = apelidoBox.lastElementChild;

    apelidoContent.textContent = getApelido();
}


const getMotivo = () => {
   switch (mes) {
        case 7:
            return motivos[dia + 23];
        default:
            return motivos[dia - 7];
   }
}
const updateMotivo = () => {
    const motivoBox = document.querySelector('#motivos');
    const motivoContent = motivoBox.lastElementChild;

    motivoContent.textContent = getMotivo();
}


const getMomento = () => {
    switch (mes) {
        case 7:
            return momentos[dia + 23];
        default:
            return momentos[dia - 7];
   }
}
const updateMomento = () => {
    const momentoBox = document.querySelector('#momentos');
    const momentoContent = momentoBox.lastElementChild;

    momentoContent.textContent = getMomento();
}


const showBox = (box) => {
    const content = box.lastElementChild;
    
    if (!box.classList.replace('closed', 'opened')) {
        box.classList.add('opened')
    }

    box.dataset.opened = 'true';
    content.style.opacity = '1.0'
}
const hideBox = (box) => {
    const content = box.lastElementChild;
    box.classList.replace('opened', 'closed');
    box.dataset.opened = 'false';    
    content.style.opacity = '0.0' 
}


const apelidos = {
    6: {
        8: "meu doce de leite",
        11: "meu girassol",
        15: "meu bolo de chocolate",
        18: "minha cinderela",
        22: "minha tapioca",
        25: "minha jasmin",
        29: "minha florisbela",
    },
    7: {
        2: "meu crepe de nutella",
        6: "meu raio de sol",
        9: "meu doce de coco",
        13: "minha mulher abelha",
        16: "meu mel"
    }
}
const motivos = {
    1: "voc?? ?? a mulher mais encantadora desse mundo!",
    2: "seu cheiro ?? perfeito!",
    3: "voc?? sabe fazer um carinho sem igual!",
    4: "voc?? ?? minha melhor amiga!",
    5: "voc?? tem o corpo perfeito!",
    6: "voc?? ta sempre do meu lado!",
    7: "voc?? me faz feliz!",
    8: "voc?? me fez uma pessoa mais carinhosa!",
    9: "voc?? ?? inteligente (apesar de n??o achar)!",
    10: "voc?? ?? respons??vel com tudo!",
    11: "voc?? tem uma bunda enorme!",
    12: "voc?? cuida de mim!",
    13: "voc?? me chupa inacreditavelmente bem!",
    14: "voc?? ?? gentil com todos!",
    15: "voc?? n??o mede esfor??os pra me agradar!",
    16: "voc?? ?? simp??tica!",
    17: "seus peitos (PEIT??ES) s??o perfeitos!",
    18: "seu sorriso ?? lindo!",
    19: "voc?? faz falta pra mim!",
    20: "eu s?? me sinto bem se voc?? estiver bem!",
    21: "voc?? me fez uma pessoa mais respons??vel!",
    22: "voc?? me apoia nas minhas decis??es!",
    23: "voc?? ?? doidinha kskks",
    24: "seu beijo ?? inacreditavelmente bom!",
    25: "voc?? faz as melhores receitinhas!",
    26: "voc?? me proporciona os melhores momentos!",
    27: "voc?? ?? engra??ada!",
    28: "eu posso contar sempre com voc??!",
    29: "voc?? transa bem pra caralho!",
    30: "eu posso dividir qualquer fardo meu com voc??!",
    31: "a gente se completa perfeitamente!",
    32: "voc?? me fez uma pessoa mais comunicativa!",
    33: "voc?? faz as melhores surpresas!",
    34: "voc?? me ensina muita coisa!",
    35: "voc?? me fez uma pessoa melhor!",
    36: "voc?? sempre esteve comigo nos piores momentos!",
    37: "voc?? me conhece como ningu??m!",
    38: "voc?? se da bem com minha fam??lia!",
    39: "voc?? compartilha sua vida comigo!",
    40: "voc?? confia em mim!",
    41: "voc?? faz quest??o de me apresentar pra suas amigas e fazer eu me dar bem com elas!",
    42: "voc?? ?? a mulher da minha vida!"
}
const momentos = {
    1: "eu limpo o olho com a ponta do seu nariz",
    2: "eu te encho de beijo",
    3: "a gente cozinha juntos",
    4: "a gente da banho no theo juntos",
    5: "a gente ri juntos",
    6: "a gente assiste filme coladinho",
    7: "a gente se aconchega na minha posi????o no sono",
    8: "a gente toca os p??s no meio da madrugada pra garantir que tamo juntinho",
    9: "voc?? me diz porqu?? me ama ",
    10: "voc?? faz suas dancinhas sem sentido",
    11: "a gente sai pra comer juntos",
    12: "a gente dorme juntos",
    13: "a gente fofoca juntos",
    14: "eu fa??o carinho em voc??",
    15: "voc?? cuida de mim adoentado",
    16: "a gente assiste casimiro juntos",
    17: "voc?? se preocupa com meu bem estar",
    18: "a gente brinca de lutinha juntos (eu brinco com voc??, no caso)",
    19: "a gente conta do nosso dia",
    20: "voc?? fica com ci??mes de mexerem na minha sombracelha",
    21: "vai pro cinema juntos",
    22: "voc?? lembra de me dar o travesseiro pra eu por entre as pernas na hora de dormir",
    23: "voc?? me acorda me enchendo de beijo",
    24: "a gente faz os planejamentos da nossa casa",
    25: "a gente zoa um ao outro",
    26: "a gente entrela??a as pernas e os dedos na hora do sono",
    27: "a gente faz as trends do tiktok que voc?? acha",
    28: "a gente escova os dentes de casal",
    29: "a gente tira cochilo de casal",
    30: "voc?? fica com ci??mes de mim",
    31: "a gente zoa outras pessoas juntos",
    32: "a gente dirige de casal",
    33: "a gente planeja mentira pra escapar dos nossos amigos",
    34: "voc?? levanta o pesco??o pra eu por meu bra??o no meio do sono",
    35: "dorme na liga????o sem perceber",
    36: "voc?? fica com ci??mes de eu dormir fora de casa",
    37: "voc?? fica emburrada se n??o receber o bom dia/boa noite",
    38: "voc?? me manda fotinhas de 'te amo fazendo alguma coisa' no whatsapp",
    39: "voc?? me ajuda a lembrar dos meus afazeres",
    40: "a gente dorme de casal na liga????o",
    41: "voc?? faz surpresas pra mim",
    42: "voc?? faz um draminha mas no final faz o que eu pe??o"
}


const data = new Date();
const mes = data.getMonth() + 1;
const dia = data.getDate();
const horas = data.getHours();

updateGreeting();
updateApelido();
updateMomento();
updateMotivo();

const motivoBox = document.querySelector('#motivos');
const momentoBox = document.querySelector('#momentos');
const apelidoBox = document.querySelector('#apelidos');

motivoBox.addEventListener('click', () => {
    const motivoBox = document.querySelector('#motivos');

    if (motivoBox.dataset.opened == 'false') {
        showBox(motivoBox);
    } else {
        hideBox(motivoBox);    
    }
});
momentoBox.addEventListener('click', () => {
    const momentoBox = document.querySelector('#momentos');

    if (momentoBox.dataset.opened == 'false') {
        showBox(momentoBox);
    } else {
        hideBox(momentoBox);    
    }
});

