import { Funcionario } from "./funcionario";

export class Empresa {
    funcionarios: Funcionario[]

    constructor(funcionarios: Funcionario[]){
        this.funcionarios = funcionarios
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario)
    }

    atualizarSalario(matricula: number, salario: number): void {
        let i: number
        for(i = 0; i < this.funcionarios.length && this.funcionarios[i].matricula != matricula; i++){}

        if(i < this.funcionarios.length){
            this.funcionarios[i].salario = salario
            console.log("Salario atualizado")
            return
        }
        console.log("Funcionario nao encontrado")
        return
    }

    consultarFuncionario(matricula: number): Funcionario | undefined {
        let i: number
        for(i = 0; i < this.funcionarios.length && this.funcionarios[i].matricula != matricula; i++){}

        if(i < this.funcionarios.length){
            return this.funcionarios[i]
        }
        return
    }
}