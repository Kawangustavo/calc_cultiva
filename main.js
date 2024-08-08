document.getElementById('calcular').addEventListener('click', function() {
    const nitrogenio = parseFloat(document.getElementById('nitrogenio').value);
    const fosforo = parseFloat(document.getElementById('fosforo').value);
    const potassio = parseFloat(document.getElementById('potassio').value);
    const eletrocondutividade = parseFloat(document.getElementById('eletrocondutividade').value);
    const ph = parseFloat(document.getElementById('ph').value);
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const umidade = parseFloat(document.getElementById('umidade').value);
    const resultado = parseFloat(document.getElementById('resultado'));

    document.getElementById('download').addEventListener('click', function() {
           const link = document.createElement('a');
           link.href = '/images/MRV.pdf';
           link.download = 'MRV.pdf';
           document.body.appendChild(link);
           link.click();
           document.body.removeChild(link);
       });

    if (isNaN(nitrogenio) || isNaN(fosforo) || isNaN(potassio) || isNaN(eletrocondutividade) || isNaN(ph) || isNaN(temperatura) || isNaN(umidade)) {
       alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

 function verificarNitrogenio(valor) {
    return valor >= 500 && valor <= 2000; 
}

function verificarFosforo(valor) {
    return valor >= 10 && valor <= 50; 
}

function verificarPotassio(valor) {
    return valor >= 100 && valor <= 300;
}

function verificarEletrocondutividade(valor) {
    return valor >= 150 && valor <= 1000;
}

function verificarPh(valor) {
    return valor >= 6.0 && valor <= 7.0; 
}

function verificarTemperatura(valor) {
    return valor >= 15 && valor <= 30; 
}

function verificarUmidade(valor) {
    return valor >= 20 && valor <= 80; 
}

// Parâmetros de entrada
const parametros = [
    verificarNitrogenio(nitrogenio),
    verificarFosforo(fosforo),
    verificarPotassio(potassio),
    verificarEletrocondutividade(eletrocondutividade),
    verificarPh(ph),
    verificarTemperatura(temperatura),
    verificarUmidade(umidade)
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

const parametrosAtingidos = parametros.filter(Boolean).length;
const naoAtingidos = nomesParametros.filter((_, index) => !parametros[index]);

function classificarFertilidade(numeroDeParametrosAtingidos) {
    if (numeroDeParametrosAtingidos === 7) {
        return 'Muito-fertil';
    } else if (numeroDeParametrosAtingidos >= 5) {
        return 'Fertil';
    } else if (numeroDeParametrosAtingidos >= 2) {
        return 'Mediana';
    } else {
        return 'Infertil';
    }
}

const fertilidade = classificarFertilidade(parametrosAtingidos);

const resultadoUl = document.getElementById('resultado');
resultadoUl.innerHTML = ''; 

const liFertilidade = document.createElement('li');
liFertilidade.innerHTML = `Fertilidade: <span class="fertilidade-${fertilidade}">${fertilidade}</span>`;
liFertilidade.classList.add('hidden');
resultadoUl.appendChild(liFertilidade);

nomesParametros.forEach((nome, index) => {
    const liParametro = document.createElement('li');
    liParametro.textContent = `${nome}: ${parametros[index] ? 'Atingido' : 'Não atingido'}`;
    liParametro.className = parametros[index] ? 'atingido' : 'nao-atingido';
    liParametro.classList.add('hidden');
    resultadoUl.appendChild(liParametro);
});

if (naoAtingidos.length > 0) {
    const liNaoAtingidos = document.createElement('li');
    liNaoAtingidos.textContent = `Parâmetros não atingidos: ${naoAtingidos.join(', ')}`;
    liNaoAtingidos.classList.add('hidden');
    resultadoUl.appendChild(liNaoAtingidos);
} else {
    const liTodosAtingidos = document.createElement('li');
    liTodosAtingidos.textContent = 'Todos os parâmetros foram atingidos.';
    liTodosAtingidos.classList.add('hidden');
    resultadoUl.appendChild(liTodosAtingidos);
}

let delay = 0;
const items = resultadoUl.querySelectorAll('li');

items.forEach((item, index) => {
    setTimeout(() => {
        item.classList.remove('hidden');
        item.classList.add('visible');
    }, delay);

    delay += 500; 
});

// Limpar os campos de entrada
document.getElementById('nitrogenio').value = '';
document.getElementById('fosforo').value = '';
document.getElementById('potassio').value = '';
document.getElementById('eletrocondutividade').value = '';
document.getElementById('ph').value = '';
document.getElementById('temperatura').value = '';
document.getElementById('umidade').value = '';
});
