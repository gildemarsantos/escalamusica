// 1. BANCO DE DADOS DAS ESCALAS (MAIO E JUNHO PREENCHIDOS)
const bancoEscalas = {
    janeiro: [],
    fevereiro: [],
    marco: [],
    abril: [],
    maio: [
        { "dia": "01/05 (Sexta)", "horario": "18 horas", "equipe": "Gil", "observacao": "Missa semanal", "destaque": false },
        { "dia": "03/05 (Domingo)", "horario": "07 horas", "equipe": "Cristina", "observacao": "Missa da Manhã", "destaque": true },
        { "dia": "03/05 (Domingo)", "horario": "19 horas", "equipe": "Nova Canção", "observacao": "Missa da Noite", "destaque": true },
        { "dia": "04/05 (Segunda)", "horario": "19 horas", "equipe": "Stefany", "observacao": "Missa semanal", "destaque": false },
        { "dia": "05/05 (Terça)", "horario": "19 horas", "equipe": "Gil", "observacao": "Missa semanal", "destaque": false },
        { "dia": "08/05 (Sexta)", "horario": "19 horas", "equipe": "Sem equipe", "observacao": "-", "destaque": false },
        { "dia": "10/05 (Domingo)", "horario": "07 horas", "equipe": "Novo Ser", "observacao": "Missa da Manhã", "destaque": true },
        { "dia": "10/05 (Domingo)", "horario": "19 horas", "equipe": "Cora das Crianças", "observacao": "Missa da Noite", "destaque": true },
        { "dia": "11/05 (Segunda)", "horario": "19 horas", "equipe": "Gil", "observacao": "Missa semanal", "destaque": false },
        { "dia": "12/05 (Terça)", "horario": "19 horas", "equipe": "Nova Canção", "observacao": "Missa semanal", "destaque": false },
        { "dia": "15/05 (Sexta)", "horario": "19 horas", "equipe": "Providência Divina", "observacao": "Missa semanal", "destaque": false },
        { "dia": "17/05 (Domingo)", "horario": "07 horas", "equipe": "Adorarei", "observacao": "Missa da Manhã", "destaque": true },
        { "dia": "17/05 (Domingo)", "horario": "19 horas", "equipe": "Kairós", "observacao": "Missa da Noite", "destaque": true },
        { "dia": "18/05 (Segunda)", "horario": "19 horas", "equipe": "Pentecostes", "observacao": "Festa / Novena", "destaque": false },
        { "dia": "19/05 (Terça)", "horario": "19 horas", "equipe": "Pentecostes", "observacao": "Festa / Novena", "destaque": false },
        { "dia": "22/05 (Sexta)", "horario": "19 horas", "equipe": "Pentecostes", "observacao": "Festa / Novena", "destaque": false },
        { "dia": "24/05 (Domingo)", "horario": "07 horas", "equipe": "Paula", "observacao": "Missa da Manhã", "destaque": true },
        { "dia": "24/05 (Domingo)", "horario": "19 horas", "equipe": "Pentecostes", "observacao": "Solene de Pentecostes", "destaque": true },
        { "dia": "25/05 (Segunda)", "horario": "19 horas", "equipe": "Providência Divina", "observacao": "Missa semanal", "destaque": false },
        { "dia": "26/05 (Terça)", "horario": "19 horas", "equipe": "Nova Canção", "observacao": "Missa semanal", "destaque": false },
        { "dia": "29/05 (Sexta)", "horario": "19 horas", "equipe": "Gil", "observacao": "Missa semanal", "destaque": false },
        { "dia": "31/05 (Domingo)", "horario": "07 horas", "equipe": "Luiz Henrique", "observacao": "Missa da Manhã", "destaque": true },
        { "dia": "31/05 (Domingo)", "horario": "19 horas", "equipe": "Providência Divina", "observacao": "Missa da Noite", "destaque": true }
    ],
    junho: [
        { "dia": "1 (segunda)", "horario": "19 horas", "equipe": "Stefanie", "observacao": "Missa semanal", "destaque": false },
        { "dia": "2 (terça)", "horario": "19 horas", "equipe": "Providência Divina", "observacao": "Missa semanal", "destaque": false },
        { "dia": "4 (quinta)", "horario": "08 horas", "equipe": "Nova Canção", "observacao": "CORPUS CHRISTI", "destaque": true },
        { "dia": "5 (sexta)", "horario": "19 horas", "equipe": "Não Haverá", "observacao": "-", "destaque": false },
        { "dia": "7 (domingo)", "horario": "07 horas", "equipe": "Cristina", "observacao": "Missa da Manhã", "destaque": true },
        { "dia": "7 (domingo)", "horario": "19 horas", "equipe": "Coral das Crianças", "observacao": "Missa da Noite", "destaque": true },
        { "dia": "8 (segunda)", "horario": "19 horas", "equipe": "Não Haverá", "observacao": "-", "destaque": false },
        { "dia": "9 (terça)", "horario": "19 horas", "equipe": "Não Haverá", "observacao": "-", "destaque": false },
        { "dia": "12 (sexta)", "horario": "19 horas", "equipe": "Não Haverá", "observacao": "-", "destaque": false },
        { "dia": "14 (domingo)", "horario": "07 horas", "equipe": "Providência Divina", "observacao": "Missa da Manhã", "destaque": true },
        { "dia": "14 (domingo)", "horario": "19 horas", "equipe": "Novo Ser", "observacao": "Missa da Noite", "destaque": true },
        { "dia": "15 (segunda)", "horario": "19 horas", "equipe": "Providência Divina", "observacao": "Missa semanal", "destaque": false },
        { "dia": "16 (terça)", "horario": "19 horas", "equipe": "Nova Canção", "observacao": "Missa semanal", "destaque": false },
        { "dia": "19 (sexta)", "horario": "19 horas", "equipe": "Não Haverá", "observacao": "-", "destaque": false },
        { "dia": "21 (domingo)", "horario": "07 horas", "equipe": "Kairós", "observacao": "Missa da Manhã", "destaque": true },
        { "dia": "21 (domingo)", "horario": "19 horas", "equipe": "Adorarei", "observacao": "Missa da Noite", "destaque": true },
        { "dia": "22 (segunda)", "horario": "19 horas", "equipe": "Não Haverá", "observacao": "-", "destaque": false },
        { "dia": "23 (terça)", "horario": "19 horas", "equipe": "Não Haverá", "observacao": "-", "destaque": false },
        { "dia": "26 (sexta)", "horario": "19 horas", "equipe": "Não Haverá", "observacao": "-", "destaque": false },
        { "dia": "28 (domingo)", "horario": "07 horas", "equipe": "Totus Tuus Mariae", "observacao": "Missa da Manhã", "destaque": true },
        { "dia": "28 (domingo)", "horario": "19 horas", "equipe": "Luiz Henrique", "observacao": "Missa da Noite", "destaque": true },
        { "dia": "29 (segunda)", "horario": "19 horas", "equipe": "Não Haverá", "observacao": "-", "destaque": false },
        { "dia": "30 (terça)", "horario": "19 horas", "equipe": "Não Haverá", "observacao": "-", "destaque": false }
    ],
    julho: [], agosto: [], setembro: [], outubro: [], novembro: [], dezembro: []
};

// Mapeamento para traduzir o número do sistema para a chave do nosso banco
const mesesChaves = [
    'janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

// 2. FUNÇÃO PARA CONTROLAR A RENDERIZAÇÃO E O VISUAL DOS BOTÕES
function mudarMes(mesSelecionado) {
    document.getElementById('tituloMes').innerText = `Escala de ${mesSelecionado}`;

    // Atualiza os botões do menu (Mantido igual)
    mesesChaves.forEach(mes => {
        const botao = document.getElementById(`btn-${mes}`);
        if (botao) {
            if (mes === mesSelecionado) {
                botao.className = "px-4 py-2.5 text-xs font-bold bg-red-900 text-white transition border-b-2 border-yellow-400";
            } else {
                botao.className = "px-4 py-2.5 text-xs font-bold text-red-200 hover:bg-red-900 hover:text-white transition border-b-2 border-transparent";
            }
        }
    });

    const cardsContainer = document.getElementById('cardsEscala');
    const tabelaContainer = document.getElementById('tabelaEscalas');
    const secaoVazia = document.getElementById('secaoVazia');
    const containerCards = document.getElementById('containerCards');
    const containerTabela = document.getElementById('containerTabela');

    cardsContainer.innerHTML = '';
    tabelaContainer.innerHTML = '';

    const dados = bancoEscalas[mesSelecionado] || [];

    if (dados.length === 0) {
        secaoVazia.classList.remove('hidden');
        containerCards.classList.add('hidden');
        containerTabela.classList.add('hidden');
        return;
    }

    secaoVazia.classList.add('hidden');
    containerCards.classList.remove('hidden');
    containerTabela.classList.remove('hidden');

    // --- PEGAR A DATA ATUAL DO COMPUTADOR ---
    const dataHoje = new Date();
    const diaAtual = dataHoje.getDate(); // Ex: 15, 20, 30...
    const numeroMesAtual = dataHoje.getMonth(); // 0 a 11
    const nomeMesAtual = mesesChaves[numeroMesAtual]; // 'maio', 'junho'...

    dados.forEach(item => {
        // Extrai o número do dia da escala (pega os 2 primeiros caracteres. Ex: "03/05" vira 3)
        const diaDaMissa = parseInt(item.dia.substring(0, 2));
        
        // TESTE INTELIGENTE: A missa já passou? 
        // É considerada "passada" se estivermos visualizando o mês atual e o dia da missa for menor que o dia de hoje,
        // OU se estivermos visualizando um mês que já ficou para trás no ano.
        const mesJaPassou = mesesChaves.indexOf(mesSelecionado) < numeroMesAtual;
        const diaJaPassouNoMesAtual = (mesSelecionado === nomeMesAtual && diaDaMissa < diaAtual);
        
        const missaConcluida = mesJaPassou || diaJaPassouNoMesAtual;

        // --- CLASSES VISUAIS BASEADAS NO STATUS ---
        // Se a missa já passou, aplicamos filtros de cinza (grayscale) e opacidade reduzida
        const estiloCard = missaConcluida 
            ? "bg-gray-100 text-gray-400 opacity-50 grayscale border border-gray-300" 
            : (item.destaque ? "bg-white border border-yellow-400 shadow-xl" : "bg-white border border-gray-200 shadow-md");

        const estiloLinhaTabela = missaConcluida 
            ? "bg-gray-100/70 text-gray-400 line-through opacity-60" 
            : (item.destaque ? "bg-yellow-50/60 hover:bg-yellow-100/80" : "hover:bg-gray-50");

        const textoObservacao = missaConcluida 
            ? `✔️ Celebrada | ${item.observacao}` 
            : item.observacao;

        // --- GERAR CARDS ---
        if (item.destaque) {
            const card = document.createElement('div');
            card.className = `rounded-3xl overflow-hidden transition-all ${estiloCard}`;
            card.innerHTML = `
                <div class="${missaConcluida ? 'bg-gray-400' : 'bg-red-700'} text-white px-5 py-3 text-xs font-bold uppercase tracking-wider">
                    ${missaConcluida ? 'Missa Concluída' : (item.observacao || 'Destaque')}
                </div>
                <div class="p-5 space-y-4">
                    <div class="flex justify-between items-center">
                        <span class="text-base font-bold">${item.dia}</span>
                        <span class="${missaConcluida ? 'bg-gray-200 text-gray-500' : 'bg-red-100 text-red-800'} text-xs font-bold px-3 py-1 rounded-full">${item.horario}</span>
                    </div>
                    <p class="text-2xl font-black ${missaConcluida ? 'text-gray-400' : 'text-red-900'}">${item.equipe}</p>
                </div>
            `;
            cardsContainer.appendChild(card);
        }

        // --- GERAR LINHAS DA TABELA ---
        const linha = document.createElement('tr');
        linha.className = `border-t transition-colors ${estiloLinhaTabela}`;
        linha.innerHTML = `
            <td class="p-4 font-semibold">${item.dia}</td>
            <td class="p-4">
                <span class="${missaConcluida ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-800'} font-bold px-2 py-1 rounded text-xs">
                    ${item.horario}
                </span>
            </td>
            <td class="p-4 font-bold ${missaConcluida ? 'text-gray-400' : (item.equipe === 'Não Haverá' || item.equipe === 'Sem equipe' ? 'text-gray-400 italic' : 'text-red-800')}">
                ${item.equipe}
            </td>
            <td class="p-4 italic text-sm ${missaConcluida ? 'text-gray-400 no-underline' : 'text-gray-600'}">
                ${textoObservacao}
            </td>
        `;
        tabelaContainer.appendChild(linha);
    });
}

// 3. INICIALIZAÇÃO AUTOMÁTICA DETECTANDO O MÊS ATUAL
document.addEventListener('DOMContentLoaded', () => {
    // Pega o número do mês atual (0 a 11) baseado no relógio do dispositivo
    const numeroMesAtual = new Date().getMonth();

    // Converte o número para o nome da nossa chave correspondente
    const mesAuto = mesesChaves[numeroMesAtual];

    // Carrega a escala e destaca o botão desse mês automaticamente
    mudarMes(mesAuto);
});