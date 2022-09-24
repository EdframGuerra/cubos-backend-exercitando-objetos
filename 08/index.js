
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
        if (item.pets.length===0){
        console.log(`Sou ${item.nome} e não tenho pets`);
    }else{
        console.log(`Sou ${item.nome} e tenho ${item.pets.length} pets`);
    }

}
// Percorra cada pessoa da lista 

// verificar a quantidade de 

// e imprima uma mensagem de acordo com as condições a seguir.
// a. Se a pessoa não tiver pets, a mensagem deve ser: Sou João e não tenho pets.

// b. Se a pessoa tiver apenas um pet, a mensagem deve ser: Sou Ana e tenho 2 pets.

// c. Se a pessoa tiver mais de um pet, a mensagem deve ser: Sou Beatriz e tenho 1 pet.
