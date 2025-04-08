// TúlioThauãDutra :D

let nome; // string.
let altura; // float.
let peso; // float.
let imc; // INDICE DE MASSA CORPORAL.
let cor = ""; // cor da class
let classificacao = ""; // sua classe

function click1() {
    //ENTRADA
    nome = prompt("Digite o seu nome: ");
    altura = prompt("Digite a sua altura em cm: ");
    peso = prompt("Digite o seu peso: ");
    altura = parseFloat(altura);
    peso = parseFloat(peso);

    //PROCESSO
    altura = altura / 100;
    imc = peso / (altura * altura);

    //BaixoPesoMuitoGrave
    if (imc < 16) {
        classificacao = "Baixo Peso Muito Grave!";
        cor = "red";
    }
    //BaixoPesoGrave
    else if (imc >= 16 && imc < 17) {
        classificacao = "Baixo Peso Grave!";
        cor = "orange";
    }
    //BaixoPeso
    else if (imc >= 17 && imc < 18.5) {
        classificacao = "Baixo Peso";
        cor = "yellow";
    }
    //PesoNormal
    else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso Normal!";
        cor = "green";
    }
    //Sobrepeso
    else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso!";
        cor = "yellow";
    }
    //Obesidade grau I
    else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I!";
        cor = "orange";
    }
    // Obesidade grau II
    else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II!";
        cor = "red";
    }
    // Obesidade grau III
    else if (imc >= 40) {
        classificacao = "Obesidade grau III!";
        cor = "red";
    } 
    if (isNaN(imc)) {
        alert("Você não informou um valor válido para calcular o IMC.");
        document.getElementById("resultado").textContent = "IMC inválido";
        document.getElementById("resultado").style.color = "gray";
        return; 
} 

    alert("Olá, " + nome + " suas informações foram recebidas com sucesso!");
    alert("Obrigado por usar o meu site!");

    //Saída
    let resultadoImc = document.getElementById("seuimc");
    let resultadoSpan = document.getElementById("resultado");

    resultadoImc.innerText = imc.toFixed(2);
    resultadoImc.style.textShadow = "5px 5px 20px black";

    resultadoSpan.textContent = `${classificacao}`;
    resultadoSpan.style.color = cor;
    resultadoSpan.style.textShadow = "5px 5px 20px black";
}
