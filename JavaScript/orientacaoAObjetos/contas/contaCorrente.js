import contas from "./contas.js"

export default class ContaCorrente extends contas{
    constructor(cliente, agencia){
        super(0,cliente,agencia)
        contas.numeroDeContas++
    }
    saque(valor){
        const taxa = 1.1
        return super._saque(valor,taxa)
    }
}