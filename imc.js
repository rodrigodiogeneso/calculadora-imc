
const calcular = document.getElementById('calcular');


function Imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    if (nome !== '' && altura !== '' && peso !== '') {
        const valorImc = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorImc < 18.5) {
            classificacao = 'Abaixo do peso.'
        }else if (valorImc < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
        } else if (valorImc < 30) {
            classificacao = 'com sobrepeso';
        } else if (valorImc < 35) {
            classificacao = 'com obesidade grau 1';
        } else if (valorImc < 40) {
            classificacao = 'com obesidade grau 2';
        } else {
            classificacao = 'com obesidade grau 3';
        }

        resultado.textContent = `${nome} seu IMC é  ${valorImc} e você está  ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos';
    }

} 
calcular.addEventListener('click', Imc); 