const updateGreeting = () => {
    const greeting = document.querySelector('.greeting');
    const apelido = getApelido();

    if (horas >= 0 && horas < 5) {
        greeting.textContent = `boa madrugada, ${apelido}`;
    } else if (horas >= 5 && horas < 12) {
        greeting.textContent = `bom dia, ${apelido}`;
    } else if (horas >= 12 && horas < 18) {
        greeting.textContent = `boa tarde, ${apelido}`;
    } else {
        greeting.textContent = `boa noite, ${apelido}`;
    }
}

const getApelido = () => {
    return apelidos[dia];
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
    8: "meu doce de leite",
    11: "meu girassol",
    15: "meu bolo de chocolate",
    18: "minha cinderela",
    22: "minha tapioca",
    25: "minha jasmin",
    29: "minha florisbela",
    2: "meu crepe de nutella",
    6: "meu raio de sol",
    9: "meu doce de coco",
    13: "minha mulher abelha",
    16: "meu mel"
}
const motivos = {
    1: "porque você é a mulher mais encantadora desse mundo!",
    2: "porque seu cheiro é perfeito!",
    3: "porque você sabe fazer um carinho sem igual!",
    4: "porque você é minha melhor amiga!",
    5: "porque você tem o corpo perfeito!",
    6: "porque você ta sempre do meu lado!",
    7: "porque você me faz feliz!",
    8: "porque você me fez uma pessoa mais carinhosa!",
    9: "porque você é inteligente (apesar de não achar)!",
    10: "porque você é responsável com tudo!",
    11: "porque você tem uma bunda enorme!",
    12: "porque você cuida de mim!",
    13: "porque você me chupa inacreditavelmente bem!",
    14: "porque você é gentil com todos!",
    15: "porque você não mede esforços pra me agradar!",
    16: "porque você é simpática!",
    17: "porque seus peitos (PEITÕES) são perfeitos!",
    18: "porque seu sorriso é lindo!",
    19: "porque você faz falta pra mim!",
    20: "porque eu só me sinto bem se você estiver bem!",
    21: "porque você me fez uma pessoa mais responsável!",
    22: "porque você me apoia nas minhas decisões!",
    23: "porque você é doidinha kskks",
    24: "porque seu beijo é inacreditavelmente bom!",
    25: "porque você faz as melhores receitinhas!",
    26: "porque você me proporciona os melhores momentos!",
    27: "porque você é engraçada!",
    28: "porque eu posso contar sempre com você!",
    29: "porque você transa bem pra caralho!",
    30: "porque eu posso dividir qualquer fardo meu com você!",
    31: "porque a gente se completa perfeitamente!",
    32: "porque você me fez uma pessoa mais comunicativa!",
    33: "porque você faz as melhores surpresas!",
    34: "porque você me ensina muita coisa!",
    35: "porque você me fez uma pessoa melhor!",
    36: "porque você sempre esteve comigo nos piores momentos!",
    37: "porque você me conhece como ninguém!",
    38: "porque você se da bem com minha família!",
    39: "porque você compartilha sua vida comigo!",
    40: "porque você confia em mim!",
    41: "porque você faz questão de me apresentar pra suas amigas e fazer eu me dar bem com elas!",
    42: "porque você é a mulher da minha vida!"
}
const momentos = {
    1: "quando eu limpo o olho com a ponta do seu nariz",
    2: "quando eu te encho de beijo",
    3: "quando a gente cozinha juntos",
    4: "quando a gente da banho no theo juntos",
    5: "quando a gente ri juntos",
    6: "quando a gente assiste filme coladinho",
    7: "quando a gente se aconchega na minha posição no sono",
    8: "quando a gente toca os pés no meio da madrugada pra garantir que tamo juntinho",
    9: "quando você me diz porquê me ama ",
    10: "quando você faz suas dancinhas sem sentido",
    11: "quando a gente sai pra comer juntos",
    12: "quando a gente dorme juntos",
    13: "quando a gente fofoca juntos",
    14: "quando eu faço carinho em você",
    15: "quando você cuida de mim adoentado",
    16: "quando a gente assiste casimiro juntos",
    17: "quando você se preocupa com meu bem estar",
    18: "quando a gente brinca de lutinha juntos (eu brinco com você, no caso)",
    19: "quando a gente conta do nosso dia",
    20: "quando você fica com ciúmes de mexerem na minha sombracelha",
    21: "quando vai pro cinema juntos",
    22: "quando você lembra de me dar o travesseiro pra eu por entre as pernas na hora de dormir",
    23: "quando você me acorda me enchendo de beijo",
    24: "quando a gente faz os planejamentos da nossa casa",
    25: "quando a gente zoa um ao outro",
    26: "quando a gente entrelaça as pernas e os dedos na hora do sono",
    27: "quando a gente faz as trends do tiktok que você acha",
    28: "quando a gente escova os dentes de casal",
    29: "quando a gente tira cochilo de casal",
    30: "quando você fica com ciúmes de mim",
    31: "quando a gente zoa outras pessoas juntos",
    32: "quando a gente dirige de casal",
    33: "quando a gente planeja mentira pra escapar dos nossos amigos",
    34: "quando você levanta o pescoço pra eu por meu braço no meio do sono",
    35: "quando dorme na ligação sem perceber",
    36: "quando você fica com ciúmes de eu dormir fora de casa",
    37: "quando você fica emburrada se não receber o bom dia/boa noite",
    38: "quando você me manda fotinhas de 'te amo fazendo alguma coisa' no whatsapp",
    39: "quando você me ajuda a lembrar dos meus afazeres",
    40: "quando a gente dorme de casal na ligação",
    41: "quando você faz surpresas pra mim",
    42: "quando você faz um draminha mas no final faz o que eu peço"
}


const data = new Date();
const mes = data.getMonth();
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