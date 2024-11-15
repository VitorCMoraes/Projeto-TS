import { Funcionario } from "./funcionario";

export class Empresa {
    private funcionarios: Funcionario[]

    constructor(funcionarios: Funcionario[]){
        this.funcionarios = funcionarios
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario)
    }

    atualizarSalario(matricula: number, salario: number): void {
        const index = this.funcionarios.findIndex(item => item.matricula == matricula)
        if(index != -1){
            this.funcionarios[index].salario = salario
            console.log("Salario atualizado")
            return
        }
        console.log("Funcionario nao encontrado")
        return
    }

    consultarFuncionario(matricula: number): Funcionario | undefined {
        const index = this.funcionarios.findIndex(item => item.matricula == matricula)
        return index != -1 ? this.funcionarios[index] : undefined
    }
}