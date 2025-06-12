const atividades = document.getElementById('atividades');

atividades.addEventListener('click', (e)=>{
    e.preventDefault();

    const elemento = e.target;

    const lista = elemento.classList;
    
    //Atividade 1
    if(lista.contains('checar')){
            const valor1 = document.querySelector('.valor1').value;
            const valor2 = document.querySelector('.valor2').value;
            const checar = (valor1, valor2) =>{
                const num1 = Number(valor1);
                const num2 = Number(valor2);
                return num1 > num2 ? alert(`Valor ${num1} maior que o valor ${num2}`) : alert(`Valor ${num2} maior que o valor ${num1}`);
            }
        checar(valor1, valor2);
    
    //Atividade 2
    }else if(lista.contains('atv2-checar')){
        const atv2Valor1 = document.querySelector('.atv2Valor1').value;
        const atv2Valor2 = document.querySelector('.atv2Valor2').value;
        
        const potenciacao = (atv2Valor1, atv2Valor2) => {
            const atv2Num1 = Number(atv2Valor1);
            const atv2Num2 = Number(atv2Valor2);
            const potencia = atv2Num1 ** atv2Num2;

            return alert(potencia);
        }
        potenciacao(atv2Valor1, atv2Valor2);
    }
    //Atividade 3
    else if(lista.contains('atv3-checar')){
        const fatorial = (atv3Valor1) => {
            let resultado = 1;
            for(let i = 2; i <= atv3Valor1; i++){
                resultado *= i;
            }
            return resultado;
        }
        const valor = document.querySelector('.atv3Valor1');
        const fator = fatorial(valor.value);

        alert(fator);
    }

    //Atividade 4
    else if(lista.contains('atv4-checar')){
        const calcularArea = (raio) => {
            const area = Math.PI * raio ** 2;
            return area;
        }
        const valor = document.querySelector('.atv4Valor1');
        const area = calcularArea(valor.value);
        alert(area.toFixed(3));
    }

    //Atividade 5
    else if(lista.contains('atv5-checar')){
        const apenasPares = (lista) =>{
            const pares = lista.filter((num) => num % 2 === 0);
            return pares;
        }
        const valores = document.querySelector('.atv5Valor1').value.split(',').map(Number);
        const pares = apenasPares(valores);
        alert(`Pares: ${pares.join(', ')}`);
    }

    //Atividade 6
    else if(lista.contains('atv6-checar')){
        function encontrarMaiorNumero(listaNumeros) {
            if (listaNumeros.length === 0) return null; 
            let maior = listaNumeros[0];
            for (let i = 1; i < listaNumeros.length; i++) {
                if (listaNumeros[i] > maior) {
                    maior = listaNumeros[i]; 
                }
            }
            return maior;
        }
        const valores = document.querySelector('.atv6Valor1').value.split(',').map(Number);
        const maior = encontrarMaiorNumero(valores);
        alert(`Maior Número: ${maior}`);
    }

    //Atividade 7
    else if(lista.contains('atv7-checar')){
        function sequenciaFibonacci(n){
            const fib = [0, 1];
            for(let i = 2; i < n; i++){
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            return fib.slice(0, n);
        }
        const valor = document.querySelector('.atv7Valor1').value;
        const fibonacci = sequenciaFibonacci(Number(valor));
        alert(`Sequência de Fibonacci: ${fibonacci.join(', ')}`);
    }

    //Atividade 8
    else if(lista.contains('atv8-checar')){
        function contarVogais(texto) {
            const vogais = 'aeiouAEIOU';
            let contador = 0;
            for (let char of texto) {
                if (vogais.includes(char)) {
                    contador++;
                }
            }
            return contador;
        }
        const valor = document.querySelector('.atv8Valor1').value;
        const totalVogais = contarVogais(valor);
        alert(`Total de vogais: ${totalVogais}`);
    }

    //Atividade 9
    else if(lista.contains('atv9-checar')){
        function parOuImpar(numero){
            return numero % 2 === 0 ? 'É Par' : 'É Ímpar';
        }
        const valor = document.querySelector('.atv9Valor1').value;
        const resultado = parOuImpar(Number(valor));
        alert(`Resultado: ${resultado}`);
    }

    //Atividade 10
    else if(lista.contains('atv10-checar')){
        function inverterTexto(texto) {
            return texto.split('').reverse().join('');
        }
        const valor = document.querySelector('.atv10Valor1').value;
        const textoInvertido = inverterTexto(valor);
        alert(`Texto invertido: ${textoInvertido}`);
    }

    //Atividade 11
    else if(lista.contains('atv11-checar')){
        function calculadora(num1, num2, operacao) {
            switch (operacao) {
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '*':
                    return num1 * num2;
                case '/':
                    return num2 !== 0 ? num1 / num2 : 'Divisão por zero não é permitida';
                default:
                    return 'Operação inválida';
            }
        }
        const valor1 = Number(document.querySelector('.atv11Valor1').value);
        const valor2 = Number(document.querySelector('.atv11Valor2').value);
        const operador = document.querySelector('.atv11Operador').value;
        const resultado = calculadora(valor1, valor2, operador);
        alert(`Resultado: ${resultado}`);
    }

    //Atividade 12
    else if (lista.contains('atv12-checar')) {
        function verificarCPF(cpf) {
            cpf = cpf.replace(/[^\d]+/g, '');
            
            if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
                return false;
            }

            let soma = 0;
            for (let i = 0; i < 9; i++) {
                soma += parseInt(cpf[i]) * (10 - i);
            }
            let resto = soma % 11;
            let digito1 = (resto < 2) ? 0 : 11 - resto;

            if (digito1 !== parseInt(cpf[9])) return false;

            soma = 0;
            for (let i = 0; i < 10; i++) {
                soma += parseInt(cpf[i]) * (11 - i);
            }
            resto = soma % 11;
            let digito2 = (resto < 2) ? 0 : 11 - resto;

            return digito2 === parseInt(cpf[10]);
        }

        const cpf = document.querySelector('.atv12Valor1').value;
        const valido = verificarCPF(cpf);
        alert(`CPF ${cpf} é ${valido ? 'válido' : 'inválido'}`);
    }
});

// Atividade 13
document.querySelector('.atividade13').addEventListener('submit', function(event) {
    event.preventDefault();
});

let segundos = 0;
let intervalo = null;

const contador = document.getElementById('contador');

document.querySelector('.atv13-iniciar').addEventListener('click', () => {
    if (!intervalo) {
        intervalo = setInterval(() => {
            segundos++;
            contador.textContent = segundos;
        }, 1000);
    }
});

document.querySelector('.atv13-parar').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
});

document.querySelector('.atv13-resetar').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    contador.textContent = segundos;
});
