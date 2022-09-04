function imc(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function enviarIMC(evento){
        evento.preventDefault(); // Cancelar envio do formulário

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        if(!peso.value || !altura.value){
            console.log("Error!\nNenhum dado inserido");
        }
        else{

            const imc = peso.value / (altura.value * altura.value);

            resultado.style.display = 'block';

            const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

            if(imc < 18.5){
                resultado.innerHTML = `${nivel[0]} - IMC: ${imc.toFixed(2)} `;
                resultado.style.background = 'lightgreen';
            }
            else if(imc >= 18.5 && imc <= 24.9){
                resultado.innerHTML = `${nivel[1]} - IMC: ${imc.toFixed(2)} `;
                resultado.style.background = 'green';
            }
            else if(imc >= 25 && imc <= 29.9){
                resultado.innerHTML = `${nivel[2]} - IMC: ${imc.toFixed(2)} `;
                resultado.style.background = 'lightsalmon';
            }
            else if(imc >= 30 && imc <= 34.9){
                resultado.innerHTML = `${nivel[3]} - IMC: ${imc.toFixed(2)} `;
                resultado.style.background = 'red';
            }
            else if(imc >= 35 && imc <= 39.9){
                resultado.innerHTML = `${nivel[4]} - IMC: ${imc.toFixed(2)} `;
                resultado.style.background = 'red';
            }
            else if(imc < 40){
                resultado.innerHTML = `${nivel[5]} - IMC: ${imc.toFixed(2)} `;
                resultado.style.background = 'red';
            }
            else{
                resultado.innerHTML = `Dados Inválidos`;
                resultado.style.background = 'darkred';
            }
        }
    }

    form.addEventListener('submit', enviarIMC);
}

imc();