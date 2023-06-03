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
        nome_da_aula: "Variáveis"
    },
    {
        identificador: 3,
        nomeDaAula: "Condicionais",
    },
    {
        identificador: 4,
        nomeDaAula: "Arrays",
    },
]

for (let item of listaDeAulas) {
    curso.aulas.push(item);
}

console.log(curso);


