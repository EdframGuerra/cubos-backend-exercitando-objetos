//criar um objeto com cosntante chamada endereçco;
// criar uma um objeto com constante chamad ausuario, sendo que a propriedade endereço do usuario
// tem que usar o endereço criado no primeiro objeto;


const endereco = {
    rua: "Edduardo Diniz",
    numero: 85,
    complemento: "casa",
    bairro: "Barra",
    cep: 40140310,
    cidade: "Salvador",
    estado: "Bahia",
    pais: "Brasil",
}

const usuario = {
    nome: "João Guilherme",
    email: "joaogui.guerra01@gmail.com",
    telefone: 5571982093819,
    dataNascimento: 30_01_2016,
    endereco
}

console.log(endereco, usuario);