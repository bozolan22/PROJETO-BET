function buscarCasasApostas() {
    const pesquisaInput = document.getElementById('pesquisa');
    const pesquisaTermo = pesquisaInput.value.toLowerCase();
    const resultadosDiv = document.getElementById('resultados');

    resultadosDiv.innerHTML = '';

    const casasApostas = {
        kto: {
            descricao: 'A KTO é conhecida por seus bônus de boas-vindas e variedade de esportes.',
            link: 'https://www.kto.com'
        },
        'sporting bet': {
            descricao: 'A Sporting Bet é uma das maiores casas de apostas do mundo.',
            link: 'https://www.sportingbet.com'
        },
        betano: {
            descricao: 'A Betano oferece uma plataforma intuitiva e odds competitivas.',
            link: 'https://www.betano.com'
        }
    };

    const casaEscolhida = casasApostas[pesquisaTermo.toLowerCase()];

    if (casaEscolhida) {
        resultadosDiv.innerHTML = `
            <p><b>${pesquisaTermo}</b> é uma ótima opção! Conhecida por:</p>
            <p>${casaEscolhida.descricao}</p>
            <a href="${casaEscolhida.link}">Visitar site</a>
        `;
    } else {
        resultadosDiv.innerHTML = 'Casa de apostas não encontrada.';
    }
}