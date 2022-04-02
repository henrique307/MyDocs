import contas from "./contas.js"

export default class ContaPoupanca extends contas{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial,cliente,agencia)
        contas.numeroDeContas++
    }

    saque(valor){
        return this._saque(valor,1.2)
    }
}