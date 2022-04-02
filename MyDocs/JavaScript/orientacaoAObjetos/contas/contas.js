import { Cliente, erro } from "../cliente.js"

export default class Contas{
    static numeroDeContas = 0
    constructor(saldo, cliente, agencia){
        this._saldo = saldo
        this._agencia = agencia
        this._cliente = cliente
        if(this.constructor == contas){
            throw new Error('Voce não deveria chamar a class Conta diretamente')
        }
        
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente
        }
    }

    get agencia(){
        return this._agencia
    }

    get cliente(){
        return this._cliente
    }
    
    // #saldo https://github.com/tc39/proposal-class-fields#private-fields
    
    get saldo(){
        return this._saldo
    }
    
    saque(valor){
        return this._saque(valor, taxa)
    }

    _saque(valor,taxa){
        valor = taxa * valor
        if(this._saldo >= valor){
            this._saldo -= valor
        }else{
            erro(0)
        }
    }
    
    deposito(valor){
        if(valor >= 0){
            this._saldo += valor
        }else{
            erro(1)
        }
    }
    
    transferir(valor, conta){
        if(this._saldo <= valor){
            erro(0)
            return
        }else{
            this.saque(valor)
            conta.deposito(valor)
        }
    }
}