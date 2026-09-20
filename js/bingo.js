// --- BANCO DE DADOS DOS PATROCINADORES ---
const patrocinadores = {
    1: { nome: "NETTE CENTRO DE BELEZA", descricao: "", telefone: "(61) 99984-3137" },
    2: { nome: "TORNO E CIA", descricao: "", telefone: "" },
    3: { nome: "TANIA FORROS", descricao: "", telefone: "" },
    4: { nome: "ESTACIONAMENTO PLANALTO", descricao: "", telefone: "" },
    5: { nome: "SORVETERIA BRUNA", descricao: "", telefone: "" },
    6: { nome: "JUNIOR TINTAS", descricao: "", telefone: "" },
    7: { nome: "CHAVIÔ NO TOQUE", descricao: "", telefone: "" },
    8: { nome: "VIDRO SHOPPING", descricao: "", telefone: "" },
    9: { nome: "JUNIOR TINTAS", descricao: "", telefone: "" },
    10: { nome: "NICE MODAS", descricao: "", telefone: "" },
    11: { nome: "GRANJA PARAÍSO", descricao: "", telefone: "" },
    12: { nome: "ATIVA CONTABILIDADE", descricao: "", telefone: "" },
    13: { nome: "HERNANE - Biciclo Nunes", descricao: "", telefone: "" },
    14: { nome: "RIACHINHO", descricao: "", telefone: "" },
    15: { nome: "GILBERTO", descricao: "", telefone: "" },
    16: { nome: "HERNANE - Biciclo Nunes", descricao: "", telefone: "" },
    17: { nome: "ATIVA CONTABILIDADE", descricao: "", telefone: "" },
    18: { nome: "DROGARIA VITÓRIA", descricao: "", telefone: "" },
    19: { nome: "HERNANE - Biciclo Nunes", descricao: "", telefone: "" },
    20: { nome: "AMCORE PROTEÇÃO VEICULAR", descricao: "", telefone: "" },
    21: { nome: "CHAVIÔ NO TOQUE", descricao: "", telefone: "" },
    22: { nome: "MATEUS M4X", descricao: "", telefone: "" },
    23: { nome: "ELEN CRISTIANE REP. MAGNUN TIRES", descricao: "", telefone: "" },
    24: { nome: "HERNANE - Biciclo Nunes", descricao: "", telefone: "" },
    25: { nome: "VILA TEM DE TUDO - Produtos Naturais", descricao: "", telefone: "" },
    26: { nome: "L.M. RECUPERADORA DE PNEUS", descricao: "", telefone: "" },
    27: { nome: "SORVETERIA BRUNA", descricao: "", telefone: "" },
    28: { nome: "VEREADOR LORÃO", descricao: "", telefone: "" },
    29: { nome: "ANDERSON COMERCIAL VIA 10", descricao: "", telefone: "" },
    30: { nome: "MERCEARIA VILA", descricao: "", telefone: "" },
    31: { nome: "SACOLÃO PREÇO BOM", descricao: "", telefone: "" },
    32: { nome: "VEREADOR LORÃO", descricao: "", telefone: "" },
    33: { nome: "MATEUS M4X", descricao: "", telefone: "" },
    34: { nome: "GILBERTO", descricao: "", telefone: "" },
    35: { nome: "SUPERMERCADO CRISTO REI", descricao: "", telefone: "" },
    36: { nome: "PANIFICADORA VITÓRIA", descricao: "", telefone: "" },
    37: { nome: "LA PALMA CHURRASCARIA E PIZZARIA", descricao: "", telefone: "" },
    38: { nome: "LOTERICA FORMOSA", descricao: "", telefone: "" },
    39: { nome: "ELÉTRICA E HIDRÁULICA SÃO JOSÉ", descricao: "", telefone: "" },
    40: { nome: "MERCEARIA VILA", descricao: "", telefone: "" },
    41: { nome: "LOJÃO DA DONA DE CASA", descricao: "", telefone: "" },
    42: { nome: "PADARIA DA NETE", descricao: "", telefone: "" },
    43: { nome: "LOJÃO DA DONA DE CASA", descricao: "", telefone: "" },
    44: { nome: "SUP. CRISTO REI", descricao: "", telefone: "" },
    45: { nome: "LOJÃO DA DONA DE CASA", descricao: "", telefone: "" },
    46: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    47: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    48: { nome: "SG - CONSTRUTURA", descricao: "", telefone: "(61) 99908-7126" },
    49: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    50: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    51: { nome: "VILA DOS BICHOS", descricao: "", telefone: "" },
    52: { nome: "Artesanato da Vó Maria", descricao: "", telefone: "" },
    53: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    54: { nome: "Quitanda da Mara", descricao: "", telefone: "" },
    55: { nome: "ROSE MODAS E CITROVALE", descricao: "", telefone: "" },
    56: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    57: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    58: { nome: "CARLINHO DO PASTEL", descricao: "", telefone: "(61) 99661-7141" },
    59: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    60: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    61: { nome: "Fabriciclo", descricao: "", telefone: "" },
    62: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    63: { nome: "Fabriciclo", descricao: "", telefone: "" },
    64: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    65: { nome: "Felix Batista Studio de Treinamento", descricao: "", telefone: "" },
    66: { nome: "Salão Styllus", descricao: "", telefone: "" },
    67: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    68: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    69: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    70: { nome: "KLYNFEST LOCAÇÕES", descricao: "", telefone: "" },
    71: { nome: "RIACHINHO", descricao: "", telefone: "" },
    72: { nome: "TORNO E CIA", descricao: "", telefone: "" },
    73: { nome: "Jeffão Espetos e Porções", descricao: "", telefone: "" },
    74: { nome: "São Vicente de Paulo", descricao: "", telefone: "" },
    75: { nome: "NETTE CENTRO DE BELEZA", descricao: "", telefone: "(61) 99984-3137" }
};
    // Adicione os outros patrocinadores aqui seguindo o mesmo modelo


// --- FUNÇÃO PARA BUSCAR E EXIBIR A BOLA ---
function buscarPatrocinador() {
    const input = document.getElementById('inputBola');
    let numeroDigitado = parseInt(input.value);

    // Validação de segurança
    if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 75) {
        alert("Por favor, digite um número válido entre 1 e 75.");
        input.value = '';
        input.focus();
        return;
    }

    // Formata o número para ter sempre dois dígitos
    const numeroFormatado = numeroDigitado.toString().padStart(2, '0');

    // Atualiza a bola
    document.getElementById('txtNumero').innerText = numeroFormatado;

    // Busca no banco ou cria um patrocinador genérico
    const dadosPatrocinador = patrocinadores[numeroDigitado] || {
        nome: "Apoiador Anônimo",
        descricao: "Obrigado por contribuir com a nossa Paróquia!",
        telefone: "Deus abençoe!"
    };

    // Atualiza os textos na tela
    document.getElementById('txtNomeEmpresa').innerText = dadosPatrocinador.nome;
    document.getElementById('txtDescEmpresa').innerText = dadosPatrocinador.descricao;
    document.getElementById('txtTelefoneEmpresa').innerText = dadosPatrocinador.telefone;

    // Aplica a animação de pulo na bola
    const bola = document.getElementById('containerBola');
    bola.classList.remove('animar-pulo');
    void bola.offsetWidth; 
    bola.classList.add('animar-pulo');

    // Limpa o input
    input.value = '';
    input.focus();
}

// Escuta a tecla ENTER no teclado
document.getElementById('inputBola').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        buscarPatrocinador();
    }
});

// --- CONTROLE DE TELA CHEIA (FULLSCREEN) ---
function alternarTelaCheia() {
    const elem = document.documentElement; 
    const btn = document.getElementById('btnFullscreen');

    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        btn.innerText = "Sair da Tela Cheia";
        btn.style.backgroundColor = "white";
        btn.style.color = "var(--cor-fundo)";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        btn.innerText = "Entrar em Tela Cheia";
        btn.style.backgroundColor = "transparent";
        btn.style.color = "white";
    }
}