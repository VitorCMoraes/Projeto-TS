import { Tarefa } from "./tarefa";

export class GestorTarefas{
    private tarefas: Tarefa[]

    constructor(tarefas: Tarefa[]){
        this.tarefas = tarefas
    }

    adicionarTarefa(tarefa: Tarefa): void{
        this.tarefas.push(tarefa)
    }

    atualizarStatus(id: number, status: string): void{
        const index = this.tarefas.findIndex(item => item.id == id)
        if(index != -1){
            this.tarefas[index].status = status
            console.log("Status da tarefa atualizado")
            return
        }
        console.log("Tarefa nao encontrada")
        return
    }

    consultarTarefasPorProjeto(projeto: string): Tarefa[]{
        const tarefasPorProjeto = this.tarefas.filter(item => item.projeto == projeto)

        return tarefasPorProjeto
    }
}