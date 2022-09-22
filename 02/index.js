const carros = {
    marca: "Volkwagen",
    modelo: "Gol",
    ano: 2022,
    cor: "vermelho",
    qtdDePorta: 4,
    automatico: false
};

if (carros.automatico) {
    carros.automatico = "cambio automatico";
} else {
    carros.automatico = "cambio manual";
}
console.log(carros);