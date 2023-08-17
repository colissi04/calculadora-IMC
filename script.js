const meuEscopo = () => {

    const form = document.getElementById('form');
    const resposta = document.getElementById('resposta');
    const resultados = [];

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        resultados.push = ({
            peso: peso.value,
            altura: altura.value
        });


        if (isNaN(peso.value)){
            return alert('Digite informacoes validas!!');
        } else if (isNaN(altura.value)){
            return alert('Digite informacoes validas!!');
        } else {
            // os dados estao ok
        }

        const imc = peso.value / (altura.value)**2;

        if  (imc >= 0 && imc < 18.5){
            resposta.style.display = 'flex';
            resposta.innerHTML = (`O seu IMC é: ${imc.toFixed(1)} (Abaixo do peso)`);
        } else if (imc >= 18.5 && imc <= 24.9){
            resposta.style.display = 'flex';
            resposta.innerHTML = (`O seu IMC é: ${imc.toFixed(1)} (Peso normal)`);
        } else if (imc >= 25 && imc <= 29.9){
            resposta.style.display = 'flex';
            resposta.innerHTML = (`O seu IMC é: ${imc.toFixed(1)} (Sobrepeso)`);
        } else if (imc >= 30 && imc <= 34.9){
            resposta.style.display = 'flex';
            resposta.innerHTML = (`O seu IMC é: ${imc.toFixed(1)} (Obesidade grau 1)`);
        } else if (imc >= 35 && imc <= 39.9){
            resposta.style.display = 'flex';
            resposta.innerHTML = (`O seu IMC é: ${imc.toFixed(1)} (Obesidade grau 2)`);
        } else {
            resposta.style.display = 'flex';
            resposta.innerHTML = (`O seu IMC é: ${imc.toFixed(1)} (Obesidade grau 3)`);
        }
    });
};

meuEscopo ();

