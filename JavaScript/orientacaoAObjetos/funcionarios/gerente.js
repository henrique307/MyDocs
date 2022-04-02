import Funcionario from "./funcionario.js";

export default class Gerente extends Funcionario{
    constructor(nome,salario,cpf){
        super(nome,salario,cpf)
        this._bonificacao = 1.5
        Funcionario.funcionarios.push(nome)
    }
}