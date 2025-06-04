// Atividade 1
const btnChecar = document.querySelector('.checar');

btnChecar.addEventListener('click', (e)=>{
    e.preventDefault();
    const valor1 = document.querySelector('.valor1').value;
    const valor2 = document.querySelector('.valor2').value;
    const checar = (valor1, valor2) =>{
        const num1 = Number(valor1);
        const num2 = Number(valor2);
        return num1 > num2 ? alert(`Valor ${num1} maior que o valor ${num2}`) : alert(`Valor ${num2} maior que o valor ${num1}`);
    }
    checar(valor1, valor2);
});

// Atividade 2
const atv2Checar = document.querySelector('.atv2-checar')

atv2Checar.addEventListener('click', (e)=>{
    e.preventDefault();
    const atv2Valor1 = document.querySelector('.atv2Valor1').value;
    const atv2Valor2 = document.querySelector('.atv2Valor2').value;
    
    const potenciacao = (atv2Valor1, atv2Valor2) => {
        const atv2Num1 = Number(atv2Valor1);
        const atv2Num2 = Number(atv2Valor2);
        const potencia = atv2Num1 ** atv2Num2;

        return alert(potencia);
    }
    potenciacao(atv2Valor1, atv2Valor2);
    
    atv2Valor1.value = '';
    atv2Valor2.value = '';
});

// Atividade 3