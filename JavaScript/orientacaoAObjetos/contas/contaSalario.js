import contas from "./contas.js";

export default class ContaSalario extends contas{
    constructor(cliente){
        super(0,cliente,100)
        contas.numeroDeContas++
    }

    saque(valor){
        return this._saque(valor,1.1) 
    }
}