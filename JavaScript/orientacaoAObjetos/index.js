import { Cliente } from "./cliente.js"
import { Gerente, Diretor, Funcionario } from "./funcionarios/index.js"
//import Gerente from "./funcionarios/gerente.js"

const gerentes = [new Gerente('Rarlos Coberto', 5000, 1234458643)]
gerentes[0].defineSenha('1234')
const diretores = [new Gerente ('Thomas Tercard',10000,1233887458)]
diretores[0].defineSenha('2345')

console.log(Funcionario.funcionarios)
console.table(gerentes)
// CLIENTES

// import { Cliente } from "./cliente.js"
// import { contaCorrente } from "./contas/contaCorrente.js"
// import { contaPoupanca } from "./contas/contaPoupanca.js"
// import { contas } from "./contas/contas.js"
// import { ContaSalario } from "./contas/contaSalario.js"

// const Cadaconta = []

// let cliente1 = new Cliente('Ricardo', 11122233309, 100)
// let cliente2 = new Cliente('Larissa', 44422211198, 100)

// Cadaconta[0] = new contaCorrente(cliente1, 1001)
// Cadaconta[1] = new contaPoupanca(1000,cliente2, 1001)
// Cadaconta[2] = new ContaSalario(cliente2)



// //Cadaconta[2] = new contas(100,new Cliente("rafael", 24523452345, 100),1002) VAI DAR UM ERRO PQ CE NAO DEVERIA ESTAR CHAMANDO O CONTAS DIRETAMENTE, SÓ AS INSTANCIASS

// Cadaconta[0].deposito(1000)
// Cadaconta[0].saque(100)

// console.log(contas.numeroDeContas)


// **********OBSERVAÇÕES**********

// https://metring.com.br/javascript-converter-array-em-string#:~:text=O%20m%C3%A9todo%20toString()%20%C3%A9,do%20Array%2C%20separada%20por%20v%C3%ADrgulas.
// https://dicasdejavascript.com.br/javascript-como-converter-objeto-json-em-string/

// const texto = JSON.stringify(contas[0])
// const devolta = JSON.parse(inteiro)


//const inteiro = '[' + texto+','+texto2 + ']'


// const devolta = JSON.parse(texto)


// console.log (devolta)


// contaCorrenteRicardo.transferir(150,contas[1])


// console.log('Aline: ' + contas[1]._saldo, 'Ricardo: ' + contaCorrenteRicardo._saldo)


// DA PRA FAZER ISSO 
//var classes = [class Cliente{nome;cpf;agencia;_saldo},class atendente{nome;salario;mandaBem}]
// E CHAMAR ASSIM classes[0] ( vam a class Cliente com nome cpf agencia e saldo )