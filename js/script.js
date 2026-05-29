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
    // Atualiza o título da página com o mês selecionado
    document.getElementById('tituloMes').innerText = `Escala de ${mesSelecionado}`;

    // Atualiza o estado visual de todos os botões do menu
    mesesChaves.forEach(mes => {
        const botao = document.getElementById(`btn-${mes}`);
        if (botao) {
            if (mes === mesSelecionado) {
                // Estado Ativo Compacto (bg-red-900 e borda inferior amarela de espessura 2)
                botao.className = "px-4 py-2.5 text-xs font-bold bg-red-900 text-white transition border-b-2 border-yellow-400";
            } else {
                // Estado Padrão Compacto
                botao.className = "px-4 py-2.5 text-xs font-bold text-red-200 hover:bg-red-900 hover:text-white transition border-b-2 border-transparent";
            }
        }
    });

    const cardsContainer = document.getElementById('cardsEscala');
    const tabelaContainer = document.getElementById('tabelaEscalas');
    const secaoVazia = document.getElementById('secaoVazia');
    const containerCards = document.getElementById('containerCards');
    const containerTabela = document.getElementById('containerTabela');

    // Limpa exibições anteriores
    cardsContainer.innerHTML = '';
    tabelaContainer.innerHTML = '';

    const dados = bancoEscalas[mesSelecionado] || [];

    // Se o mês selecionado não possuir dados (Meses Vazios)
    if (dados.length === 0) {
        secaoVazia.classList.remove('hidden');
        containerCards.classList.add('hidden');
        containerTabela.classList.add('hidden');
        return;
    }

    // Se houver dados, reexibe os blocos
    secaoVazia.classList.add('hidden');
    containerCards.classList.remove('hidden');
    containerTabela.classList.remove('hidden');

    // Monta os Cards e as Linhas da Tabela
    dados.forEach(item => {
        // --- GERAR CARDS ---
        if (item.destaque) {
            const card = document.createElement('div');
            card.className = "rounded-3xl shadow-xl overflow-hidden border card-destaque border-yellow-400";
            card.innerHTML = `
                <div class="bg-red-700 text-white px-5 py-3 text-xs font-bold uppercase tracking-wider">
                    ${item.observacao || 'Destaque'}
                </div>
                <div class="p-5 space-y-4">
                    <div class="flex justify-between items-center">
                        <span class="text-base font-bold text-gray-600">${item.dia}</span>
                        <span class="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">${item.horario}</span>
                    </div>
                    <p class="text-2xl font-black text-red-900">${item.equipe}</p>
                </div>
            `;
            cardsContainer.appendChild(card);
        }

        // --- GERAR LINHAS DA TABELA ---
        const linha = document.createElement('tr');
        linha.className = `border-t transition-colors ${item.destaque ? 'bg-yellow-50/60 hover:bg-yellow-100/80' : 'hover:bg-gray-50'}`;
        linha.innerHTML = `
            <td class="p-4 font-semibold text-gray-900">${item.dia}</td>
            <td class="p-4 text-gray-700"><span class="bg-gray-200 text-gray-800 font-bold px-2 py-1 rounded text-xs">${item.horario}</span></td>
            <td class="p-4 font-bold ${item.equipe === 'Não Haverá' || item.equipe === 'Sem equipe' ? 'text-gray-400 italic' : 'text-red-800'}">${item.equipe}</td>
            <td class="p-4 text-gray-600 italic text-sm">${item.observacao}</td>
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