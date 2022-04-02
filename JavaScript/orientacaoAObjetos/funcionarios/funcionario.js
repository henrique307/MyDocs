export default class Funcionario{
    static funcionarios = []
    constructor(nome,salario,cpf){
        this._nome = nome
        this._salario = salario
        this._cpf = cpf

        this._bonificacao = 1;
    }

    defineSenha(senhaAntiga, novaSenha){
        if(senhaAntiga === this._senha)
        this._senha = novaSenha
    }
}