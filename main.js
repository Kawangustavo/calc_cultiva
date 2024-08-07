document.getElementById('calcular').addEventListener('click', function() {
    // Coletar os valores dos inputs
    const nitrogenio = parseFloat(document.getElementById('nitrogenio').value);
    const fosforo = parseFloat(document.getElementById('fosforo').value);
    const potassio = parseFloat(document.getElementById('potassio').value);
    const eletrocondutividade = parseFloat(document.getElementById('eletrocondutividade').value);
    const ph = parseFloat(document.getElementById('ph').value);
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const umidade = parseFloat(document.getElementById('umidade').value);

    if (isNaN(nitrogenio) || isNaN(fosforo) || isNaN(potassio) || isNaN(eletrocondutividade) || isNaN(ph) || isNaN(temperatura) || isNaN(umidade)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

// Função para verificar se o valor é maior que 100
function verificarValor(valor) {
    return valor > 100;
}

// Parâmetros de entrada
const parametros = [
    verificarValor(nitrogenio),
    verificarValor(fosforo),
    verificarValor(potassio),
    verificarValor(eletrocondutividade),
    verificarValor(ph),
    verificarValor(temperatura),
    verificarValor(umidade)
];

// Nomes dos parâmetros
const nomesParametros = [
    'Nitrogênio',
    'Fósforo',
    'Potássio',
    'Eletrocondutividade',
    'pH',
    'Temperatura',
    'Umidade'
];

// Contar quantos parâmetros foram atingidos e identificar os não atingidos
const parametrosAtingidos = parametros.filter(Boolean).length;
const naoAtingidos = nomesParametros.filter((_, index) => !parametros[index]);

// Função para classificar a fertilidade
function classificarFertilidade(numeroDeParametrosAtingidos) {
    if (numeroDeParametrosAtingidos === 7) {
        return 'muitofertil';
    } else if (numeroDeParametrosAtingidos >= 5) {
        return 'fertil';
    } else if (numeroDeParametrosAtingidos >= 2) {
        return 'mediano';
    } else {
        return 'infertil';
    }
}

// Classificar a fertilidade com base no número de parâmetros atingidos
const fertilidade = classificarFertilidade(parametrosAtingidos);

// Exibir o resultado no console
console.log('Fertilidade:', fertilidade);
if (naoAtingidos.length > 0) {
    console.log('Parâmetros não atingidos:', naoAtingidos.join(', '));
} else {
    console.log('Todos os parâmetros foram atingidos.');
}

    document.getElementById('nitrogenio').value = '';
    document.getElementById('fosforo').value = '';
    document.getElementById('potassio').value = '';
    document.getElementById('eletrocondutividade').value = '';
    document.getElementById('ph').value = '';
    document.getElementById('temperatura').value = '';
    document.getElementById('umidade').value = '';
    // Exibir o resultado
    });