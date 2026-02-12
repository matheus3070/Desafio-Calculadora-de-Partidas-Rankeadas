let saldoVitorias = 90;
let saldoDerrotas = 5;

let saldoRankeada = saldo(saldoVitorias, saldoDerrotas);

function saldo(vitorias, derrotas){
    return vitorias - derrotas;
}


switch (true){
    case saldoRankeada <= 10:
        console.log(`O herói tem um saldo de ${saldoRankeada} está no nível de Ferro`);
        break;

    case saldoRankeada >= 11 && saldoRankeada <= 20:
        console.log(`O herói tem um saldo de ${saldoRankeada} está no nível de Bronze`);
        break;

    case saldoRankeada >= 21 && saldoRankeada <= 50:
        console.log(`O herói tem um saldo de ${saldoRankeada} está no nível de Prata`);
        break;

    case saldoRankeada >= 51 && saldoRankeada <= 80:
        console.log(`O herói tem um saldo de ${saldoRankeada} está no nível de Ouro`);
        break;

    case saldoRankeada >= 81 && saldoRankeada <= 90:
        console.log(`O herói tem um saldo de ${saldoRankeada} está no nível de Diamante`);
        break;

    case saldoRankeada >= 91 && saldoRankeada <= 100:
        console.log(`O herói tem um saldo de ${saldoRankeada} está no nível de Lendário`);
        break;

    default:
        console.log(`O herói tem um saldo de ${saldoRankeada} está no nível de Imortal`);

}