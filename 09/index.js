const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]


let contador = 0;
let encontrandoAmigo = "Ana";

for (let item of participantes) {
    if (item.nome) {
        contador++;
        if (item.nome === encontrandoAmigo) {
            break

        }
    }

}
console.log(`Galera...  ${encontrandoAmigo} está na posição ${contador}, corre lá!`);