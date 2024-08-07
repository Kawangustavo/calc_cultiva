document.getElementById('calcular').addEventListener('click', function() {
    // Coletar os valores dos inputs
    const nitrogenio = parseFloat(document.getElementById('nitrogenio').value);
    const fosforo = parseFloat(document.getElementById('fosforo').value);
    const potassio = parseFloat(document.getElementById('potassio').value);
    const eletrocondutividade = parseFloat(document.getElementById('eletrocondutividade').value);
    const ph = parseFloat(document.getElementById('ph').value);
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const umidade = parseFloat(document.getElementById('umidade').value);
    const resultado = parseFloat(document.getElementById('resultado'));

    //if (isNaN(nitrogenio) || isNaN(fosforo) || isNaN(potassio) || isNaN(eletrocondutividade) || isNaN(ph) || isNaN(temperatura) || isNaN(umidade)) {
      //  alert('Por favor, preencha todos os campos corretamente.');
        //return;
   // }

console.log(resultado)

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

const resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = ''; // Limpar resultados anteriores

    // Adicionar resultado de fertilidade
    const liFertilidade = document.createElement('li');
    liFertilidade.textContent = `Fertilidade: ${fertilidade}`;
    resultadoUl.appendChild(liFertilidade);

    // Adicionar cada parâmetro como item de lista
    nomesParametros.forEach((nome, index) => {
        const liParametro = document.createElement('li');
        liParametro.textContent = `${nome}: ${parametros[index] ? 'Atingido' : 'Não atingido'}`;
        resultadoUl.appendChild(liParametro);
    });

    // Adicionar parâmetros não atingidos
    if (naoAtingidos.length > 0) {
        const liNaoAtingidos = document.createElement('li');
        liNaoAtingidos.textContent = `Parâmetros não atingidos: ${naoAtingidos.join(', ')}`;
        resultadoUl.appendChild(liNaoAtingidos);
    } else {
        const liTodosAtingidos = document.createElement('li');
        liTodosAtingidos.textContent = 'Todos os parâmetros foram atingidos.';
        resultadoUl.appendChild(liTodosAtingidos);
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