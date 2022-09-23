// adicionar a lista de aulas abaixo na propriedade aulas do objeto curso.

const curso = {
    id: 1234,
    nomde: "Logica de Programação",
    aulas: [],
}

const listaDeAulas = [
    {
        identificador: 1,
        nomeDaAula: "introdução de programação",
    },
    {
        identificador: 2,
        nomeDaAula: "Condicionais",
    },
    {
        identificador: 3,
        nomeDaAula: "Arrays",
    },
]

for (let item of listaDeAulas) {
    curso.aulas.push(item);
}

console.log(curso);
