let dadosPaciente = {
    nome: "joão Paulo Da Silva",
    endereco:
    {
        rua: "Avenida brasil",
        numero: 30,
        complemento: "N/A",
        cep: "00284180",
    },
    dentes: [
        {
            incisivos_centrais: {
                qtd: 4,
                tempo: "7-12 meses",
            },
            incisivos_laterais: {
                qtd: 4,
                tempo: "9-13 meses",
            },
            caninos: {
                qtd: 4,
                tempo: "16-22 meses",
            },
            primeiros_molares: {
                qtd: 4,
                tempo: "13-19 meses",
            },
            segundos_molares: {
                qtd: 4,
                tempo: "25-33 meses",
            }
        },
    ],
};

for (let dente of dadosPaciente.dentes) {
    console.log(`Incisivos centrais - Quatidade: ${dente.incisivos_centrais.qtd}`);
    console.log(`Incisivos centrais - tempo: ${dente.incisivos_centrais.tempo}`);
    console.log(`Incisivos laterais - quantidade: ${dente.incisivos_laterais.qtd}`);
    console.log(`Incisivos laterais - tempo: ${dente.incisivos_laterais.tempo}`);
    console.log(`Caninos - quantidade:: ${dente.caninos.qtd}`)
    console.log(`Caninos - tempo: ${dente.caninos.tempo}`);
    console.log(`Primeiros molares - quantidade: ${dente.primeiros_molares.qtd}`);
    console.log(`Primeiros molares - tempo: ${dente.primeiros_molares.tempo}`);
    console.log(`Segundos molares - quantidade: ${dente.segundos_molares.qtd}`);
    console.log(`Segundos molares - tempo: ${dente.segundos_molares.tempo}`)
}

/*

let concessionaria1 = {
    cnpj: "00011122210001-45",
    endereco:
    {
        logradouro: "Rua A",
        numero: 10,
        bairro: "Vila J",
    },
    veiculos:
    [
        {
            marca: "Ford",
            modelo: "Ecosport",
            anoDeFabricacao: 2018,
            cor: "cinza",
        },
        {
            marca: "Chevrolet",
            modelo: "Onix",
            anoDeFabricacao: 2020,
        },
        {
            marca: "Volkswagen",
            modelo: "Nivus",
            anoDeFabricacao: 2020,
        },
        {
            marca: "Fiat",
            modelo: "Toro",
            anoDeFabricacao: 2021,
        },
    ],
};

for (let veiculo of concessionaria1.veiculos){
     console.log(`Marca: ${veiculo.marca}`);
     console.log(`Modelo: ${veiculo.modelo}`);
     console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`);
}
*/