
const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]


for (let item of usuarios) {
    if (item.pets.length === 0) {
        console.log(`Sou ${item.nome} e não tenho pets`);
    } else {
        let texto = item.pets.length > 1 ? "pets" : "pet";
        console.log(`Sou ${item.nome} e tenho ${item.pets.length} ${texto}`);
    }

}
