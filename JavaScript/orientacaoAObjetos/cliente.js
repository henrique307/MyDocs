class Cliente{
    static numeroDeClientes = 0
    constructor(nome, cpf){
        this.nome = nome
        this._cpf = cpf
        Cliente.numeroDeClientes++
    }

    get cpf(){
        return this._cpf;
    }

}


var erros = ['ERRO: Saldo insuficiente','ERRO: Sem criatividade pra mais exemplos']

function erro(posicao){
    console.log(erros[posicao])
}


export { Cliente, erro }