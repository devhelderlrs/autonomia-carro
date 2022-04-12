function dirigirEBeber(idade){
    if (idade >= 18) {
        return 'Já pode dirigir e beber... não os dois juntos rs';
    } else {
        return 'Volte mais tarde.';
    }
}

function previsaoRodagem(litros, mediaPorLitro){
    var totalKm;
    totalKm = litros*mediaPorLitro;
    return "Estimativa de autonomia do carro: " + totalKm + " quilômetros";
}

var idade = prompt ("Quantos anos você tem?");
var lts = prompt ("Quantos litros tem no tanque?");
var mPorLitro = prompt ("Qual a média de Km/Litro?");

console.log (dirigirEBeber(idade));

console.log (previsaoRodagem(lts, mPorLitro));